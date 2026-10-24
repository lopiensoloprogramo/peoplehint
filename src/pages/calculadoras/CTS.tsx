
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calculator, RotateCcw } from "lucide-react";

const money = (value: number) =>
  new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

const today = new Date();
const defaultDate = `${today.getFullYear()}-${String(
  today.getMonth() + 1
).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

type Period = "noviembre" | "mayo";

function getPeriod(period: Period, year: number) {
  if (period === "noviembre") {
    return {
      start: new Date(year, 4, 1),
      end: new Date(year, 9, 31),
      gratuity: "julio",
    };
  }

  return {
    start: new Date(year - 1, 10, 1),
    end: new Date(year, 3, 30),
    gratuity: "diciembre",
  };
}

// Convierte el tiempo trabajado a meses y días CTS,
// utilizando meses laborales de 30 días.

function getMonthsAndDays(start: Date, end: Date) {
  if (start > end) return { months: 0, days: 0 };

  // Si se trabaja desde el primer día hasta el último día
  // de un mes, ese mes se considera completo.
  const endIsLastDay =
    end.getDate() ===
    new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate();

  if (start.getDate() === 1 && endIsLastDay) {
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      end.getMonth() -
      start.getMonth() +
      1;

    return { months, days: 0 };
  }

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    end.getMonth() -
    start.getMonth();

  let days = end.getDate() - start.getDate() + 1;

  if (days <= 0) {
    months -= 1;
    days += 30;
  }

  if (days > 30) {
    months += 1;
    days -= 30;
  }

  return {
    months: Math.max(0, months),
    days: Math.max(0, days),
  };
}


export default function CTS() {
  const [salary, setSalary] = useState("1800");
  const [entryDate, setEntryDate] = useState("2025-12-01");
  const [familyAllowance, setFamilyAllowance] = useState(false);
  const [gratuity, setGratuity] = useState("0");
  const [variables, setVariables] = useState("0");
  const [period, setPeriod] = useState<Period>("noviembre");
  const [year, setYear] = useState(String(today.getFullYear()));

  const result = useMemo(() => {
    const sueldo = Math.max(0, Number(salary) || 0);
    const gratificacion = Math.max(0, Number(gratuity) || 0);
    const promedio = Math.max(0, Number(variables) || 0);
    const ingreso = new Date(`${entryDate}T00:00:00`);
    const selectedYear = Number(year);

    const { start, end, gratuity: gratuityMonth } = getPeriod(
      period,
      selectedYear
    );

    const validEntry =
      entryDate !== "" &&
      !Number.isNaN(ingreso.getTime()) &&
      ingreso <= end;

    const effectiveStart =
      validEntry && ingreso > start ? ingreso : start;

    const time = validEntry
      ? getMonthsAndDays(effectiveStart, end)
      : { months: 0, days: 0 };

    const daysWorked = time.months * 30 + time.days;

    const family = familyAllowance ? 123 : 0;
    const monthlyBase = sueldo + family + promedio;

    // Régimen general: remuneración computable más 1/6
    // de la gratificación del semestre correspondiente.
    const generalBase = monthlyBase + gratificacion / 6;
    const general =
      daysWorked > 0
        ? (generalBase / 12) * time.months +
          (generalBase / 360) * time.days
        : 0;

    // Pequeña empresa REMYPE: 15 remuneraciones diarias
    // por año, proporcional al tiempo trabajado.
    const smallBusiness =
      (monthlyBase / 720) * daysWorked;

    return {
      start,
      end,
      gratuityMonth,
      months: time.months,
      days: time.days,
      general,
      smallBusiness,
      microBusiness: 0,
      daysWorked,
      validEntry,
    };
  }, [
    salary,
    entryDate,
    familyAllowance,
    gratuity,
    variables,
    period,
    year,
  ]);

  function reset() {
    setSalary("1800");
    setEntryDate(defaultDate);
    setFamilyAllowance(false);
    setGratuity("0");
    setVariables("0");
    setPeriod("noviembre");
    setYear(String(today.getFullYear()));
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-800 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/calculadoras"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600"
        >
          <ArrowLeft size={18} />
          Volver a calculadoras
        </Link>

        <header className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
            <Calculator size={28} />
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Calculadora de CTS Perú
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Calcula una estimación de tu Compensación por Tiempo de
            Servicios según tu sueldo, fecha de ingreso y régimen laboral.
          </p>
        </header>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <h2 className="mb-5 text-lg font-bold">
            Datos para el cálculo
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold">
              Sueldo mensual (S/)
              <input
                type="number"
                min="0"
                step="0.01"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </label>

            <label className="block text-sm font-semibold">
              Fecha de ingreso
              <input
                type="date"
                value={entryDate}
                onChange={(e) => setEntryDate(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </label>

            <label className="block text-sm font-semibold">
              Período de CTS
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value as Period)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-indigo-500"
              >
                <option value="mayo">Depósito de mayo (noviembre-abril)</option>
                <option value="noviembre">Depósito de noviembre (mayo-octubre)</option>
              </select>
            </label>

            <label className="block text-sm font-semibold">
              Año del depósito
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-indigo-500"
              >
                {Array.from(
                  { length: 8 },
                  (_, i) => today.getFullYear() - 5 + i
                ).map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </label>

            <label className="block text-sm font-semibold">
              Gratificación de {result.gratuityMonth} recibida (S/)
              <input
                type="number"
                min="0"
                step="0.01"
                value={gratuity}
                onChange={(e) => setGratuity(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
              <span className="mt-1 block text-xs font-normal text-slate-500">
                Ingresa la gratificación efectivamente recibida, sin
                la bonificación extraordinaria.
              </span>
            </label>

            <label className="block text-sm font-semibold">
              Promedio mensual de variables (S/)
              <input
                type="number"
                min="0"
                step="0.01"
                value={variables}
                onChange={(e) => setVariables(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
              <span className="mt-1 block text-xs font-normal text-slate-500">
                Ingresa el promedio computable de comisiones u otros
                conceptos variables que correspondan.
              </span>
            </label>
          </div>

          <label className="mt-5 flex cursor-pointer items-center gap-3 rounded-xl bg-slate-50 p-4 text-sm font-medium">
            <input
              type="checkbox"
              checked={familyAllowance}
              onChange={(e) => setFamilyAllowance(e.target.checked)}
              className="h-5 w-5 accent-indigo-600"
            />
            Recibo asignación familiar
            <span className="ml-auto text-slate-500">S/ 123</span>
          </label>

          <button
            type="button"
            onClick={reset}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600"
          >
            <RotateCcw size={16} />
            Restablecer datos
          </button>
        </section>

        <section className="mt-6">
          <div className="mb-4">
            <h2 className="text-xl font-extrabold">Resultados estimados</h2>
            <p className="mt-1 text-sm text-slate-500">
              Período: {result.start.toLocaleDateString("es-PE")} al{" "}
              {result.end.toLocaleDateString("es-PE")}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Tiempo computado: {result.months} meses y {result.days} días
            </p>
          </div>

          {!result.validEntry && (
            <p className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              La fecha de ingreso es posterior al cierre del período
              seleccionado o no es válida. No corresponde CTS por ese
              período.
            </p>
          )}

          <div className="grid gap-4 sm:grid-cols-3">
            <article className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">
                Régimen general
              </p>
              <p className="mt-3 text-2xl font-extrabold text-indigo-700">
                {money(result.general)}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Incluye 1/6 de la gratificación ingresada.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">
                Pequeña empresa REMYPE
              </p>
              <p className="mt-3 text-2xl font-extrabold text-amber-700">
                {money(result.smallBusiness)}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Estimación proporcional según el régimen especial.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">
                Microempresa REMYPE
              </p>
              <p className="mt-3 text-2xl font-extrabold text-slate-700">
                {money(result.microBusiness)}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                En general, sin CTS bajo el régimen especial.
              </p>
            </article>
          </div>
        </section>

        <p className="mt-6 text-xs leading-5 text-slate-500">
          Calculadora referencial para trabajadores del régimen laboral
          privado peruano. El resultado puede variar por días computables,
          inasistencias, remuneraciones variables, régimen laboral,
          inscripción en REMYPE y condiciones particulares del contrato.
          No reemplaza una liquidación laboral oficial.
        </p>
      </div>
    </main>
  );
}
