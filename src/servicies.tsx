const services = [
    { title: "Software a Medida", img: "/mantenimiento.png", desc: "Desarrollo de software y sistemas personalizados." },
    { title: "Soporte Técnico", img: "/soporte2.png", desc: "Asistencia remota o presencial para resolver problemas." },
    { title: "Mantenimiento Preventivo", img: "/certificado.png", desc: "Evita fallos técnicos con mantenimiento regular." },
    { title: "Ensamble y Configuración", img: "/ensamble2.png", desc: "Armado, instalación y puesta en marcha." },
];

export default function Services() {
    return (
        <section id="servicios" className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
            
            <h2 className="text-3xl font-bold mb-10 text-center">
            Nuestros Servicios
            </h2>

            {/* MOBILE FIRST */}
            <div className="
            grid grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-6
            ">
            {services.map((s, i) => (
                <div
                key={i}
                className="h-full w-5/6 bg-white/10 m-auto p-6 rounded-xl backdrop-blur border border-white/10 text-center"
                >
                <img
                    src={s.img}
                    alt={s.title}
                    className="size-25px mx-auto mb-4 object-contain"
                />

                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">{s.desc}</p>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
}