import {
  predictMatch,
  TeamStats,
} from "./predictor";

const arsenal: TeamStats = {
  winsLast5: 4,
  drawsLast5: 1,
  lossesLast5: 0,
  goalsForLast5: 10,
  goalsAgainstLast5: 4,

  matchesLocation: 10,
  goalsForLocation: 24,
  goalsAgainstLocation: 8,

  over25Percentage: 60,
  bttsPercentage: 50,
  cleanSheetPercentage: 50,
};

const everton: TeamStats = {
  winsLast5: 2,
  drawsLast5: 1,
  lossesLast5: 2,
  goalsForLast5: 6,
  goalsAgainstLast5: 8,

  matchesLocation: 10,
  goalsForLocation: 11,
  goalsAgainstLocation: 16,

  over25Percentage: 50,
  bttsPercentage: 60,
  cleanSheetPercentage: 20,
};

const prediction = predictMatch(
  arsenal,
  everton
);
console.log("Respuesta es",prediction);

export default function Resultado() {

    return(
        <>
       <span>Resultado en el log</span>
        </>
    )
}