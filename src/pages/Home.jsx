import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white px-4 py-8">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="text-center pt-6 pb-10">

        

          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            PeopleHint
          </h1>

          <p className="text-lg md:text-xl mt-3 opacity-95">
            Herramientas y tests online para descubrir, calcular y analizar.
          </p>

          <p className="text-sm opacity-75 mt-2">
            Gratis, rápidos y fáciles de usar.
          </p>

        </section>


        {/* CATEGORÍAS */}
        <section className="mb-10">

          <h2 className="text-2xl font-bold mb-4">
            Explora PeopleHint
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <Link
              to="/calculadoras"
              className="group bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/25 hover:-translate-y-1 transition-all duration-200 no-underline text-white border border-white/10"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">
                🧮
              </div>

              <div className="font-bold text-lg">
                Calculadoras
              </div>

              <div className="text-xs opacity-75 mt-1">
                Cálculos útiles
              </div>
            </Link>


            <Link
              to="/tests"
              className="group bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/25 hover:-translate-y-1 transition-all duration-200 no-underline text-white border border-white/10"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">
                🧠
              </div>

              <div className="font-bold text-lg">
                Tests
              </div>

              <div className="text-xs opacity-75 mt-1">
                Pon a prueba tu mente
              </div>
            </Link>


            <Link
              to="/relaciones"
              className="group bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/25 hover:-translate-y-1 transition-all duration-200 no-underline text-white border border-white/10"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">
                ❤️
              </div>

              <div className="font-bold text-lg">
                Relaciones
              </div>

              <div className="text-xs opacity-75 mt-1">
                Amor y compatibilidad
              </div>
            </Link>


            <Link
              to="/herramientas"
              className="group bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/25 hover:-translate-y-1 transition-all duration-200 no-underline text-white border border-white/10"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">
                🛠️
              </div>

              <div className="font-bold text-lg">
                Herramientas
              </div>

              <div className="text-xs opacity-75 mt-1">
                Utilidades online
              </div>
            </Link>

          </div>

        </section>


        {/* POPULARES */}
        <section>

          <div className="flex items-center justify-between mb-4">

            <h2 className="text-2xl font-bold">
              🔥 Más populares
            </h2>

            <Link
              to="/herramientas"
              className="text-sm text-white/80 hover:text-white no-underline transition"
            >
              Ver todas →
            </Link>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* INSTAGRAM */}
            <Link
              to="/insta-vistos"
              className="group bg-white text-blue-600 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 no-underline"
            >
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition">
                  👀
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    ¿Quién ve tu perfil de Instagram?
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Descubre quién podría estar observando tu perfil.
                  </p>
                </div>

              </div>
            </Link>


            {/* CI */}
            <Link
              to="/test-ci"
              className="group bg-white text-purple-700 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 no-underline"
            >
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition">
                  🧠
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Test de Inteligencia
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Pon a prueba tu razonamiento y capacidad lógica.
                  </p>
                </div>

              </div>
            </Link>


            {/* INFIDELIDAD */}
            <Link
              to="/detector-infidelidad"
              className="group bg-white text-purple-700 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 no-underline"
            >
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition">
                  🔍
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Detector de Infidelidad
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Una experiencia de entretenimiento sobre relaciones.
                  </p>
                </div>

              </div>
            </Link>


            {/* ATRACTIVO */}
            <Link
              to="/nivel-atractivo"
              className="group bg-white text-purple-700 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 no-underline"
            >
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition">
                  🧲
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Nivel de Atractivo
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Conoce tu nivel de atractivo de forma divertida.
                  </p>
                </div>

              </div>
            </Link>


            {/* QUIÉN PIENSA */}
            <Link
              to="/quien-piensa"
              className="group bg-white text-pink-600 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 no-underline"
            >
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition">
                  💖
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    ¿Quién piensa en ti?
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Descubre quién podría estar pensando en ti.
                  </p>
                </div>

              </div>
            </Link>


            {/* QUIÉN OBSERVA */}
            <Link
              to="/quien-observa"
              className="group bg-white text-blue-600 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 no-underline"
            >
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition">
                  👁️
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    ¿Quién te observa?
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Una experiencia divertida para descubrirlo.
                  </p>
                </div>

              </div>
            </Link>


            {/* PERCEPCIÓN */}
            <Link
              to="/percepcion-social"
              className="group bg-white text-green-600 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 no-underline"
            >
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition">
                  🧠
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Percepción Social
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Descubre cómo podrías ser percibido por los demás.
                  </p>
                </div>

              </div>
            </Link>

          </div>

        </section>


        {/* FOOTER */}
        <div className="text-center mt-10 pb-6">

          <p className="text-xs opacity-60">
            Algunas herramientas son únicamente para entretenimiento.
          </p>

        </div>

      </div>

    </div>
  );
}