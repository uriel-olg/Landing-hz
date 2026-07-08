import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss,
  SiWordpress,
} from "react-icons/si";

const technologies = [
  {
    title: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
  },
  {
    title: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    title: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
  },
  {
    title: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    title: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    title: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
  },
  {
    title: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    title: "CSS3",
    icon: SiCss,
    color: "#1572B6",
  },
  {
    title: "WordPress",
    icon: SiWordpress,
    color: "#21759B",
  },
];

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="bg-[#060B14] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Tecnologías
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Herramientas modernas para soluciones confiables
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Trabajamos con tecnologías actuales para desarrollar productos
            rápidos, seguros y preparados para crecer junto a tu negocio.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.title}
                className="
    group
    rounded-2xl
    border
    border-white/10
    bg-white/5
    p-8
    text-center
    backdrop-blur
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-blue-500/40
    hover:bg-white/10
    hover:shadow-[0_20px_50px_rgba(37,99,235,.20)]
  "
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0b0f1866] transition group-hover:scale-110">
                  <Icon size={48} style={{ color: tech.color }} />
                </div>

                <h3 className="mt-6 text-lg font-semibold">{tech.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
