import Foto from '../../assets/Foto.png';


export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-300 to-rose-300 bg-clip-text text-transparent leading-tight [-webkit-text-stroke:1px_black] [paint-order:stroke_fill]">
                    Hi, I'm Nur Fitri Lukitania
                </h1>
                {/* Untuk Lingkaran */}
                <div className="relative w-full h-[250px] flex items-start justify-center relative">
                    <div className="absolute bottom-0 w-[350px] h-[200px] bg-rose-300 rounded-t-full z-0 border border-zinc-1000"></div>
                    <div className="absolute bottom-0 w-50 ">
                        <img
                            src="/assets/Foto.png"
                            alt="Foto"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute top-70 flex justify-center space-x-4">
                        <a href="#projects" className="bg-rose-300 border shadow-xs/50 text-zinc-800 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-lime-700/50 shadow-xs/50 text-lime-700 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            Contact Me
                        </a>
                    </div>
                    <div className="absolute bottom-[10px] -left-5 text-center w-50">
                        <h2 className="text-lg font-semibold py-2"> 🤝 </h2>
                        <p className="text-sm text-black-600">As a graduate of Informatics from Telkom University, I, Nur Fitri Lukitania, have a strong interest in Mobile and Web Development as well as Cyber Security.
                        </p>
                    </div>
                    <div className="absolute bottom-[10px] right-4 text-left w-40 ">
                        <h2 className="text-lg font-semibold py-4">Experience With</h2>
                        <div className="grid grid-cols-4 gap-4">
                            <img src="/assets/Figma.png" alt="Foto" className="w-auto h-auto" />
                            <img src="/assets/Laravel.png" alt="Foto" className="w-auto h-auto" />
                            <img src="/assets/react.png" alt="Foto" className="w-auto h-auto" />
                            <img src="/assets/flutter.png" alt="Foto" className="w-auto h-auto" />
                            <img src="/assets/python.png" alt="Foto" className="w-auto h-auto" />
                            <img src="/assets/javascript.svg" alt="Foto" className="w-auto h-auto" />
                            <img src="/assets/css.png" alt="Foto" className="w-auto h-auto" />
                            <img src="/assets/html2.png" alt="Foto" className="w-auto h-auto" />
                        </div>

                    </div>
                </div>



            </div>
        </section>
    );
};