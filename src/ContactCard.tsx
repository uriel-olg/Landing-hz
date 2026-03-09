import { Mail, Phone, Smartphone } from "lucide-react";

type Props = {
    wsp: string;
    email: string;
    facebook?: string;
    instagram?: string;
};

export default function ContactCard({ wsp, email }: Props) {
    return (
        <div id="contacto" className="w-11/12 m-auto flex items-center justify-center py-20 px-4">
        <div className="
            w-full 
            max-w-md 
            bg-white/10 
            p-6 
            rounded-xl 
            backdrop-blur 
            border 
            border-white/10 
            text-center
        ">
            
            {/* Título */}
            <h2 className="text-3xl font-bold text-white">
            Contáctanos
            </h2>

            <p className="text-zinc-400 mt-2 text-sm">
            Estamos disponibles para ayudarte
            </p>

            {/* Contacto */}
            <div className="mt-8 space-y-4 pb-4">

            {/* WhatsApp / Teléfono */}
            <div className="bg-white/10 backdrop-blur flex items-center justify-between rounded-lg p-3 text-white">
                <div className="flex items-center gap-2">
                <Phone size={20} />
                <span className="text-sm">{wsp}</span>
                </div>

                <a 
                href={`tel:${wsp}`} 
                className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md transition text-sm"
                >
                <Smartphone size={16} />
                Llamar
                </a>
            </div>

            {/* Email */}
            <div className="bg-white/10 backdrop-blur flex items-center justify-between rounded-lg p-3 text-white">
                <div className="flex items-center gap-2">
                <Mail size={20} />
                <span className="text-sm break-all">{email}</span>
                </div>

                <a 
                href={`mailto:${email}`}
                className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md transition text-sm"
                >
                <Mail size={16} />
                Enviar
                </a>
            </div>

            </div>

        </div>
        </div>
    );
}