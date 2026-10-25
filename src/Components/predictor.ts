export type TeamStats = {
  // Últimos 5 partidos
  winsLast5: number;
  drawsLast5: number;
  lossesLast5: number;
  goalsForLast5: number;
  goalsAgainstLast5: number;

  // Rendimiento según local/visitante
  matchesLocation: number;
  goalsForLocation: number;
  goalsAgainstLocation: number;

  // Estadísticas adicionales
  over25Percentage: number;
  bttsPercentage: number;
  cleanSheetPercentage: number;
};

export type PredictionResult = {
  homeWin: number;
  draw: number;
  awayWin: number;

  expectedHomeGoals: number;
  expectedAwayGoals: number;

  over15: number;
  over25: number;
  over35: number;

  btts: number;

  mostLikelyScores: {
    score: string;
    probability: number;
  }[];

  confidence: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const average = (total: number, matches: number) => {
  if (matches <= 0) return 0;
  return total / matches;
};

/**
 * Distribución de Poisson.
 */
function poisson(lambda: number, goals: number): number {
  if (lambda <= 0) {
    return goals === 0 ? 1 : 0;
  }

  let factorial = 1;

  for (let i = 2; i <= goals; i++) {
    factorial *= i;
  }

  return (Math.exp(-lambda) * Math.pow(lambda, goals)) / factorial;
}

/**
 * Calcula la fuerza ofensiva del equipo.
 */
function calculateAttack(
  stats: TeamStats,
  leagueAverageGoals = 1.4
): number {
  const recentGoals = average(
    stats.goalsForLast5,
    5
  );

  const locationGoals = average(
    stats.goalsForLocation,
    stats.matchesLocation
  );

  const recentAttack =
    recentGoals / leagueAverageGoals;

  const locationAttack =
    locationGoals / leagueAverageGoals;

  return (
    recentAttack * 0.4 +
    locationAttack * 0.4 +
    0.2
  );
}

/**
 * Calcula la fuerza defensiva.
 *
 * Un número menor significa mejor defensa.
 */
function calculateDefense(
  stats: TeamStats,
  leagueAverageGoals = 1.4
): number {
  const recentConceded = average(
    stats.goalsAgainstLast5,
    5
  );

  const locationConceded = average(
    stats.goalsAgainstLocation,
    stats.matchesLocation
  );

  const recentDefense =
    recentConceded / leagueAverageGoals;

  const locationDefense =
    locationConceded / leagueAverageGoals;

  return (
    recentDefense * 0.4 +
    locationDefense * 0.4 +
    0.2
  );
}

/**
 * Calcula la probabilidad de todos los marcadores
 * entre 0 y 6 goles por equipo.
 */
function calculateScoreProbabilities(
  homeXG: number,
  awayXG: number
) {
  const scores: {
    home: number;
    away: number;
    probability: number;
  }[] = [];

  for (let home = 0; home <= 6; home++) {
    for (let away = 0; away <= 6; away++) {
      const homeProbability = poisson(homeXG, home);
      const awayProbability = poisson(awayXG, away);

      scores.push({
        home,
        away,
        probability:
          homeProbability * awayProbability,
      });
    }
  }

  return scores;
}

export function predictMatch(
  home: TeamStats,
  away: TeamStats
): PredictionResult {
  const leagueAverageGoals = 1.4;

  const homeAttack = calculateAttack(
    home,
    leagueAverageGoals
  );

  const awayAttack = calculateAttack(
    away,
    leagueAverageGoals
  );

  const homeDefense = calculateDefense(
    home,
    leagueAverageGoals
  );

  const awayDefense = calculateDefense(
    away,
    leagueAverageGoals
  );

  /*
   * Factor de localía.
   *
   * No queremos exagerarlo.
   */
  const homeAdvantage = 1.12;

  /*
   * Ataque local contra defensa visitante.
   */
  let expectedHomeGoals =
    leagueAverageGoals *
    homeAttack *
    awayDefense *
    homeAdvantage;

  /*
   * Ataque visitante contra defensa local.
   */
  let expectedAwayGoals =
    leagueAverageGoals *
    awayAttack *
    homeDefense;

  /*
   * Evitamos resultados absurdos.
   */
  expectedHomeGoals = clamp(
    expectedHomeGoals,
    0.15,
    4.5
  );

  expectedAwayGoals = clamp(
    expectedAwayGoals,
    0.15,
    4.5
  );

  const scores = calculateScoreProbabilities(
    expectedHomeGoals,
    expectedAwayGoals
  );

  let homeWin = 0;
  let draw = 0;
  let awayWin = 0;

  let over15 = 0;
  let over25 = 0;
  let over35 = 0;

  let btts = 0;

  for (const score of scores) {
    const totalGoals = score.home + score.away;

    if (score.home > score.away) {
      homeWin += score.probability;
    } else if (score.home === score.away) {
      draw += score.probability;
    } else {
      awayWin += score.probability;
    }

    if (totalGoals >= 2) {
      over15 += score.probability;
    }

    if (totalGoals >= 3) {
      over25 += score.probability;
    }

    if (totalGoals >= 4) {
      over35 += score.probability;
    }

    if (score.home >= 1 && score.away >= 1) {
      btts += score.probability;
    }
  }

  /*
   * Ordenamos los marcadores más probables.
   */
  const mostLikelyScores = [...scores]
    .sort(
      (a, b) =>
        b.probability - a.probability
    )
    .slice(0, 5)
    .map((score) => ({
      score: `${score.home}-${score.away}`,
      probability: score.probability * 100,
    }));

  /*
   * Confianza inicial.
   *
   * V1: se basa principalmente en la cantidad
   * de información disponible.
   */
  const dataQuality =
    Math.min(home.matchesLocation, 10) / 10 *
    Math.min(away.matchesLocation, 10) / 10;

  const probabilityClarity =
    Math.max(
      homeWin,
      draw,
      awayWin
    );

  const confidence = clamp(
    (
      dataQuality * 0.4 +
      probabilityClarity * 0.6
    ) * 100,
    0,
    100
  );

  return {
    homeWin: homeWin * 100,
    draw: draw * 100,
    awayWin: awayWin * 100,

    expectedHomeGoals,
    expectedAwayGoals,

    over15: over15 * 100,
    over25: over25 * 100,
    over35: over35 * 100,

    btts: btts * 100,

    mostLikelyScores,

    confidence,
  };
}