const feats = [
    { title: "Respuesta Inmediata", img: "/reloj.png", desc: "Atención rápida para resolver problemas." },
    { title: "Técnicos Certificados", img: "/chico.png", desc: "Profesionales con experiencia y certificaciones." },
    { title: "Desarrollo Escalable", img: "/coete.png", desc: "Soluciones modernas listas para crecer." },
    { title: "Precios Competitivos", img: "/monedas.png", desc: "La mejor relación calidad-precio del mercado." },
];

export default function Features() {
    return (
        <section className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-10 text-center">¿Por qué elegirnos?</h2>

            <div className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            ">
            {feats.map((f, i) => (
                <div key={i} className="h-full w-5/6 bg-white/10 m-auto bg-white/10 p-6 rounded-xl border border-white/10 text-center">
                
                <img
                    src={f.img}
                    alt={f.title}
                    className="size-35 mx-auto mb-4 object-contain"
                />

                <h3 className="font-bold text-lg">{f.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{f.desc}</p>

                </div>
            ))}
            </div>

        </div>
        </section>
    );
    }