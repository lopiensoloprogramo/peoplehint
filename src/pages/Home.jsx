

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
            href="/nivel-atractivo"
            className="block w-full bg-white text-purple-700 font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition"
          >
            🧲Nivel de Atractivo
          </a>

          <a
            href="/quien-piensa"
            className="block w-full bg-white text-pink-600 font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition"
          >
            💖¿Quién piensa en ti?
          </a>
        </div>

        <p className="text-xs mt-8 opacity-70">
          Solo para entretenimiento 🔮
        </p>
      </div>
    </div>
  );
}