import {
  Mail,
  MapPin,
  Phone,
  Clock3,
  ArrowRight,
} from "lucide-react";

const phone = 542604230590;

export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-[#060B14] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-4
              py-2
              text-sm
              text-blue-400
            "
          >
            Contacto
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            ¿Tienes un proyecto en mente?
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Estamos listos para ayudarte a crear la mejor solución
            para tu negocio.
          </p>

        </div>

        {/* Contenido */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Información */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-10
              backdrop-blur-xl
            "
          >

            <h3 className="text-2xl font-semibold">
              Hablemos
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Cuéntanos tu idea y te responderemos lo antes posible.
              Podemos ayudarte con landing pages, sitios web,
              mantenimiento, optimización y soporte técnico.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-500/10 p-3">
                  <Phone className="text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    WhatsApp
                  </p>

                  <a
                    href={`https://wa.me/${phone}`}
                    className="font-medium hover:text-blue-400"
                  >
                    +54 260 423-0590
                  </a>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-500/10 p-3">
                  <Mail className="text-blue-400" />
                </div>

                <div>

                  <p className="text-sm text-gray-400">
                    Correo
                  </p>

                  <a
                    href="mailto:contacto@hzsoftware.com"
                    className="font-medium hover:text-blue-400"
                  >
                    contacto@hzsoftware.com
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-500/10 p-3">
                  <MapPin className="text-blue-400" />
                </div>

                <div>

                  <p className="text-sm text-gray-400">
                    Ubicación
                  </p>

                  <span>
                    Mendoza, Argentina
                  </span>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-500/10 p-3">
                  <Clock3 className="text-blue-400" />
                </div>

                <div>

                  <p className="text-sm text-gray-400">
                    Horario
                  </p>

                  <span>
                    Lunes a Viernes · 09:00 - 18:00
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Formulario */}

          <form
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-10
              backdrop-blur-xl
            "
          >

            <div className="grid gap-6">

              <input
                type="text"
                placeholder="Nombre"
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-[#09131e]
                  p-4
                  outline-none
                  transition
                  focus:border-blue-500
                "
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-[#09131e]
                  p-4
                  outline-none
                  transition
                  focus:border-blue-500
                "
              />

              <select
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-[#09131e]
                  p-4
                  outline-none
                  transition
                  focus:border-blue-500
                "
              >
                <option>Landing Page</option>
                <option>Sitio Web</option>
                <option>Optimización</option>
                <option>Soporte Técnico</option>
                <option>Mantenimiento</option>
              </select>

              <textarea
                rows={6}
                placeholder="Cuéntanos sobre tu proyecto..."
                className="
                  resize-none
                  rounded-xl
                  border
                  border-white/10
                  bg-[#09131e]
                  p-4
                  outline-none
                  transition
                  focus:border-blue-500
                "
              />

              <button
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  py-4
                  font-semibold
                  transition
                  hover:bg-blue-500
                "
              >
                Enviar mensaje

                <ArrowRight size={18} />

              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}