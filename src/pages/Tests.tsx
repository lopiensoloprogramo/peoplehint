import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ToolCard from "../Components/ToolCard";
import { tools } from "../data/tools";

export default function Tests() {
  const [busqueda, setBusqueda] = useState("");

  const testTools = tools.filter(
    (tool) => tool.category === "tests"
  );

  const herramientasFiltradas = useMemo(() => {
    const termino = busqueda.toLowerCase().trim();

    if (!termino) {
      return testTools;
    }

    return testTools.filter((tool) =>
      `${tool.title} ${tool.description}`
        .toLowerCase()
        .includes(termino)
    );
  }, [busqueda, testTools]);

  const populares = testTools.filter(
    (tool) => tool.popular
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-4 py-8">

      <div className="max-w-5xl mx-auto">

        {/* NAVEGACIÓN */}
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 no-underline mb-6"
        >
          ← Volver a PeopleHint
        </Link>

        {/* HERO */}
        <header className="text-center mb-8">

          <div className="text-5xl mb-3">
            🧠
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold">
            Tests online
          </h1>

          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Pon a prueba tu inteligencia, percepción y diferentes aspectos
            de tu personalidad.
          </p>

        </header>

        {/* BUSCADOR */}
        <div className="max-w-2xl mx-auto mb-10">

          <div className="relative">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              🔎
            </span>

            <input
              type="search"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar un test..."
              className="w-full bg-white border border-gray-200 rounded-2xl pl-12 pr-4 py-4 shadow-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition"
            />

          </div>

        </div>

        {/* POPULARES */}
        {!busqueda && populares.length > 0 && (

          <section className="mb-10">

            <div className="flex items-center justify-between mb-4">

              <h2 className="text-2xl font-bold">
                🔥 Tests populares
              </h2>

              <span className="text-sm text-gray-400">
                {populares.length} tests
              </span>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {populares.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                />
              ))}

            </div>

          </section>

        )}

        {/* TODOS LOS TESTS */}
        <section>

          <div className="flex items-center justify-between mb-4">

            <h2 className="text-2xl font-bold">
              {busqueda
                ? "Resultados"
                : "Todos los tests"}
            </h2>

            <span className="text-sm text-gray-400">
              {herramientasFiltradas.length}
            </span>

          </div>

          {herramientasFiltradas.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {herramientasFiltradas.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                />
              ))}

            </div>

          ) : (

            <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">

              <div className="text-4xl mb-3">
                🔎
              </div>

              <h3 className="font-bold text-lg">
                No encontramos ese test
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Prueba con otro término de búsqueda.
              </p>

              <button
                type="button"
                onClick={() => setBusqueda("")}
                className="mt-5 rounded-xl bg-purple-600 text-white px-5 py-3 font-semibold hover:bg-purple-700 transition cursor-pointer"
              >
                Ver todos
              </button>

            </div>

          )}

        </section>

        {/* INFORMACIÓN SEO */}
        <section className="bg-white rounded-2xl border border-gray-100 p-6 mt-10">

          <h2 className="text-xl font-bold mb-3">
            Tests online gratuitos
          </h2>

          <p className="text-gray-600 leading-relaxed">
            En PeopleHint encontrarás diferentes tests online para poner a
            prueba tus habilidades, conocer mejor algunos aspectos de tu
            personalidad y descubrir cómo podrías ser percibido por otras
            personas.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Los resultados de estos tests tienen fines principalmente
            recreativos y no sustituyen evaluaciones profesionales.
          </p>

        </section>

        {/* FOOTER */}
        <p className="text-center text-xs text-gray-400 mt-8 pb-4">
          PeopleHint · Tests online gratuitos
        </p>

      </div>

    </div>
  );
}