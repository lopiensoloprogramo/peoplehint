import { useState } from "react";
import { Link } from "react-router-dom";

export default function IMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const pesoNumero = Number(peso);
  const alturaNumero = Number(altura);

  const alturaMetros =
    alturaNumero > 0 ? alturaNumero / 100 : 0;

  const imc =
    pesoNumero > 0 && alturaMetros > 0
      ? pesoNumero / (alturaMetros * alturaMetros)
      : null;

  const obtenerCategoria = (valor: number) => {
    if (valor < 18.5) {
      return {
        nombre: "Bajo peso",
        texto: "Tu resultado está por debajo del rango considerado normal.",
      };
    }

    if (valor < 25) {
      return {
        nombre: "Peso normal",
        texto: "Tu resultado se encuentra dentro del rango considerado normal.",
      };
    }

    if (valor < 30) {
      return {
        nombre: "Sobrepeso",
        texto: "Tu resultado se encuentra por encima del rango considerado normal.",
      };
    }

    return {
      nombre: "Obesidad",
      texto: "Tu resultado se encuentra en un rango elevado.",
    };
  };

  const limpiar = () => {
    setPeso("");
    setAltura("");
  };

  const categoria = imc !== null
    ? obtenerCategoria(imc)
    : null;

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
            ⚖️
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold">
            Calculadora de IMC
          </h1>

          <p className="text-gray-600 mt-3">
            Calcula tu índice de masa corporal a partir de tu peso y altura.
          </p>

        </header>

        {/* CALCULADORA */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">

          <div className="space-y-5">

            {/* PESO */}
            <div>

              <label
                htmlFor="peso"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Peso
              </label>

              <div className="relative">

                <input
                  id="peso"
                  type="number"
                  min="1"
                  step="0.1"
                  inputMode="decimal"
                  placeholder="Ej. 70"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16 text-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                  kg
                </span>

              </div>

            </div>

            {/* ALTURA */}
            <div>

              <label
                htmlFor="altura"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Altura
              </label>

              <div className="relative">

                <input
                  id="altura"
                  type="number"
                  min="1"
                  step="1"
                  inputMode="numeric"
                  placeholder="Ej. 170"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16 text-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                  cm
                </span>

              </div>

            </div>

          </div>

          {/* RESULTADO */}
          {imc !== null && categoria && (

            <div className="mt-6">

              <div className="rounded-2xl bg-purple-50 border border-purple-100 p-6 text-center">

                <p className="text-sm text-purple-600 font-semibold">
                  Tu IMC es
                </p>

                <p className="text-5xl font-extrabold text-purple-700 mt-2">
                  {imc.toFixed(1)}
                </p>

                <p className="text-xl font-bold text-gray-800 mt-3">
                  {categoria.nombre}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  {categoria.texto}
                </p>

              </div>

              {/* TABLA */}
              <div className="mt-5">

                <h2 className="font-bold text-lg mb-3">
                  Rangos de IMC
                </h2>

                <div className="overflow-hidden rounded-xl border border-gray-200">

                  <div className="grid grid-cols-2 bg-gray-50 font-semibold text-sm">
                    <div className="p-3">
                      IMC
                    </div>

                    <div className="p-3">
                      Categoría
                    </div>
                  </div>

                  <div className="grid grid-cols-2 border-t text-sm">
                    <div className="p-3">
                      Menos de 18.5
                    </div>

                    <div className="p-3">
                      Bajo peso
                    </div>
                  </div>

                  <div className="grid grid-cols-2 border-t text-sm">
                    <div className="p-3">
                      18.5 – 24.9
                    </div>

                    <div className="p-3">
                      Peso normal
                    </div>
                  </div>

                  <div className="grid grid-cols-2 border-t text-sm">
                    <div className="p-3">
                      25 – 29.9
                    </div>

                    <div className="p-3">
                      Sobrepeso
                    </div>
                  </div>

                  <div className="grid grid-cols-2 border-t text-sm">
                    <div className="p-3">
                      30 o más
                    </div>

                    <div className="p-3">
                      Obesidad
                    </div>
                  </div>

                </div>

              </div>

              {/* LIMPIAR */}
              <button
                type="button"
                onClick={limpiar}
                className="w-full mt-5 rounded-xl border border-gray-300 py-3 font-semibold text-gray-600 hover:bg-gray-50 transition cursor-pointer"
              >
                Limpiar
              </button>

            </div>

          )}

        </div>

        {/* INFORMACIÓN */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-6">

          <h2 className="text-xl font-bold mb-3">
            ¿Qué es el IMC?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            El índice de masa corporal (IMC) es un indicador que relaciona
            el peso de una persona con su altura. Se utiliza como una
            referencia general para clasificar el peso en diferentes rangos.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">
            ¿Cómo se calcula el IMC?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            La fórmula consiste en dividir el peso en kilogramos entre la
            altura en metros elevada al cuadrado.
          </p>

          <div className="bg-gray-50 rounded-xl p-4 mt-4 text-center font-mono text-gray-700">
            IMC = peso ÷ (altura × altura)
          </div>

          <p className="text-gray-500 text-sm mt-4">
            El IMC es una referencia general y no sustituye una evaluación
            profesional.
          </p>

        </section>

        {/* AVISO */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Calculadora de IMC gratuita de PeopleHint.
        </p>

      </div>
    </div>
  );
}