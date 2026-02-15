import { useState,useEffect } from "react";

const results = {
  trabajo: [
    "Generas respeto, pero también envidia.",
    "Hablan de ti cuando sales.",
    "Te ven como una amenaza silenciosa."
  ],
  escuela: [
    "Te observan más de lo que imaginas.",
    "Despiertas curiosidad.",
    "No eres indiferente."
  ],
  redes: [
    "Te buscan en silencio.",
    "Revisan tu perfil más de una vez.",
    "Tu presencia genera intriga."
  ],
  familia: [
    "No te entienden del todo.",
    "Hay cosas que no dicen.",
    "Te juzgan sin que lo sepas."
  ],
  vecindario: [
    "Llamas la atención.",
    "Despiertas sospechas.",
    "Te miran distinto."
  ],
  eventos: [
    "Tu energía destaca.",
    "Provocas reacciones fuertes.",
    "No pasas desapercibido."
  ],
  excompañeros: [
    "Te recuerdan más de lo que crees.",
    "Hay nostalgia no resuelta.",
    "Comparan su presente contigo."
  ],
  observan: [
    "Sienten curiosidad.",
    "Te siguen desde lejos.",
    "Hay algo que no pueden soltar."
  ],
};



export default function PercepcinSocial() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
  const s = document.createElement("script");
  s.src =
    "https://pl28685533.effectivegatecpm.com/d686662595f7d3b09cd4a320ee0e24a1/invoke.js";
  s.async = true;
  s.setAttribute("data-cfasync", "false");
  document.body.appendChild(s);
}, []);


  const analyze = () => {
    if (!a || !b || !link) {
      alert("Completa todos los campos");
      return;
    }

    setLoading(true);
    setValue(null);
    setMessage("");

    setTimeout(() => {
      const v = Math.floor(Math.random() * 101);
      
      const msg =
      results[link][Math.floor(Math.random() * results[link].length)];
      setValue(v);
      setMessage(msg);
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center font-mono text-green-400">
      <div className="border border-green-500 w-[360px] p-4 shadow-[0_0_20px_rgba(0,255,0,0.2)]">
        <p className="text-xs">SOCIAL PERCEPTION SYSTEM</p>
        <p className="text-[10px] mb-2">v1.0 private module</p>


        <div className="border-t border-green-500 my-2"></div>

           <h1 className="text-xl font-bold tracking-widest">
          SOCIAL PERCEPTION SYSTEM
        </h1>

        <p className="text-xs text-purple-300">
          Procesamos micro-señales sociales para estimar cómo te perciben cuando no estás.
        </p>

        <div className="space-y-2 mt-3 text-sm">
          <input
            className="w-full bg-black border border-green-500 p-1"
            placeholder="Tu nombre"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
          <input
            className="w-full bg-black border border-green-500 p-1"
            placeholder="Nombre de la persona..."
            value={b}
            onChange={(e) => setB(e.target.value)}
          />

        <select
          className="w-full bg-black border border-green-500 p-1"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        >
          <option value="">Contexto de interacción</option>
          <option value="trabajo">Trabajo</option>
          <option value="escuela">Escuela / Universidad</option>
          <option value="redes">Redes sociales</option>
          <option value="familia">Familia</option>
          <option value="vecindario">Vecindario</option>
          <option value="eventos">Eventos sociales</option>
          <option value="excompañeros">Excompañeros</option>
          <option value="observan">No se ven, pero se observan</option>
        </select>

        </div>

        <button
          onClick={analyze}
          className="mt-3 w-full border border-green-500 py-1 hover:bg-green-500 hover:text-black transition"
        >
          INICIAR ESCANEO
        </button>

        <div className="border border-green-500 bg-black/40 rounded p-2 text-center text-xs mt-2">
          <p className="text-green-400 mb-1">Sponsored</p>

          <div
            id="container-d686662595f7d3b09cd4a320ee0e24a1"
            className="min-h-[90px] flex items-center justify-center"
          ></div>
        </div>


        {loading && (
          <div className="mt-3 text-xs">
            <p>▓▓▓░░░░░░░░░░░░░░░░░░</p>
            <p>ANALIZANDO...</p>
          </div>
        )}

        {value !== null && (
          <div className="mt-3 text-sm">
            <p>RESULTADO: {value}%</p>
            <p>"{message}"</p>
          </div>
        )}
      </div>



    </div>
  );
}
