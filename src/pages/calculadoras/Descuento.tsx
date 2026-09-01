import { useState } from "react";
import { Link } from "react-router-dom";

export default function Descuento() {
  const [precio, setPrecio] = useState("");
  const [descuento, setDescuento] = useState("");

  const precioNumero = Number(precio);
  const descuentoNumero = Number(descuento);

  const esValido =
    precio !== "" &&
    descuento !== "" &&
    precioNumero >= 0 &&
    descuentoNumero >= 0 &&
    descuentoNumero <= 100;

  const montoDescuento = esValido
    ? (precioNumero * descuentoNumero) / 100
    : null;

  const precioFinal =
    montoDescuento !== null
      ? precioNumero - montoDescuento
      : null;

  const formatear = (numero: number) => {
    return numero.toLocaleString("es-PE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const limpiar = () => {
    setPrecio("");
    setDescuento("");
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
            🏷️
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold">
            Calculadora de Descuentos
          </h1>

          <p className="text-gray-600 mt-3">
            Calcula cuánto ahorrarás y cuál será el precio final después de aplicar un descuento.
          </p>
        </header>

        {/* CALCULADORA */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">

          <div className="space-y-5">

            {/* PRECIO ORIGINAL */}
            <div>
              <label
                htmlFor="precio"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Precio original
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                  S/
                </span>

                <input
                  id="precio"
                  type="number"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  placeholder="Ej. 100"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 pl-12 pr-4 py-3 text-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
              </div>
            </div>

            {/* DESCUENTO */}
            <div>
              <label
                htmlFor="descuento"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Descuento
              </label>

              <div className="relative">
                <input
                  id="descuento"
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  inputMode="decimal"
                  placeholder="Ej. 20"
                  value={descuento}
                  onChange={(e) => setDescuento(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 text-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                  %
                </span>
              </div>
            </div>

          </div>

          {/* RESULTADOS */}
          {esValido && montoDescuento !== null && precioFinal !== null && (
            <div className="mt-6 space-y-4">

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-purple-50 border border-purple-100 p-5 text-center">
                  <p className="text-sm text-purple-600 font-semibold">
                    Ahorras
                  </p>

                  <p className="text-2xl md:text-3xl font-extrabold text-purple-700 mt-2">
                    S/ {formatear(montoDescuento)}
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 border border-green-100 p-5 text-center">
                  <p className="text-sm text-green-600 font-semibold">
                    Precio final
                  </p>

                  <p className="text-2xl md:text-3xl font-extrabold text-green-700 mt-2">
                    S/ {formatear(precioFinal)}
                  </p>
                </div>

              </div>

              <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-center text-sm text-gray-600">
                Un descuento de{" "}
                <strong>{descuentoNumero}%</strong> sobre{" "}
                <strong>S/ {formatear(precioNumero)}</strong> equivale a{" "}
                <strong>S/ {formatear(montoDescuento)}</strong> de ahorro.
              </div>

            </div>
          )}

          {/* ERROR */}
          {precio !== "" &&
            descuento !== "" &&
            descuentoNumero > 100 && (
              <p className="mt-4 text-sm text-red-500 text-center">
                El descuento no puede ser mayor al 100%.
              </p>
            )}

          {/* LIMPIAR */}
          {(precio !== "" || descuento !== "") && (
            <button
              type="button"
              onClick={limpiar}
              className="w-full mt-5 rounded-xl border border-gray-300 py-3 font-semibold text-gray-600 hover:bg-gray-50 transition cursor-pointer"
            >
              Limpiar
            </button>
          )}

        </div>

        {/* EJEMPLOS */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-6">

          <h2 className="text-xl font-bold mb-3">
            ¿Cómo calcular un descuento?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Para calcular un descuento, multiplica el precio original por el
            porcentaje de descuento y divide el resultado entre 100. Después,
            resta esa cantidad al precio original.
          </p>

          <div className="bg-gray-50 rounded-xl p-4 mt-4 text-center font-mono text-gray-700">
            Precio × descuento ÷ 100
          </div>

          <h3 className="font-bold mt-6 mb-2">
            Ejemplo
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Si un producto cuesta S/ 200 y tiene un descuento del 25%, ahorrarás
            S/ 50 y el precio final será S/ 150.
          </p>

        </section>

        <p className="text-center text-xs text-gray-400 mt-6">
          Calculadora de descuentos gratuita de PeopleHint.
        </p>

      </div>
    </div>
  );
}