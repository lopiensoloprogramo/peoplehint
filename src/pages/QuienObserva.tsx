
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

<div className="min-h-screen bg-black text-white p-10">
    <h1 className="text-5xl font-bold text-red-500">
      PRUEBA TAILWIND
    </h1>

    <div className="mt-10 bg-blue-500 p-10 text-3xl">
      SI ESTO ES AZUL, TAILWIND FUNCIONA
    </div>
  </div>
}

export default QuienObserva;

