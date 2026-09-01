import { useState } from "react";
import { Link } from "react-router-dom";

export default function Porcentaje() {
  const [valor, setValor] = useState("");
  const [porcentaje, setPorcentaje] = useState("");

  const resultado =
    valor !== "" && porcentaje !== ""
      ? (Number(valor) * Number(porcentaje)) / 100
      : null;

  const limpiar = () => {
    setValor("");
    setPorcentaje("");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-4 py-8">

      <div className="max-w-2xl mx-auto">

        {/* VOLVER */}
        <Link
          to="/calculadoras"
          className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 no-underline mb-6"
        >
          ← Volver a calculadoras
        </Link>

        {/* ENCABEZADO */}
        <header className="text-center mb-8">

          <div className="text-5xl mb-3">
            🧮
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold">
            Calculadora de Porcentaje
          </h1>

          <p className="text-gray-600 mt-3">
            Calcula fácilmente un porcentaje de cualquier cantidad.
          </p>

        </header>

        {/* CALCULADORA */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">

          <div className="space-y-5">

            {/* VALOR */}
            <div>
              <label
                htmlFor="valor"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Cantidad
              </label>

              <input
                id="valor"
                type="number"
                inputMode="decimal"
                placeholder="Ej. 500"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* PORCENTAJE */}
            <div>
              <label
                htmlFor="porcentaje"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Porcentaje
              </label>

              <div className="relative">

                <input
                  id="porcentaje"
                  type="number"
                  inputMode="decimal"
                  placeholder="Ej. 20"
                  value={porcentaje}
                  onChange={(e) => setPorcentaje(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 text-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                  %
                </span>

              </div>
            </div>

          </div>

          {/* RESULTADO */}
          {resultado !== null && (
            <div className="mt-6 rounded-2xl bg-purple-50 border border-purple-100 p-6 text-center">

              <p className="text-sm text-purple-600 font-semibold">
                Resultado
              </p>

              <p className="text-4xl font-extrabold text-purple-700 mt-2">
                {resultado.toLocaleString("es-PE", {
                  maximumFractionDigits: 2,
                })}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                {porcentaje}% de {valor} es{" "}
                <strong>{resultado.toLocaleString("es-PE", {
                  maximumFractionDigits: 2,
                })}</strong>
              </p>

            </div>
          )}

          {/* BOTÓN LIMPIAR */}
          {(valor !== "" || porcentaje !== "") && (
            <button
              type="button"
              onClick={limpiar}
              className="w-full mt-5 rounded-xl border border-gray-300 py-3 font-semibold text-gray-600 hover:bg-gray-50 transition cursor-pointer"
            >
              Limpiar
            </button>
          )}

        </div>

        {/* EXPLICACIÓN */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-6">

          <h2 className="text-xl font-bold mb-3">
            ¿Cómo calcular un porcentaje?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Para calcular un porcentaje, multiplica la cantidad por el
            porcentaje y divide el resultado entre 100.
          </p>

          <div className="bg-gray-50 rounded-xl p-4 mt-4 text-center font-mono text-gray-700">
            (cantidad × porcentaje) ÷ 100
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Por ejemplo, el 20% de 500 es 100.
          </p>

        </section>

        {/* AVISO */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Calculadora gratuita de porcentaje de PeopleHint.
        </p>

      </div>
    </div>
  );
}