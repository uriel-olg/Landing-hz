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
        description: "Aplicaciones web personalizadas construidas según tus necesidades.",
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
        <section className="py-16 px-4 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Servicios de Desarrollo y Soporte
        </h2>

        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((plan, i) => (
            <div
                key={i}
                className={`
                h-full w-5/6 bg-white/10 m-auto justify-center items-center
                p-6 rounded-xl border backdrop-blur transition-all bg-[#0c1624]
                ${plan.highlight ? "border-blue-500 shadow-xl scale-[1.02]" : "border-blue-500 shadow-xl scale-[1.02]"}
                `}
            >
                <h3 className="text-xl md:text-2xl font-bold">{plan.name}</h3>


                <p className="mt-2 text-sm opacity-80">{plan.description}</p>

                <ul className="mt-6 space-y-2">
                {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                    <span className="text-green-500 font-bold">✔</span> {f}
                    </li>
                ))}
                </ul>

                <button
                className={`
                    mt-6 w-full py-3 rounded-lg font-semibold transition
                    ${plan.highlight ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"}
                `}
                >
                {plan.button}
                </button>
            </div>
            ))}
        </div>
        </section>
    );
}