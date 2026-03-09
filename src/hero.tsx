const phone = 542604230590;

export default function Hero() {
    return (
        <section className="text-white py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center">

            {/* TEXTO */}
            <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                Soluciones <span className="text-blue-400">Tecnológicas</span>{" "}
                Profesionales para Impulsar tu{" "}
                <span className="text-blue-400">Negocio</span>
            </h2>

            <p className="mt-4 text-gray-300 text-sm md:text-base">
                Desarrollo de software a medida, soporte técnico, mantenimiento y
                ensamblaje de equipos.
            </p>

            <div className="flex justify-center md:justify-start mt-6">
                <a
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-500 active:scale-95 transition"
                href={`https://wa.me/${phone}?text=Hola%20quiero%20solicitar%20un%20presupuesto`}
                >
                Solicitar Presupuesto
                </a>
            </div>

            {/* STATS */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8 text-gray-400 text-sm">
                <span>+50 Proyectos Completados</span>
                <span>Soporte 24/7</span>
                <span>Técnicos Certificados</span>
            </div>
            </div>

            {/* IMAGEN */}
            <div className="hidden md:block">
            <img
                src="/hero.png"
                alt="hero"
                className="rounded-xl w-full h-auto object-contain"
            />
            </div>

        </div>
        </section>
    );
}