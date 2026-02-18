import { useState } from "react";
import "./Testci.css";

const preguntas = [
  { q: "¿Qué número sigue? 2 – 6 – 18 – ?", options: ["24", "36", "20", "30"] },
  { q: "Si todos los bloops son razzies y todos los razzies son lazzies, ¿los bloops son lazzies?", options: ["Sí", "No"]
    ,  className: "long" 
   },
  { q: "¿Qué palabra NO pertenece al grupo?", options: ["Manzana", "Pera", "Zanahoria", "Plátano"] },
  { q: "Completa: 3, 9, 27, ___", options: ["54", "81", "72", "90"] },
  { q: "Si A = 1, B = 2, C = 3... ¿Cuánto vale CAB?", options: ["312", "321", "213", "231"] },

  { q: "¿Qué número falta? 5 – 10 – 20 – __", options: ["25", "30", "40", "50"] },
  { q: "¿Cuál es el intruso?", options: ["Perro", "Gato", "Caballo", "Mesa"] },
  { q: "Completa: 1, 1, 2, 3, 5, __", options: ["6", "7", "8", "13"]},

  {
    q: "¿Qué figura completa la secuencia?",
    seq: "⬜  ⬛  ⬜  ⬛  ⬜  ?",
    options: ["⬜", "⬛", "🔺", "⚪"]
  },

  { q: "¿Qué número sigue? 4 – 9 – 16 – __", options: ["20", "23", "25", "30"] }
];


const resultados = [
  "Tu CI es 132. Estás en el 4% más alto.",
  "Tu CI es 118. Inteligencia superior.",
  "Tu CI es 105. Inteligencia promedio-alta.",
  "Tu CI es 92. Inteligencia normal."
];

export default function TestCI() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState("");

  const next = () => {
    if (step < preguntas.length - 1) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setRes(resultados[Math.floor(Math.random() * resultados.length)]);
        setLoading(false);
        setStep(99);
      }, 3000);
    }
  };

  return (
    <div className="ci-app">
      <div className="ci-card">
        {loading && (
          <div className="loader">
            <div className="spin"></div>
            <p>Analizando patrones cognitivos...</p>
          </div>
        )}

        {!loading && step < preguntas.length && (
            
          <div className="fade">
            <div className="progress">
              <div
                className="bar"
                style={{ width: `${((step + 1) / preguntas.length) * 100}%` }}
              ></div>
            </div>

                 <h2 className={preguntas[step].className || ""}>
                        {preguntas[step].q}
                </h2>
                    {preguntas[step].seq && (
                    <div style={{ fontSize: "26px", margin: "10px 0" }}>
                        {preguntas[step].seq}
                    </div>
                    )}

            {preguntas[step].options.map((op, i) => (
              <button key={i} className="ci-btn" onClick={next}>
                {op}
              </button>
            ))}

            <small>{step + 1} / {preguntas.length}</small>
          </div>
        )}


      
        {!loading && step === 99 && (
          <div className="fade">
            <h1>{res}</h1>
            <button className="ci-btn" onClick={() => {
                    if (window.open) {
                    window.open("about:blank", "_self");
                    }
                    window.location.reload();
                }}
                >
              🔁 Probar de nuevo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
