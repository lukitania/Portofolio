import Foto from "../../assets/Foto.png";

export const Home = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-pink-50">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

                {/* Kiri - Text */}
                <div className="space-y-6">
                    <p className="text-gray-600">Hey, I'm Nur Fitri</p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        A <span className="text-[#e84797]">UI/UX</span> & Brand Designer
                    </h1>
                    <p className="text-gray-600 max-w-md">
                        Transforming ideas into stunning visuals – UI/UX and brand design
                        that captivates, engages, and delivers results.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <button className="px-6 py-3 rounded-full bg-[#4d84cf] text-white font-medium shadow transition hover:-translate-y-0.5 hover:shadow-lg">
                            Contact Me
                        </button>
                        <button className="px-6 py-3 rounded-full border border-[#f283af] text-[#e84797] font-medium shadow transition hover:-translate-y-0.5 hover:bg-pink-100">
                            View Projects
                        </button>
                    </div>
                </div>

                {/* Kanan - Foto + Stats */}
                <div className="flex flex-col items-center relative mt-10">
                    {/* Foto */}
                    <div className="w-[300px] h-[300px] rounded-full overflow-hidden shadow-lg">
                        <img
                            src={Foto}
                            alt="Foto"
                            className=" object-cover"
                        />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 mt-8 text-center">
                        <div>
                            <p className="text-2xl font-bold text-[#6a88be]">15+</p>
                            <p className="text-sm text-gray-600">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#f283af]">280+</p>
                            <p className="text-sm text-gray-600">Projects Delivered</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#f283af]">98%</p>
                            <p className="text-sm text-gray-600">Client Satisfaction</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#6a88be]">50</p>
                            <p className="text-sm text-gray-600">Clients Worldwide</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
