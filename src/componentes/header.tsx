import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const [activo,setActivo] = useState<"Servicios" | "Procesos" | "Tecnologias" | "Contacto" | "Home"> ("Home")

  const navList = [
    "Servicios","Procesos","Tecnologias","Contacto"
  ]


  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#09131e]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3" >
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

          {navList.map(item => {
    // Creamos el ID formateado (ej: "inicio", "servicios")
    const targetId = item.toLocaleLowerCase();

    return (
      <a 
        key={item} // ¡No olvides la key en los .map de React!
        href={`#${targetId}`} // 1. Agregamos el '#' para que sea un ancla válido
        onClick={(e) => {
          e.preventDefault(); // 2. Frenamos el salto brusco
          setActivo(item);    // 3. Cambiamos el color de activo
          
          // 4. Buscamos la sección y hacemos scroll suave
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }} 
        className={`${activo === item ? "text-blue-500" : "text-white hover:text-gray-300"} transition-colors`}  
      >
        {item}                
      </a>
    )
  })}
  
  <button className="rounded-xl bg-blue-500/10 px-5 py-2.5 font-semibold border border-blue-500/20 text-white transition hover:bg-blue-500/30">
    Hablemos 
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