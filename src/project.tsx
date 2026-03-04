const projects = [
    { title: "Sistema de Inventario", desc: "Gestión empresarial optimizada.", img: "" },
    { title: "Optimización de Red", desc: "Mejora del rendimiento y estabilidad.", img: "" },
    { title: "App de Ventas", desc: "Gestión de ventas rápida y moderna.", img: "" },
    ];

export default function Projects() {
    return (
        <section className="py-20 bg-[#0d1b2a] text-white">
        <div className="max-w-7xl mx-auto px-4">

            <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
                <div key={i} className="bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="w-full h-40 bg-white/10 rounded-lg mb-4"></div>

                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-gray-300 mt-1 text-sm">{p.desc}</p>

                <button className="mt-4 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
                    Ver Proyecto
                </button>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
}