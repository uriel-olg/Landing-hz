import {
  Github,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09131e] text-white">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-14 lg:grid-cols-3">

          {/* Empresa */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src="/hz_logo.webp"
                alt="HZ Software"
                className="h-12 w-12 rounded-xl object-cover"
              />

              <div>

                <h3 className="text-xl font-bold">
                  HZ Software
                </h3>

                <p className="text-sm text-blue-400">
                  Soluciones Tecnológicas
                </p>

              </div>

            </div>

            <p className="mt-6 max-w-sm leading-7 text-gray-400">
              Desarrollamos landing pages, sitios web y soluciones
              tecnológicas modernas para ayudar a empresas y
              profesionales a crecer en el mundo digital.
            </p>

          </div>

          {/* Navegación */}

          <div>

            <h4 className="font-semibold">
              Navegación
            </h4>

            <nav className="mt-6 flex flex-col gap-4 text-gray-400">

              <a
                href="#"
                className="transition hover:text-blue-400"
              >
                Inicio
              </a>

              <a
                href="#servicios"
                className="transition hover:text-blue-400"
              >
                Servicios
              </a>

              <a
                href="#proceso"
                className="transition hover:text-blue-400"
              >
                Nuestro proceso
              </a>

              <a
                href="#tecnologias"
                className="transition hover:text-blue-400"
              >
                Tecnologías
              </a>

              <a
                href="#contacto"
                className="transition hover:text-blue-400"
              >
                Contacto
              </a>

            </nav>

          </div>

          {/* Redes */}

          <div>

            <h4 className="font-semibold">
              Síguenos
            </h4>

            <div className="mt-6 flex flex-col gap-4">

              <a
                href="#"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-blue-500/30 hover:bg-white/10"
              >

                <div className="flex items-center gap-3">

                  <Github
                    className="text-blue-400"
                    size={20}
                  />

                  GitHub

                </div>

                <ArrowUpRight
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={18}
                />

              </a>

              <a
                href="#"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-blue-500/30 hover:bg-white/10"
              >

                <div className="flex items-center gap-3">

                  <Linkedin
                    className="text-blue-400"
                    size={20}
                  />

                  LinkedIn

                </div>

                <ArrowUpRight
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={18}
                />

              </a>

              <a
                href="#"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-blue-500/30 hover:bg-white/10"
              >

                <div className="flex items-center gap-3">

                  <Instagram
                    className="text-blue-400"
                    size={20}
                  />

                  Instagram

                </div>

                <ArrowUpRight
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={18}
                />

              </a>

            </div>

          </div>

        </div>

        {/* Footer inferior */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} HZ Software. Todos los derechos reservados.
          </p>

          <p>
            Diseñado y desarrollado con ❤️ por HZ Software.
          </p>

        </div>

      </div>

    </footer>
  );
}