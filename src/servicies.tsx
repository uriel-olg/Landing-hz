const services = [
    { title: "Software a Medida", img: "./mantenimiento.png", desc: "Desarrollo de software y sistemas personalizados." },
    { title: "Soporte Técnico", img: "./soporte2.png", desc: "Asistencia remota o presencial para resolver problemas." },
    { title: "Mantenimiento Preventivo", img:"./certificado.png", desc: "Evita fallos técnicos con mantenimiento regular." },
    { title: "Ensamble y Configuración", img:"./ensamble2.png", desc: "Armado, instalación y puesta en marcha." },
];

export default function Services() {
    return (
        <section id="servicios" className="py-20 text-white ">
        <div className="max-w-7xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-10 text-center">Nuestros Servicios</h2>

            <div className="grid md:grid-cols-4 gap-6">
            {services.map((s, i) => (
                <div key={i}
                className="bg-white/10 p-6 rounded-xl backdrop-blur border border-white/10 text-center">
                <div className="text-4xl mb-3">{<img src={s.img} alt="" />}</div>
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">{s.desc}</p>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
}