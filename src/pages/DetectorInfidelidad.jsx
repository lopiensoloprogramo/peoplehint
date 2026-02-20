import { useState,useEffect } from "react";
import "./DetectorInfidelidad.css"

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
      ">
    </iframe>
  `;
}, []);

  const abrirPublicidad = () => {
    const script = document.createElement("script");
    script.src = "https://pl28711377.effectivegatecpm.com/a4/60/25/a46025604276304ca747eab2ed87afa8.js";
    script.async = true;
    document.body.appendChild(script);

    setTimeout(() => {
      document.body.removeChild(script);
    }, 3000);
  };


  return (
    <>
      
      <div className="di-page">
        <div className="di-card">
          <h1 className="di-title">💔 Detector de Infidelidad</h1>
          <p className="di-sub">Pon dos nombres y descubre la verdad...</p>

          <input
            className="di-input"
            placeholder="Tu nombre"
            value={a}
            onChange={e => setA(e.target.value)}
          />
          <input
            className="di-input"
            placeholder="Nombre de tu pareja"
            value={b}
            onChange={e => setB(e.target.value)}
          />

          <button
            onClick={analyze}
            className="di-btn">
            Analizar
          </button>

          {loading && (
            <div className="di-bar">
              <div className="di-fill"></div>
            </div>
          )}

          {value !== null && (
            <div className="di-result">
              <div className="di-percent">{value}%</div>
              <p>{message}</p>

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
                className="di-share">
                Compartir
              </button>
            </div>
          )}

            <div className="promobanner"> 
                <div id="native-box"></div>
              </div>



        </div>
      
      </div>
    </>
  );
}
