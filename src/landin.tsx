export default function PricingSoftware() {
    const services = [
        {
        name: "Landing Page Profesional",
        price: "$75.000",
        description: "Ideal para presentar tu negocio o servicio con diseño moderno.",
        features: [
            "Sección de servicios",
            "Formulario de contacto",
            "Diseño responsivo",
            "Optimización SEO básica",
        ],
        button: "Solicitar",
        highlight: false,
        },
        {
        name: "Desarrollo a Medida",
        price: "Desde $150.000",
        description:
            "Aplicaciones web personalizadas construidas según tus necesidades.",
        features: [
            "Dashboard / Panel Admin",
            "Base de datos incluida",
            "Autenticación de usuarios",
            "API personalizada",
            "Escalable y mantenible",
        ],
        button: "Consultar Proyecto",
        highlight: true,
        },
        {
        name: "Soporte y Mantenimiento",
        price: "$25.000 / mes",
        description: "Mantengo tu sistema estable, seguro y actualizado.",
        features: [
            "Monitoreo del sistema",
            "Backups automáticos",
            "Corrección de errores",
            "Optimizaciones de rendimiento",
            "Soporte 24/7",
        ],
        button: "Contratar",
        highlight: false,
        },
    ];

    return (
        <section className=" py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
            Servicios de Desarrollo y Soporte
        </h2>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
            {services.map((plan, i) => (
            <div
                key={i}
                className={`p-6 rounded-xl shadow-lg border transition-all ${
                plan.highlight
                    ? "bg-[#09131e] text-white scale-105 shadow-xl"
                    : "bg-white text-gray-800"
                }`}
            >
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-4xl font-extrabold mt-2">{plan.price}</p>
                <p className="mt-2 text-sm opacity-80">{plan.description}</p>

                <ul className="mt-6 space-y-2">
                {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✔</span> {f}
                    </li>
                ))}
                </ul>

                <button
                className={`mt-6 w-full py-3 rounded-lg font-semibold transition ${
                    plan.highlight
                    ? "bg-white text-blue-600 hover:bg-gray-200"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                >
                {plan.button}
                </button>
            </div>
            ))}
        </div>
        </section>
    );
}