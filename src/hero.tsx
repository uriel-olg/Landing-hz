export default function Hero() {
    return (
        <section className="h-full w-full text-white py-10 bg-[#142a41] ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4 justify-center items-center">

            <div>
                <h2 className="text-xl md:text-4xl font-bold leading-tight">
                    Soluciones <span className="text-blue-400">Tecnológicas</span> 
                    Profesionales para Impulsar tu <span className="text-blue-400">Negocio</span>
                </h2>

                <p className="mt-4 text-gray-300">
                    Desarrollo de software a medida, soporte técnico, mantenimiento y ensamblaje de equipos.
                </p>

                <div className="flex gap-4 mt-6">
                    <button className="bg-blue-600 px-5 py-3 rounded-md hover:bg-blue-700" onClick={()=>{"https://wa.me/542604230590"}}>
                    Solicitar Presupuesto
                    </button>
                    <button className="bg-white/10 px-5 py-3 rounded-md backdrop-blur hover:bg-white/20">
                    Ver Servicios
                    </button>
                </div>

                <div className="flex text-l mt-8 gap-6 text-gray-400">
                    <span>+50 Proyectos Completados</span>
                    <span>Soporte 24/7</span>
                    <span>Técnicos Certificados</span>
                </div>
            </div>
            {window.innerWidth > 900 && (
                <div className="">
                    <img src="hero.png" className="rounded-xl " />
            </div>
            )}
            
        </div>
        </section>
    );
}