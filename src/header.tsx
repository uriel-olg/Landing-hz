export default function Header() {
    return (
        <header className="w-full py-3 bg-[#09131e] backdrop-blur-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-white px-4">
                <span>
                    <img className="size-[45px] rounded-xl" src="hz_logo.webp" alt="" />
                </span>
                <nav className="hidden md:flex gap-8">
                    <a className="hover:text-blue-400" href="#servicios">Servicios</a>
                    <a className="hover:text-blue-400" href="#Proyectos">Proyectos</a>
                    <a className="hover:text-blue-400" href="#Contacto">Contacto</a>
                </nav>

            </div>
        </header>
    );
}