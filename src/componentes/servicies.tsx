import {
  TbLayoutDashboard,
  TbWorld,
  TbHeadset,
  TbGauge,
  TbTool,
  TbCpu,
} from "react-icons/tb";

const services = [
  {
    title: "Landing Pages",
    icon: TbLayoutDashboard,
    desc: "Creamos landing pages modernas, rápidas y optimizadas para convertir visitantes en clientes.",
  },
  {
    title: "Sitios Web",
    icon: TbWorld,
    desc: "Desarrollamos sitios web profesionales, responsivos y adaptados a las necesidades de tu negocio.",
  },
  {
    title: "Soporte Técnico",
    icon: TbHeadset,
    desc: "Brindamos asistencia técnica para resolver problemas de hardware y software.",
  },
  {
    title: "Optimización de Equipos",
    icon: TbGauge,
    desc: "Mejoramos el rendimiento de computadoras y notebooks.",
  },
  {
    title: "Mantenimiento",
    icon: TbTool,
    desc: "Mantenimiento preventivo y correctivo para extender la vida útil de los equipos.",
  },
  {
    title: "Actualización de Hardware y Software",
    icon: TbCpu,
    desc: "Instalación y actualización de componentes, sistemas y aplicaciones.",
  },
];
export default function Services() {

  return (
    
    <section
      id="servicios"
      className="relative overflow-hidden bg-[#09131e] py-28 text-white"
    >
      {/* Fondo decorativo */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Nuestros Servicios
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Soluciones tecnológicas para cada necesidad
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Ayudamos a empresas y profesionales con desarrollo web,
            mantenimiento de equipos, soporte técnico y soluciones
            tecnológicas diseñadas para mejorar su productividad.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-gray-/10
                  p-8
                  backdrop-blur-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500/40
                  hover:bg-white/10
                  hover:shadow-[0_20px_60px_rgba(37,99,235,.20)]
                "
              >
                {/* Glow */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icono */}

                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">

                <Icon className="text-3xl text-blue-400" />

                </div>

                {/* Contenido */}

                <h3 className="relative mt-8 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="relative mt-4 leading-7 text-gray-400">
                  {service.desc}
                </p>

                {/* CTA */}

                <a
                  href="#contacto"
                  className="relative mt-8 inline-flex items-center gap-2 font-medium text-blue-400 transition-all duration-300 group-hover:gap-4"
                >
                  Solicitar información

                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 5l7 7-7 7"
                    />
                  </svg>

                </a>

              </article>

            )}
          )}

        </div>

      </div>
    </section>
  );
}