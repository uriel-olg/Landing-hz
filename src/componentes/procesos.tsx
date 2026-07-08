import {
  MessageCircleMore,
  FileSearch,
  CodeXml,
  BadgeCheck,
} from "lucide-react";

const process = [
  {
    number: "1",
    title: "Primer contacto",
    description:
      "Cuéntanos tu idea o necesidad. Analizamos tu proyecto y resolvemos todas tus dudas antes de comenzar.",
    icon: MessageCircleMore,
  },
  {
    number: "2",
    title: "Planificación",
    description:
      "Definimos la mejor estrategia, tiempos de trabajo y una propuesta adaptada a tus objetivos.",
    icon: FileSearch,
  },
  {
    number: "3",
    title: "Desarrollo",
    description:
      "Creamos la solución utilizando herramientas modernas, manteniéndote informado durante todo el proceso.",
    icon: CodeXml,
  },
  {
    number: "4",
    title: "Entrega y soporte",
    description:
      "Publicamos el proyecto o finalizamos el servicio y continuamos brindando soporte cuando lo necesites.",
    icon: BadgeCheck,
  },
];

export default function Procesos() {
  return (
    <section
      id="procesos"
      className="bg-[#09131e]  py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 font-semibold">
            Nuestro proceso
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Trabajamos de forma simple,
            transparente y eficiente.
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Desde el primer contacto hasta la entrega final,
            te acompañamos en cada etapa para ofrecerte una
            solución tecnológica adaptada a tus necesidades.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Línea */}

          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-5/6 h-[2px] bg-blue-500/40 hidden lg:block"></div>

          <div className="grid lg:grid-cols-4 gap-12 relative">

            {process.map((step) => {
              const Icon = step.icon;

              return (

                <div
                  key={step.number}
                  className="relative text-center group"
                >

                  {/* Circulo */}

                  <div className="
                  relative
                  z-10
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-blue-500/30
                  bg-[#111827]
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:border-blue-500
                  group-hover:shadow-[0_0_40px_rgba(37,99,235,.4)]
                  ">

                    <Icon
                      className="text-blue-400"
                      size={34}
                    />

                  </div>

                  {/* Número */}

                  <span className="mt-6 block text-m font-semibold tracking-[0.3em] text-blue-400">
                    {step.number}
                  </span>

                  {/* Título */}

                  <h3 className="mt-3 text-xl font-semibold">
                    {step.title}
                  </h3>

                  {/* Texto */}

                  <p className="mt-4 text-gray-400 leading-7">
                    {step.description}
                  </p>

                </div>

              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}