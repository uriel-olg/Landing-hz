const projects = [
    { title: "Sistema de Inventario", desc: "Gestión empresarial optimizada.", img: "/proyecto1.png" },
    { title: "Optimización de Red", desc: "Mejora del rendimiento y estabilidad.", img: "/proyecto2.png" },
    { title: "App de Ventas", desc: "Gestión de ventas rápida y moderna.", img: "/proyecto3.png" },
];

export default function Projects() {
    return (
        <section id="proyectos" className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-10 text-center">
            Proyectos Realizados
            </h2>

            <div className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            ">
            {projects.map((p, i) => (
                <div key={i} className="w-5/6 bg-white/10 m-auto bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/[0.15] transition">

                {/* Imagen del proyecto */}
                <div className="w-full h-40 bg-white/10 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                    {p.img ? (
                    <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover"
                    />
                    ) : (
                    <span className="text-gray-400 text-sm">Imagen no disponible</span>
                    )}
                </div>

                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-gray-300 mt-1 text-sm">{p.desc}</p>

                <button className="mt-4 w-full bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Ver Proyecto
                </button>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
}