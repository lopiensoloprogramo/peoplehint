
import { useState, useEffect } from "react";
import Minifooter from "../Components/Minifooter";

const resultados = [
  "Alguien cercano siente una fuerte envidia por ti.",
  "Esa mirada no es admiración… es envidia.",
  "No todos los que sonríen están de tu lado.",
  "Tu progreso incomoda a alguien cercano.",
  "Tu energía despierta envidia...",
];

const nombres = [
  "Andrea",
  "María",
  "Luis",
  "Carlos",
  "José",
  "Miguel",
  "Juan",
  "Pedro",
  "Sofía",
  "Valeria",
  "Camila",
  "Daniela",
  "Ana",
  "Lucía",
  "Paola",
  "Diego",
  "Fernando",
  "Javier",
  "Andrés",
  "Sebastián",
];

const apellidos = [
  "García",
  "Rodríguez",
  "Pérez",
  "López",
  "Martínez",
  "Sánchez",
  "Ramírez",
  "Torres",
  "Flores",
  "Gómez",
  "Vargas",
  "Rojas",
  "Castillo",
  "Cruz",
  "Morales",
  "Herrera",
  "Navarro",
  "Mendoza",
  "Ortega",
  "Delgado",
  "Salazar",
  "Chávez",
  "Reyes",
  "Cabrera",
  "Silva",
  "Pacheco",
  "Quispe",
  "Huamán",
  "Valdez",
  "Aguirre",
];

function QuienObserva() {
  const [step, setStep] = useState<"start" | "loading" | "result">("start");
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("");
  const [lista, setLista] = useState<string[]>([]);
  const [count, setCount] = useState(127);

  useEffect(() => {
    const int = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3));
    }, 4000);

    return () => clearInterval(int);
  }, []);

  useEffect(() => {
    const box = document.getElementById("native-box");

    if (!box) return;

    box.innerHTML = `
      <iframe 
        sandbox="allow-scripts allow-same-origin allow-popups"
        style="width:100%;height:100%;border:none;overflow:hidden;"
        srcdoc="
          <html>
            <body style='margin:0;padding:0;overflow:hidden;background:transparent;'>
              <script async data-cfasync='false' 
                src='https://pl28677830.effectivegatecpm.com/53625cd16e79dc4f5be82578d256686f/invoke.js'>
              </script>
              <div id='container-53625cd16e79dc4f5be82578d256686f'></div>
            </body>
          </html>
        "
      ></iframe>
    `;

    return () => {
      box.innerHTML = "";
    };
  }, []);

  const generarNombre = () => {
    const n = nombres[Math.floor(Math.random() * nombres.length)];
    const a1 = apellidos[Math.floor(Math.random() * apellidos.length)];

    let a2 = apellidos[Math.floor(Math.random() * apellidos.length)];

    while (a2 === a1) {
      a2 = apellidos[Math.floor(Math.random() * apellidos.length)];
    }

    return `${n} ${a1} ${a2}`;
  };

  const start = () => {
    setStep("loading");
    setProgress(0);

    const r =
      resultados[Math.floor(Math.random() * resultados.length)];

    setText(r);

    const fake = Array.from({ length: 3 }, generarNombre);
    setLista(fake);

    let p = 0;

    const interval = setInterval(() => {
      p += Math.random() * 8;

      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setStep("result");
      }

      setProgress(p);
    }, 120);
  };

  const openPromo = () => {
    const s = document.createElement("script");

    s.src =
      "https://pl28704925.effectivegatecpm.com/b3/5a/91/b35a91b3d1b7c12d2398559a8f4f374f.js";

    s.async = true;

    document.body.appendChild(s);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">

      <main className="flex-1 flex items-center justify-center px-4 py-10">

        <div className="w-full max-w-md">

          {/* TARJETA */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">

            {/* CONTADOR */}
            <div className="mb-6 text-center">
              <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold text-orange-600">
                🔥 {count} personas lo probaron hoy
              </span>
            </div>

            {/* INICIO */}
            {step === "start" && (
              <div className="text-center">

                <div className="mb-5 text-5xl">
                  😈
                </div>

                <h1 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl">
                  Hay personas que sienten celos de ti
                </h1>

                <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                  Algunos sonríen… pero no soportan verte crecer.
                </p>

                <button
                  onClick={start}
                  className="mt-7 w-full rounded-xl bg-gradient-to-r from-red-600 to-pink-600 px-6 py-4 text-sm font-extrabold tracking-wide text-white shadow-lg shadow-red-200 transition-all duration-200 hover:scale-[1.02] hover:from-red-500 hover:to-pink-500 active:scale-[0.98]"
                >
                  DESCUBRIR QUIÉN
                </button>

                {/* PUBLICIDAD */}
                <div className="mt-7 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                  <div
                    id="native-box"
                    className="h-[250px] w-full"
                  />
                </div>

              </div>
            )}

            {/* LOADING */}
            {step === "loading" && (
              <div className="py-8 text-center">

                <div className="mb-6 text-4xl animate-pulse">
                  🔍
                </div>

                <p className="text-lg font-bold text-gray-900">
                  Analizando energía social...
                </p>

                <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="mt-3 text-sm font-semibold text-gray-500">
                  {Math.floor(progress)}%
                </p>

              </div>
            )}

            {/* RESULTADO */}
            {step === "result" && (
              <div className="text-center">

                <div className="mb-4 text-4xl">
                  👀
                </div>

                <h2 className="text-2xl font-extrabold text-gray-900">
                  Resultado
                </h2>

                <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-700">
                  {text}
                </p>

                <div className="mt-5 space-y-3 text-left">
                  {lista.map((n, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                        👤
                      </span>

                      <span className="text-sm font-semibold text-gray-800">
                        {n}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs italic text-gray-500">
                  (Solo uno es real)
                </p>

                <button
                  onClick={openPromo}
                  className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-purple-200 transition-all duration-200 hover:scale-[1.02] hover:from-purple-500 hover:to-fuchsia-500 active:scale-[0.98]"
                >
                  VER DETALLES
                </button>

              </div>
            )}

          </div>
        </div>
      </main>

      <Minifooter />
    </div>
  );
}

export default QuienObserva;

