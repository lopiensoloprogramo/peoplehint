import { useState } from "react";

const sound = new Audio("/cargando.mp3");

const results = [
  { min: 0, max: 20, texts: [
    "No se detectan patrones frecuentes de interés.",
    "Interacciones digitales mínimas encontradas.",
    "Coincidencias emocionales muy bajas."
  ]},
  { min: 21, max: 40, texts: [
    "Patrones ocasionales de interés detectados.",
    "Comportamiento intermitente en búsquedas.",
    "Se registran algunas coincidencias emocionales."
  ]},
  { min: 41, max: 60, texts: [
    "Patrones frecuentes de interés.",
    "Interacciones digitales recurrentes.",
    "Coincidencias emocionales moderadas."
  ]},
  { min: 61, max: 80, texts: [
    "Alta frecuencia de interés detectada.",
    "Búsquedas relacionadas constantes.",
    "Coincidencias emocionales elevadas."
  ]},
  { min: 81, max: 100, texts: [
    "Interés extremadamente alto detectado.",
    "Patrones obsesivos de búsqueda.",
    "Coincidencias emocionales máximas."
  ]},
];

const emotionalMessages = [
  "Esta persona piensa en ti antes de dormir.",
  "Te busca en redes pero no se atreve a escribirte.",
  "Hay tensión no resuelta entre ustedes.",
  "Podría confesarte algo pronto.",
  "No es indiferente, solo tiene miedo.",
  "Habla de ti con alguien más.",
  "Siente curiosidad constante por tu vida.",
  "No logra sacarte de su cabeza.",
  "Hay algo pendiente entre ustedes.",
  "Te recuerda más de lo que imaginas."
];

export default function QuienPiensa() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [loading, setLoading] = useState(false);
const [value, setValue] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [emotion, setEmotion] = useState("");
  const [link, setLink] = useState("");

  const analyze = () => {
    if (!a || !b || !link) {
      alert("Completa todos los campos");
      return;
    }

    sound.currentTime = 0;
    sound.play().catch(() => {});

    setLoading(true);
    setValue(null);
    setEmotion("");

    setTimeout(() => {
      const v = Math.floor(Math.random() * 101);
    const r = results.find(x => v >= x.min && v <= x.max) || results[0];

    let base = r.texts[Math.floor(Math.random() * r.texts.length)];

      if (link === "ex" && v >= 60) {
        base = "Se detectan patrones emocionales no resueltos.";
      }
      if (link === "crush" && v >= 60) {
        base = "Hay una fuerte proyección emocional.";
      }
      if (link === "pareja" && v <= 40) {
        base = "La conexión emocional parece debilitada.";
      }

      const randomEmotion =
        emotionalMessages[Math.floor(Math.random() * emotionalMessages.length)];

      setValue(v);
      setMessage(`${base} (${link})`);
      setEmotion(randomEmotion);
      setLoading(false);
    }, 4200);
  };

  return (
    <div className="min-h-[100dvh] w-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold">💭 ¿Qué tanto piensa en ti?</h1>
        <p className="text-gray-500">Pon dos nombres y descúbrelo...</p>

        <input className="w-full border p-2 rounded" placeholder="Tu nombre"
          value={a} onChange={e=>setA(e.target.value)} />

        <input className="w-full border p-2 rounded" placeholder="Nombre de esa persona"
          value={b} onChange={e=>setB(e.target.value)} />

        <select
          className="w-full border p-2 rounded"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        >
          <option value="">Tipo de vínculo</option>
          <option value="amigos">Amigos</option>
          <option value="pareja">Pareja</option>
          <option value="ex">Ex</option>
          <option value="crush">Crush</option>
        </select>
        <button
          onClick={analyze}
          className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
          Analizar
        </button>

        {loading && (
          <div className="space-y-1 text-sm text-gray-600">
            <p>🔍 Analizando patrones de búsqueda...</p>
            <p>📱 Comparando comportamiento digital...</p>
            <p>🧠 Evaluando coincidencias emocionales...</p>
            <p className="animate-pulse text-pink-500 font-semibold">
              Generando resultado...
            </p>
          </div>
        )}

        {value !== null && (
          <div className="space-y-2">
            <div className="text-4xl font-bold">{value}%</div>
            <p className="font-semibold">{message}</p>

            {emotion && (
              <p className="text-pink-600 italic animate-fade">
                {emotion}
              </p>
            )}

            <button
              onClick={() => {
                const text = `${b} piensa en ${a} un ${value}% 😳`;
                if (navigator.share) {
                  navigator.share({ text });
                } else {
                  navigator.clipboard.writeText(text);
                  alert("Copiado 👍");
                }
              }}
              className="text-sm underline">
              Compartir
            </button>
          </div>
        )}

        <div className="mt-4 text-xs text-gray-400">
          <script async data-cfasync="false"
            src="https://pl28677830.effectivegatecpm.com/53625cd16e79dc4f5be82578d256686f/invoke.js"></script>
          <div id="container-53625cd16e79dc4f5be82578d256686f"></div>
        </div>
      </div>
    </div>
  );
}
