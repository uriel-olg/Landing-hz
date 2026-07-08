const phone = 542604230590;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#060B14] text-white p-10">
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
            <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">
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
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href={`https://wa.me/${phone}?text=Hola,%20quiero%20solicitar%20un%20presupuesto`}
                className="rounded-xl bg-blue-600 px-8 py-4 text-center font-semibold transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Solicitar presupuesto
              </a>

              <a
                href="#servicios"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-center font-semibold backdrop-blur transition hover:border-blue-500 hover:bg-white/10"
              >
                Ver servicios
              </a>

            </div>

            {/* Servicios rápidos */}

            <div className="mt-12 flex flex-wrap gap-3">

              {[
                "Landing Pages",
                "Sitios Web",
                "Soporte Técnico",
                "Optimización",
                "Mantenimiento",
                "Actualización",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur"
                >
                  {item}
                </span>
              ))}

            </div>

            {/* Estadísticas */}

            <div className="mt-14 grid grid-cols-3 gap-5">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                <h3 className="text-3xl font-bold text-blue-400">
                  +50
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Proyectos
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                <h3 className="text-3xl font-bold text-blue-400">
                  24/7
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Soporte
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                <h3 className="text-3xl font-bold text-blue-400">
                  100%
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Personalizado
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
              src="/hero.png"
              alt="HZ Software"
              className="relative w-full max-w-xl drop-shadow-[0_25px_80px_rgba(59,130,246,0.35)]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}