import { Link, useLocation } from "react-router-dom";
import "./Minifooter";

export default function Minifooter() {
  const location = useLocation();

  const micros = [
    { path: "/test-ci", label: "🧠 Test CI" },
    { path: "/quien-piensa", label: " ❤️¿Quién piensa en ti?" },
    { path: "/nivel-atractivo", label: " 😎Nivel de atractivo" },
    { path: "/insta-vistos", label: " 👀¿Quién vio tu perfil?" }
  ];

  const filtered = micros
    .filter(m => m.path !== location.pathname)
    .slice(0, 3);
const colors = ["#ef4444", "#3b82f6", "#22c55e"];
  return (

             <div className="mt-10 pt-6 border-t border-gray-200 text-center">
<br></br>
      {/* 🔥 Título */}
      <div className="mb-4">
        <p className="text-sm font-bold tracking-wide text-orange-500 animate-pulse">
          🔥 Prueba también
        </p>
      </div>

      {/* Enlaces */}
      <div className="flex justify-center gap-6 flex-nowrap overflow-x-auto text-sm font-semibold">

        {filtered.map((m, index) => (
          <Link
            key={m.path}
            to={m.path} 
            className={`no-underline hover:no-underline whitespace-nowrap`}
                style={{
                color: colors[index],
                textDecoration: "none",
                fontWeight: "600"
            }}
          >
            {m.label}
          </Link>
        ))}

      </div>
    </div>
  );
}