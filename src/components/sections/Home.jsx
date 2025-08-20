import Foto from "../../assets/Foto.png";

import React from "react";
import { FloatingDock } from "../ui/floating_dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";


export const Home = () => {

    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Products",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Components",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Aceternity UI",
            icon: (
                <img
                    src="https://assets.aceternity.com/logo-dark.png"
                    width={20}
                    height={20}
                    alt="Aceternity Logo" />
            ),
            href: "#",
        },
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];



    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-pink-50">
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
                        <button className="px-6 py-3 rounded-full bg-[#304a91] text-white font-medium shadow transition hover:-translate-y-0.5 hover:shadow-lg">
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
                    <div className="w-[250px] h-[250px] rounded-full overflow-hidden shadow-lg">
                        <img
                            src={Foto}
                            alt="Foto"
                            className=" object-cover"
                        />
                    </div>

                    {/* Stats */}
                    {/* <div className="text-center grid grid-cols-2 flex flex-col items-start gap-4 max-w-md p-6">

                        <div className="px-6 py-2 bg-orange-200 text-gray-800 text-sm font-medium rounded-full shadow">
                            🧠 Critical Thinking
                        </div>

                        <div className="px-6 py-2 bg-purple-300 text-gray-800 text-sm font-medium rounded-full shadow">
                            Attention to detail
                        </div>

                        <div className="px-6 py-2 bg-pink-300 text-gray-800 text-sm font-medium rounded-full shadow">
                            Visual Aestetic
                        </div>

                        <div className="px-6 py-2 bg-sky-200 text-gray-800 text-sm font-medium rounded-full shadow">
                            Creativity
                        </div>
                    </div> */}

                    <div className="flex items-center justify-center h-[10rem] w-full ">
                        <FloatingDock
                            // only for demo, remove for production
                            mobileClassName="translate-y-20"
                            items={links} />
                    </div>

                </div>
            </div>
        </section>
    );
};
