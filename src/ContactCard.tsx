import {Mail, Phone, Smartphone} from "lucide-react";

type Props = {
    wsp: string;
    email: string;
    facebook: string;
    instagram: string;
};

export default function ContactCard({
    wsp,
    email,

}: Props) {


return (
    <div className="flex m-auto items-center  justify-center p-20 ">
        <div className="w-2/5 bg-white/10 p-6 rounded-xl backdrop-blur border border-white/10 text-center">

            {/* titulo */}
            <h2 className="text-3xl font-bold text-white text-center">
            Contáctanos
            </h2>

            <p className="text-zinc-400 text-center mt-2 text-sm">
            Estamos disponibles para ayudarte
            </p>

            {/* contacto */}
            <div className="mt-8 space-y-4 pb-4">

                <div className="bg-white/10 backdrop-blur flex items-center justify-between rounded-lg  p-3 text-white">
                    <div className="flex items-center gap-2">
                    <Phone size={18} />
                    <span>{wsp}</span>
                    </div>

                    <button className="flex items-center gap-1 bg-blue-600 rounded-md hover:bg-blue-700 px-3 py-1 rounded-md transition">
                    <Smartphone size={16} />
                    Llamar
                    </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur flex items-center justify-between rounded-lg  p-3 text-white">
                    <div className="flex items-center gap-2">
                    <Mail size={18} />
                    <span>{email}</span>
                    </div>

                    <button className="flex items-center gap-1 bg-blue-600 rounded-md hover:bg-blue-700 px-3 py-1 rounded-md transition">
                    <Mail size={16} />
                    Enviar
                    </button>
                </div>
            
            </div>

        </div>
    </div>
    );
}