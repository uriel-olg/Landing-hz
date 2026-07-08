import { ArrowRight, CheckCircle2, Clock3, Sparkles } from "lucide-react";

const phone = 542604230590;

const services = [
  "Landing Pages",
  "Sitios Web",
  "Soporte Técnico",
  "Optimización",
  "Mantenimiento",
  "Actualización de Hardware",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#09131e] py-28 text-white">

      {/* Glow fondo */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[200px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <div
          className="
          relative
          overflow-hidden
          rounded-[32px]
          border-2
        
          border-blue-500/30
          bg-gradient-to-b
          from-white/5
          to-white/[0.03]
          backdrop-blur-xl
          shadow-[0_25px_80px_rgba(0,0,0,.35)]
          px-8
          py-16
          lg:px-16
          lg:py-20
        "
        >

          {/* Glow interno */}

          <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="relative z-10">

            {/* Badge */}

            <div className="flex justify-center">

              <span
                className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-5
                py-2
                text-sm
                font-medium
                text-blue-400
              "
              >
                <Sparkles size={16} />

                Impulsemos tu negocio

              </span>

            </div>

            {/* Título */}

            <h2 className="mx-auto mt-8 max-w-4xl text-center text-4xl font-bold leading-tight lg:text-6xl">

              Convierte tus ideas en

              <span className="text-blue-400">

                {" "}soluciones digitales

              </span>

            </h2>

            {/* Descripción */}

            <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-gray-300">

              Creamos landing pages, sitios web y soluciones tecnológicas
              modernas para empresas y profesionales que buscan crecer,
              mejorar su presencia digital y optimizar sus procesos.

            </p>

            {/* Badges */}

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              {services.map((service) => (

                <div
                  key={service}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-3
                    text-sm
                    transition-all
                    duration-300
                    hover:border-blue-500/40
                    hover:bg-blue-500/10
                  "
                >

                  <CheckCircle2
                    size={18}
                    className="text-blue-400"
                  />

                  <span>{service}</span>

                </div>

              ))}

            </div>

            {/* Botones */}

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <a
                href={`https://wa.me/${phone}?text=Hola,%20quiero%20solicitar%20un%20presupuesto`}
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-blue-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-600/30
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-blue-500/50
                "
              >

                Solicitar presupuesto

                <ArrowRight size={20} />

              </a>

              <a
                href="#servicios"
                className="
                  inline-flex
                  items-center
                  rounded-xl
                  border
                  border-blue-500/30
                  bg-blue-500/5
                  px-8
                  py-4
                  font-medium
                  text-gray-200
                  transition-all
                  duration-300
                  hover:border-blue-500/50
                  hover:bg-blue-500/20
                "
              >

                Ver servicios

              </a>

            </div>

            {/* Footer */}

            <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">

              <div className="flex items-center gap-2">

                <Clock3
                  size={18}
                  className="text-blue-400"
                />

                <span>Respuesta rápida</span>

              </div>

              <span className="hidden sm:block text-gray-600">•</span>

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={18}
                  className="text-blue-400"
                />

                <span>Atención personalizada</span>

              </div>

              <span className="hidden sm:block text-gray-600">•</span>

              <div className="flex items-center gap-2">

                <Sparkles
                  size={18}
                  className="text-blue-400"
                />

                <span>Asesoramiento sin compromiso</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}