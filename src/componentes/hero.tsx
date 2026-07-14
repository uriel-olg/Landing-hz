
const phone = 542604230590;



import {Clock3,Sparkles,ArrowRight,
  MonitorSmartphone,
  Globe,
  Headset,
  Gauge,
  Wrench,
  Cpu,
} from "lucide-react";


const quickServices = [
  {
    title: "Landing Pages",
    icon: MonitorSmartphone,
  },
  {
    title: "Sitios Web",
    icon: Globe,
  },
  {
    title: "Soporte Técnico",
    icon: Headset,
  },
  {
    title: "Optimización",
    icon: Gauge,
  },
  {
    title: "Mantenimiento",
    icon: Wrench,
  },
  {
    title: "Actualización",
    icon: Cpu,
  },
];


export default function Hero() {
  return (
    <section
    id="home"
  className="
    relative
    overflow-hidden
    bg-[#060B14]
    bg-[url('Landing-hz/public/hero-bg.webp.png')]
    bg-cover
    bg-center
    bg-no-repeat
    pb-20
  "
>
      {/* Efectos de fondo */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[150px]" />
      <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ================= TEXTO ================= */}

          <div>

            {/* Badge */}
            <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 mt-25">
              🚀 Soluciones Tecnológicas para Empresas y Profesionales
            </span>

            {/* Título */}
            <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl text-white">
              Impulsamos tu negocio con
              <span className="text-blue-500"> tecnología </span>
              moderna.
            </h1>

            {/* Descripción */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              Desarrollamos landing pages, sitios web, brindamos soporte
              técnico, mantenimiento de equipos y soluciones informáticas
              para que tu empresa trabaje de forma más eficiente.
            </p>

            {/* Botones */}
<div className="mt-12 flex flex-col gap-4 sm:flex-row">

  {/* Botón principal */}
  <a
    href={`https://wa.me/${phone}?text=Hola,%20quiero%20solicitar%20un%20presupuesto`}
    className="
      group
      inline-flex
      items-center
      justify-center
      gap-3
      rounded-2xl
      bg-gradient-to-r
      from-blue-600
      to-blue-500
      px-8
      py-4
      font-semibold
      text-white
      shadow-lg
      shadow-blue-600/20
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-2xl
      hover:shadow-blue-500/30
      active:scale-95
    "
  >
    <Sparkles
      size={18}
      className="transition-transform duration-300 group-hover:rotate-12"
    />

    Solicitar presupuesto

    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </a>

  {/* Botón secundario */}
  <a
    href="#servicios"
    className="
      group
      inline-flex
      items-center
      justify-center
      gap-3
      rounded-2xl
      border
      border-white/10
      bg-white/5
      px-8
      py-4
      font-semibold
      text-white
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-blue-500/40
      hover:bg-white/10
    "
  >
    Ver servicios

    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </a>

</div>


            {/* Servicios rápidos */}

<div className="mt-14 flex flex-wrap gap-4">
  {quickServices.map((service) => {
    const Icon = service.icon;

    return (
      <div
        key={service.title}
        className="
          group
          flex
          items-center
          gap-3
          rounded-full
          border
          border-blue-500/20
          bg-blue-500/10
          px-5
          py-3
          backdrop-blur-xl
          shadow-sm
          shadow-blue-500/10
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-400/40
          hover:bg-blue-500/15
          hover:shadow-l
          hover:shadow-blue-500/20
        "
      >
        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-blue-500/20
          "
        >
          <Icon
            size={16}
            className="text-blue-400"
          />
        </div>

        <span className="text-sm font-medium text-gray-100">
          {service.title}
        </span>
      </div>
    );
  })}
</div>

            {/* Estadísticas */}

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">

  {/* Card 1 */}

  <div
    className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border
      border-blue-500/40
      bg-white/5
      p-6
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-500/40
      hover:shadow-xl
      hover:shadow-blue-500/10
      
    "
  >
    {/* Glow */}
    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20" />

    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
      <Clock3 size={28} className="text-blue-400" />
    </div>

    <h3 className="text-3xl font-bold text-white">
      24 hs
    </h3>

    <p className="mt-2 text-sm text-gray-400">
      Tiempo de respuesta
    </p>
  </div>

  {/* Card 2 */}

  <div
    className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border
       border-blue-500/40
      bg-white/5
      p-6
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-500/40
      hover:shadow-xl
      hover:shadow-blue-500/10
    "
  >
    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />

    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
      <Headset size={28} className="text-blue-400" />
    </div>

    <h3 className="text-3xl font-bold text-white">
      24/7
    </h3>

    <p className="mt-2 text-sm text-gray-400">
      Soporte técnico
    </p>
  </div>

  {/* Card 3 */}

  <div
    className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border
      border-blue-500/40
      bg-white/5
      p-6
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-500/40
      hover:shadow-xl
      hover:shadow-blue-500/10
    "
  >
    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/10 blur-3xl transition group-hover:bg-indigo-500/20" />

    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
      <Sparkles size={28} className="text-blue-400" />
    </div>

    <h3 className="text-3xl font-bold text-white">
      100%
    </h3>

    <p className="mt-2 text-sm text-gray-400">
      Soluciones a medida
    </p>
  </div>

</div>

          </div>

          {/* ================= IMAGEN ================= */}

          <div className="relative hidden lg:flex items-center justify-center">

            {/* Glow */}
            <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[150px]" />

            {/* Imagen principal */}
            <img
              src="/web-dark.svg"
              alt="HZ Software"
              className="relative w-full max-w-xl drop-shadow-[0_25px_80px_rgba(59,130,246,0.35)]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}