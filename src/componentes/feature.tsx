import {
  Clock3,
  ShieldCheck,
  Headphones,
  Cpu,
  Rocket,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Clock3,
    title: "Respuesta Rápida",
    desc: "Atendemos cada consulta con rapidez para que puedas resolver tus necesidades tecnológicas sin demoras.",
  },
  {
    icon: Cpu,
    title: "Soluciones Integrales",
    desc: "Desde una landing page hasta el mantenimiento y optimización de tus equipos, todo en un solo lugar.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad Garantizada",
    desc: "Trabajamos con herramientas modernas y buenas prácticas para ofrecer soluciones seguras y duraderas.",
  },
  {
    icon: Rocket,
    title: "Tecnología Actual",
    desc: "Utilizamos tecnologías modernas para desarrollar soluciones rápidas, escalables y preparadas para crecer.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    desc: "Cada proyecto es diferente. Escuchamos tus necesidades y diseñamos una solución adaptada a tu negocio.",
  },
  {
    icon: Headphones,
    title: "Soporte Continuo",
    desc: "No desaparecemos después de entregar el proyecto. Seguimos acompañándote cuando lo necesites.",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-[#060B14] py-28 text-white">

      {/* Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            ¿Por qué elegir HZ Software?
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Tecnología, confianza y compromiso
            en cada proyecto.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Nuestro objetivo no es solamente desarrollar una página web o reparar
            un equipo. Buscamos convertirnos en tu aliado tecnológico para que
            puedas concentrarte en hacer crecer tu negocio.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500/40
                  hover:bg-white/10
                  hover:shadow-[0_20px_60px_rgba(37,99,235,.20)]
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 transition group-hover:bg-blue-500/20">

                  <Icon
                    size={32}
                    className="text-blue-400"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.desc}
                </p>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}