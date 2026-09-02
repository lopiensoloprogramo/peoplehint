import { useEffect, useState } from "react";

import Minifooter from "../Components/Minifooter";

const mensajes = [
  { txt: "Magnetismo puro", min: 88, max: 97 },
  { txt: "Muy atractivo", min: 80, max: 89 },
  { txt: "Encantas sin saberlo", min: 72, max: 81 },
  { txt: "Presencia poderosa", min: 85, max: 94 },
  { txt: "Impacto inmediato", min: 90, max: 99 },
];

function NivelAtractivo() {
  const [misteryCount, setMisteryCount] = useState(0);
  const [showPromo, setShowPromo] = useState(true);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{
    txt: string;
    score: number;
  } | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [showMobilePercent, setShowMobilePercent] = useState(false);

  // Detectar móvil
  useEffect(() => {
    const ua = navigator.userAgent;

    setIsMobile(
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(ua)
    );
  }, []);

  // Número aleatorio de personas
  useEffect(() => {
    const n = Math.floor(Math.random() * 5) + 2;
    setMisteryCount(n);
  }, []);

  // Publicidad
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://pl28698465.effectivegatecpm.com/e3cd318543c99f5655fb82c6325acab5/invoke.js";

    script.async = true;
    script.dataset.cfasync = "false";

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handlePhoto = (file: File) => {
    setLoading(true);
    setProgress(0);
    setResult(null);
    setShowPromo(true);
    setShowMobilePercent(false);

    const reader = new FileReader();

    reader.onload = () => {
      // Elegir mensaje y puntaje
      const r = mensajes[Math.floor(Math.random() * mensajes.length)];

      const targetScore =
        Math.floor(Math.random() * (r.max - r.min + 1)) + r.min;

      // Animación de progreso
      const animatePhase = (
        from: number,
        to: number,
        duration: number,
        callback?: () => void
      ) => {
        const stepTime = 50;
        const steps = Math.ceil(duration / stepTime);
        const increment = (to - from) / steps;

        let current = from;

        const interval = setInterval(() => {
          current += increment;

          if (current >= to) {
            current = to;
            clearInterval(interval);

            if (callback) callback();
          }

          setProgress(current);
        }, stepTime);
      };

      // 0 → 30 → 60 → 99 → 100
      animatePhase(0, 30, 600, () => {
        animatePhase(30, 60, 1000, () => {
          animatePhase(60, 99, 1200, () => {
            animatePhase(99, 100, 300, () => {
              setShowPromo(false);

              setImage(reader.result as string);

              setResult({
                txt: r.txt,
                score: targetScore,
              });

              setLoading(false);

              if (isMobile) {
                setShowMobilePercent(true);
              }
            });
          });
        });
      });
    };

    reader.readAsDataURL(file);
  };

  const abrirPublicidad = () => {
    const script = document.createElement("script");

    script.src =
      "https://pl28711377.effectivegatecpm.com/a4/60/25/a46025604276304ca747eab2ed87afa8.js";

    script.async = true;

    document.body.appendChild(script);

    setTimeout(() => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 px-4 py-8">
      <div className="mx-auto w-full max-w-xl">

        {/* Botón volver */}
        <div className="mb-4">
          <button
            onClick={() => window.history.back()}
            className="text-sm font-medium text-purple-600 hover:text-purple-800 transition"
          >
            ← Volver
          </button>
        </div>

        {/* Tarjeta principal */}
        <div className="overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-xl">

          {/* Encabezado */}
          <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 px-6 py-8 text-center text-white">
            <div className="mb-3 text-5xl">
              🧲
            </div>

            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              ¿QUÉ TAN ATRACTIVO ERES?
            </h1>

            <p className="mt-2 text-sm text-white/90 sm:text-base">
              Descúbrelo en segundos. Privacidad garantizada.
            </p>
          </div>

          {/* Contenido */}
          <div className="p-5 sm:p-7">

            {/* Botón para seleccionar foto */}
            {!image && !loading && !result && (
              <label className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 px-5 py-4 text-center font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]">
                <span className="text-xl">🔮</span>

                <span>ANALIZAR MI ROSTRO</span>

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handlePhoto(e.target.files[0]);
                    }
                  }}
                />
              </label>
            )}

            {/* Publicidad */}
            {showPromo && (
              <div className="mt-5 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                <div className="flex min-h-[120px] items-center justify-center p-3">
                  <div
                    id="container-e3cd318543c99f5655fb82c6325acab5"
                    className="w-full overflow-hidden text-xs opacity-80"
                    style={{
                      maxHeight: 200,
                    }}
                  />
                </div>
              </div>
            )}

            {/* Cargando */}
            {loading && (
              <div className="mt-5 rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 p-5">

                <div className="mb-4 text-center">
                  <p className="font-semibold text-gray-800">
                    🧠 Escaneando rasgos...
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Analizando características de la imagen
                  </p>
                </div>

                {/* Barra */}
                <div className="relative h-4 overflow-visible rounded-full bg-gray-200">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 transition-all duration-100"
                    style={{
                      width: `${progress}%`,
                    }}
                  />

                  {/* Porcentaje móvil */}
                  {isMobile && showMobilePercent && result && (
                    <span className="absolute -top-6 right-1 text-xs font-bold text-gray-700">
                      {result.score}%
                    </span>
                  )}
                </div>

                {/* Porcentaje PC */}
                {!isMobile && (
                  <p className="mt-3 text-center text-sm font-bold text-purple-700">
                    {result
                      ? Math.floor((progress / 100) * result.score)
                      : Math.floor(progress)}
                    %
                  </p>
                )}

                {/* Estados */}
                <div className="mt-5 space-y-2 text-center text-xs text-gray-500">
                  <p>🔍 Analizando características...</p>
                  <p>✨ Evaluando proporciones...</p>
                  <p>🧠 Procesando resultados...</p>
                </div>
              </div>
            )}

            {/* Resultado */}
            {result && (
              <div className="mt-5">

                {/* Foto */}
                {image && (
                  <div className="mb-5 flex justify-center">
                    <div className="overflow-hidden rounded-3xl border-4 border-white bg-gray-100 shadow-lg ring-2 ring-purple-100">
                      <img
                        src={image}
                        alt="Foto analizada"
                        className="block max-h-[420px] w-auto max-w-full object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* Resultado principal */}
                <div className="rounded-3xl border border-purple-100 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-6 text-center">

                  <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
                    Tu resultado
                  </p>

                  <h2 className="mt-2 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-6xl font-black text-transparent sm:text-7xl">
                    {result.score}%
                  </h2>

                  <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-lg font-bold text-gray-900">
                      {result.txt}
                    </p>
                  </div>
                </div>

                {/* Probar otra foto */}
                <button
                  onClick={() => location.reload()}
                  className="mt-5 w-full rounded-2xl border border-purple-200 bg-white px-5 py-3.5 font-bold text-purple-700 shadow-sm transition hover:border-purple-300 hover:bg-purple-50 hover:shadow-md"
                >
                  🔄 Probar otra foto
                </button>

                {/* CTA */}
                <div className="mt-5 overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center text-white shadow-lg">

                  <div className="text-3xl">
                    👀
                  </div>

                  <p className="mt-3 font-bold">
                    {misteryCount} personas de tu entorno sienten algo por ti
                  </p>

                  <small className="mt-1 block text-white/80">
                    Trabajo, estudios o redes
                  </small>

                  <button
                    onClick={abrirPublicidad}
                    className="mt-5 w-full rounded-xl bg-white px-5 py-3 font-extrabold text-purple-700 shadow-md transition hover:bg-gray-50 hover:shadow-lg active:scale-[0.98]"
                  >
                    VER QUIÉNES
                  </button>
                </div>

                {/* Aviso */}
                <p className="mt-5 text-center text-xs leading-relaxed text-gray-400">
                  Este resultado es una experiencia de entretenimiento y no
                  representa una medición científica real del atractivo.
                </p>

                <Minifooter />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NivelAtractivo;