import { useState } from "react";
import { Link } from "react-router-dom";

function calcularEdad(fechaNacimiento: Date, fechaActual: Date) {
  let años = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  let meses = fechaActual.getMonth() - fechaNacimiento.getMonth();
  let días = fechaActual.getDate() - fechaNacimiento.getDate();

  if (días < 0) {
    meses--;

    const díasMesAnterior = new Date(
      fechaActual.getFullYear(),
      fechaActual.getMonth(),
      0
    ).getDate();

    días += díasMesAnterior;
  }

  if (meses < 0) {
    años--;
    meses += 12;
  }

  return { años, meses, días };
}

function calcularProximoCumpleaños(fechaNacimiento: Date) {
  const hoy = new Date();

  let próximo = new Date(
    hoy.getFullYear(),
    fechaNacimiento.getMonth(),
    fechaNacimiento.getDate()
  );

  if (próximo < hoy) {
    próximo = new Date(
      hoy.getFullYear() + 1,
      fechaNacimiento.getMonth(),
      fechaNacimiento.getDate()
    );
  }

  const diferencia = próximo.getTime() - hoy.getTime();

  return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
}

export default function Edad() {
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [resultado, setResultado] = useState<{
    años: number;
    meses: number;
    días: number;
    díasCumpleaños: number;
  } | null>(null);

  const calcular = () => {
    if (!fechaNacimiento) return;

    const nacimiento = new Date(`${fechaNacimiento}T00:00:00`);
    const hoy = new Date();

    if (nacimiento > hoy) {
      setResultado(null);
      return;
    }

    const edad = calcularEdad(nacimiento, hoy);
    const díasCumpleaños = calcularProximoCumpleaños(nacimiento);

    setResultado({
      ...edad,
      díasCumpleaños,
    });
  };

  const limpiar = () => {
    setFechaNacimiento("");
    setResultado(null);
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
            🎂
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold">
            Calculadora de Edad
          </h1>

          <p className="text-gray-600 mt-3">
            Calcula tu edad exacta a partir de tu fecha de nacimiento.
          </p>

        </header>

        {/* CALCULADORA */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">

          <label
            htmlFor="fechaNacimiento"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Fecha de nacimiento
          </label>

          <input
            id="fechaNacimiento"
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />

          <button
            type="button"
            onClick={calcular}
            disabled={!fechaNacimiento}
            className="w-full mt-5 rounded-xl bg-purple-600 text-white py-3 font-bold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
          >
            Calcular mi edad
          </button>

          {/* RESULTADO */}
          {resultado && (
            <div className="mt-6">

              <div className="rounded-2xl bg-purple-50 border border-purple-100 p-6 text-center">

                <p className="text-sm text-purple-600 font-semibold">
                  Tu edad exacta es
                </p>

                <div className="grid grid-cols-3 gap-3 mt-4">

                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-3xl font-extrabold text-purple-700">
                      {resultado.años}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      años
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-3xl font-extrabold text-purple-700">
                      {resultado.meses}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      meses
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-3xl font-extrabold text-purple-700">
                      {resultado.días}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      días
                    </p>
                  </div>

                </div>

              </div>

              {/* PRÓXIMO CUMPLEAÑOS */}
              <div className="mt-4 rounded-2xl bg-pink-50 border border-pink-100 p-5 text-center">

                <p className="text-sm text-pink-600 font-semibold">
                  🎉 Próximo cumpleaños
                </p>

                <p className="text-2xl font-extrabold text-pink-700 mt-2">
                  {resultado.díasCumpleaños === 0
                    ? "¡Hoy es tu cumpleaños!"
                    : `Faltan ${resultado.díasCumpleaños} días`}
                </p>

              </div>

              <button
                type="button"
                onClick={limpiar}
                className="w-full mt-4 rounded-xl border border-gray-300 py-3 font-semibold text-gray-600 hover:bg-gray-50 transition cursor-pointer"
              >
                Limpiar
              </button>

            </div>
          )}

        </div>

        {/* INFORMACIÓN SEO */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-6">

          <h2 className="text-xl font-bold mb-3">
            ¿Cómo calcular la edad?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Para conocer tu edad, introduce tu fecha de nacimiento y nuestra
            calculadora comparará esa fecha con la fecha actual. El resultado
            muestra los años, meses y días transcurridos desde tu nacimiento.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">
            ¿Qué más puedo saber con mi fecha de nacimiento?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Además de conocer tu edad, puedes saber cuánto falta para tu
            próximo cumpleaños. Esta herramienta funciona directamente desde
            tu navegador y es gratuita.
          </p>

        </section>

        {/* AVISO */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Calculadora de edad gratuita de PeopleHint.
        </p>

      </div>
    </div>
  );
}