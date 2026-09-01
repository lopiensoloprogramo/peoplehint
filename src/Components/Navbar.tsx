import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="!h-16 !min-h-16 w-full bg-white border-b border-gray-200 shadow-sm flex-shrink-0 relative z-50">
      <div className="h-16 max-w-6xl mx-auto px-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 no-underline"
        >
          <span className="text-2xl leading-none">
            👀
          </span>

          <span className="text-xl font-extrabold text-purple-700 leading-none">
            PeopleHint
          </span>
        </Link>

        {/* MENÚ DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 h-full">

          <Link
            to="/calculadoras"
            className="flex items-center h-full text-sm font-semibold text-gray-600 hover:text-purple-600 no-underline transition"
          >
            🧮 Calculadoras
          </Link>

          <Link
            to="/tests"
            className="flex items-center h-full text-sm font-semibold text-gray-600 hover:text-purple-600 no-underline transition"
          >
            🧠 Tests
          </Link>

          <Link
            to="/relaciones"
            className="flex items-center h-full text-sm font-semibold text-gray-600 hover:text-purple-600 no-underline transition"
          >
            ❤️ Relaciones
          </Link>

          <Link
            to="/herramientas"
            className="flex items-center h-full text-sm font-semibold text-gray-600 hover:text-purple-600 no-underline transition"
          >
            🛠️ Herramientas
          </Link>

        </nav>

        {/* MENÚ MÓVIL */}
        <Link
          to="/herramientas"
          className="md:hidden text-2xl no-underline"
          aria-label="Ver herramientas"
        >
          ☰
        </Link>

      </div>
    </header>
  );
}