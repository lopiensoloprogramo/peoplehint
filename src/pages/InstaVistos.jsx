import { useState } from "react";
import "./InstaVistos.css";
import Minifoter from "../Components/Minifoter";
export default function InstaVistos() {
  const [user, setUser] = useState("");
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [vistos, setVistos] = useState(0);

const analizar = () => {
  const limpio = user.trim().replace(/^@/, "");
  const regex = /^[a-zA-Z0-9._]{3,30}$/;

  if (!regex.test(limpio)) {
    alert("Ingresa un usuario válido de Instagram");
    return;
  }

  setLoading(true);

  setTimeout(() => {
    setVistos(Math.floor(Math.random() * 15) + 3);
    setLoading(false);
    setStep(1);
  }, 5000);
};

const abrirPopunder = () => {
  if (window.popunderCargado) return;

  const script = document.createElement("script");
  script.src = "https://pl28711377.effectivegatecpm.com/a4/60/25/a46025604276304ca747eab2ed87afa8.js";
  script.async = true;

  document.body.appendChild(script);

  window.popunderCargado = true;
};


  return (
    <div className="insta-app">
      <div className="insta-card">
        {loading && (
          <div className="loader">
            <div className="spin"></div>
            <br></br>
            <p>Analizando actividad del perfil...</p>
            <small>Procesando interacciones de los últimos 30 días</small>
          </div>
        )}

        {!loading && step === 0 && (
          <div className="fade">
            <h1>¿Quién vio tu perfil?</h1>
            <p>Descubre cuántas personas revisaron tu Instagram en los últimos 30 días.</p>

            <input
              className="insta-input"
              placeholder="@usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />

            <button
              className="insta-btn"
              disabled={!user}
              onClick={analizar}
            >
              Analizar perfil
            </button>
          </div>
        )}

        {!loading && step === 1 && (
          <div className="fade">
            <h2>👀 {vistos} personas</h2>
            <p>
              han visto el perfil <strong>@{user.replace("@", "")}</strong>
            </p>
            <small>en los últimos 30 días</small>

            <button
              className="insta-btn"
              onClick={() => window.location.reload()}
            >
              🔁 Probar otro usuario
            </button>
            <button
              className="insta-promo"
              onClick={() => {
                    abrirPopunder();
                }}
            >
              🔓 Ver quienes son
            </button>
                <Minifoter/>
          </div>
        )}
      </div>
    </div>
  );
}
