import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1623] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        
        <h3 className="font-bold text-xl">HZ Soft</h3>

        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/hz_soft"
            className="hover:text-blue-400 transition"
          >
            <Instagram size={22} />
          </a>

          <a
            href="#"
            className="hover:text-blue-400 transition"
          >
            <Facebook size={22} />
          </a>

          <a
            href="mailto:olguriel@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <Mail size={22} />
          </a>
        </div>

      </div>

      <p className="text-center text-sm text-gray-400 mt-6">
        © {new Date().getFullYear()} HZ Soft. Todos los derechos reservados.
      </p>
    </footer>
  );
}