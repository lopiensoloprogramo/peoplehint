

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-700 flex flex-col items-center justify-start text-white px-4 pt-16">
      
      <div className="max-w-sm w-full text-center">
        
        <h1 className="text-4xl font-extrabold mb-2 drop-shadow-lg">
          PeopleHint 👀
        </h1>

        <p className="text-lg opacity-90 mb-8">
          Descubre lo que otros sienten por ti
        </p>

            <div className="space-y-4">

              <a
                href="/test-ci"
                className="no-underline block w-full bg-white text-purple-700 font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition"
              >
                🧠 Test de Inteligencia CI
              </a>

              <a
                href="/detector-infidelidad"
                className="no-underline block w-full bg-white text-purple-700 font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition"
              >
                📱🔍 Detector de Infidelidad
              </a>
              
              <a
                href="/nivel-atractivo"
                className="no-underline block w-full bg-white text-purple-700 font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition"
              >
                🧲 Nivel de Atractivo
              </a>

              <a
                href="/quien-piensa"
                className="no-underline block w-full bg-white text-pink-600 font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition"
              >
                💖 ¿Quién piensa en ti?
              </a>

              <a
                href="/quien-observa"
                className="no-underline block w-full bg-white text-blue-600 font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition"
              >
                👁️ ¿Quién te observa?
              </a>

              <a
                href="/percepcion-social"
                className="no-underline block w-full bg-white text-green-600 font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition"
              >
                🧠 Percepción Social
              </a>
            </div>

        <p className="text-xs mt-8 opacity-70">
          Solo para entretenimiento 🔮
        </p>
      </div>
    </div>
  );
}