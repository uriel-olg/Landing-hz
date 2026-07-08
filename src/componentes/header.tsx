import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#09131e]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/hz_logo.webp"
            alt="HZ Software"
            className="h-11 w-11 rounded-xl object-cover"
          />

          <span className="text-xl font-bold tracking-wide text-white">
            Software
          </span>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-10 text-sm font-medium text-gray-300 md:flex">

          <a
            href="#servicios"
            className="transition duration-300 hover:text-white"
          >
            Servicios
          </a>

          <a
            href="#proyectos"
            className="transition duration-300 hover:text-white"
          >
            Proyectos
          </a>

          <a
            href="#contacto"
            className="transition duration-300 hover:text-white"
          >
            Contacto
          </a>

          <button className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-500">
            Solicitar presupuesto
          </button>

        </nav>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Menú móvil */}
        {open && (
          <nav className="absolute right-6 top-24 flex w-64 flex-col gap-5 rounded-2xl border border-white/10 bg-[#111827] p-6 shadow-2xl md:hidden">

            <a
              href="#servicios"
              className="text-gray-300 transition hover:text-white"
            >
              Servicios
            </a>

            <a
              href="#proyectos"
              className="text-gray-300 transition hover:text-white"
            >
              Proyectos
            </a>

            <a
              href="#contacto"
              className="text-gray-300 transition hover:text-white"
            >
              Contacto
            </a>

            <button className="mt-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500">
              Solicitar presupuesto
            </button>

          </nav>
        )}
      </div>
    </header>
  );
}