import { useState } from "react";

const results = [
  { min: 0, max: 20, texts: [
    "Solo curiosidad 👀",
    "Nada raro por aquí 😌",
    "Todo tranquilo... por ahora."
  ]},
  { min: 21, max: 40, texts: [
    "Algo raro hay...",
    "Demasiadas coincidencias 🤔",
    "No te fíes tanto..."
  ]},
  { min: 41, max: 60, texts: [
    "Muchas señales sospechosas 😬",
    "Esto ya huele raro...",
    "Ojo con ese comportamiento."
  ]},
  { min: 61, max: 80, texts: [
    "Esto no pinta bien 💔",
    "Algo muy turbio está pasando...",
    "Las alertas están encendidas 🚨"
  ]},
  { min: 81, max: 100, texts: [
    "Corre. Hay infidelidad segura 🚩",
    "Red flags por todos lados 🚩🚩",
    "Ni Sherlock lo duda 😳"
  ]},
];

export default function DetectorInfidelidad() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState("");

  const getOverlay = (v) => {
    if (v <= 20) return "happy";
    if (v <= 40) return "doubt";
    if (v <= 60) return "sus";
    if (v <= 80) return "broken";
    return "danger";
  };

  const analyze = () => {
    if (!a || !b) return alert("Escribe ambos nombres");
    setLoading(true);
    setValue(null);

    setTimeout(() => {
      const v = Math.floor(Math.random() * 101);
      const r = results.find(x => v >= x.min && v <= x.max);
      const randomText = r.texts[Math.floor(Math.random() * r.texts.length)];
      setValue(v);
      setMessage(randomText);
      setLoading(false);
    }, 2500);
  };

  return (
    <>
      {/* OVERLAY PANTALLA COMPLETA */}
      {value !== null && (
        <div className={`overlay ${getOverlay(value)}`}></div>
      )}

      <div className="min-h-screen bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md text-center space-y-4">
          <h1 className="text-2xl font-bold">💔 Detector de Infidelidad</h1>
          <p className="text-gray-500">Pon dos nombres y descubre la verdad...</p>

          <input
            className="w-full border p-2 rounded"
            placeholder="Tu nombre"
            value={a}
            onChange={e => setA(e.target.value)}
          />
          <input
            className="w-full border p-2 rounded"
            placeholder="Nombre de tu pareja"
            value={b}
            onChange={e => setB(e.target.value)}
          />

          <button
            onClick={analyze}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
            Analizar
          </button>

          {loading && (
            <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
              <div className="bg-red-500 h-3 rounded-full animate-loading"></div>
            </div>
          )}

          {value !== null && (
            <div className="space-y-2">
              <div className="text-4xl font-bold">{value}%</div>
              <p className="font-semibold">{message}</p>

              <button
                onClick={() => {
                  const text = `${a} y ${b}: ${value}% infidelidad 😳`;

                  if (navigator.share) {
                    navigator.share({ text })
                      .catch(() => navigator.clipboard.writeText(text));
                  } else {
                    navigator.clipboard.writeText(text);
                    alert("Resultado copiado 👍");
                  }
                }}
                className="text-sm underline">
                Compartir
              </button>
            </div>
          )}

            <div className="mt-4 text-xs text-gray-400"> 
              <script src="https://pl28662229.effectivegatecpm.com/78/db/1f/78db1f99523b729d414ccd63bbfb2c21.js">
              </script> 
              </div>



        </div>
      </div>
    </>
  );
}
