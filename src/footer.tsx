export default function Footer() {
    return (
        <footer className="py-10 bg-[#0a1623] text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">

            <h3 className="font-bold text-xl">HZ soft</h3>

            <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://www.instagram.com/hz_soft">Instagram</a>
            <a href="#">Facebook</a>
            <a href="mailto:olguriel@gmail.com">Correo</a>
            </div>  
        </div>
        </footer>
    );
}