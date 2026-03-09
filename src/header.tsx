export default function Header() {
    return (
        <header className="w-full bg-[#09131e] py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 text-white">
            
            <img
            src="/hz_logo.webp"
            alt="logo"
            className="w-[40px] h-[40px] object-contain rounded-xl"
            />

            <nav className="hidden md:flex gap-6">
            <a href="#servicios" className="hover:text-blue-400">Servicios</a>
            <a href="#proyectos" className="hover:text-blue-400">Proyectos</a>
            <a href="#contacto" className="hover:text-blue-400">Contacto</a>
            </nav>

            {/* Botón hamburguesa */}
            <button className="md:hidden">
            <svg className="w-8 h-8" fill="none" stroke="white">
                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>
        </div>
        </header>
    );
}