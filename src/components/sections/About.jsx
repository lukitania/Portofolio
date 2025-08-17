import React from "react";
import { Timeline } from "../ui/timeline";
"use client";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

export const About = () => {

    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Built and launched Aceternity UI and Aceternity UI Pro from scratch
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/templates/startup-1.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-2.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-3.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-4.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Early 2023",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Changelog",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Deployed 5 new components on Aceternity today
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Card grid component
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Startup template Aceternity
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Random file upload lol
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Himesh Reshammiya Music CD
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Salman Bhai Fan Club registrations open
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
    ];

    const content = [
        {
            title: "Collaborative Editing",
            description:
                "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                    Collaborative Editing
                </div>
            ),
        },
        {
            title: "Real time changes",
            description:
                "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
            content: (
                <div className="flex h-full w-full items-center justify-center text-white">
                    <img
                        src="/linear.webp"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Version control",
            description:
                "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                    Version control
                </div>
            ),
        },
        {
            title: "Running out of content",
            description:
                "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                    Running out of content
                </div>
            ),
        },
    ];


    return (<section id="about" className="min-h-screen flex items-center justify-center py-20 bg-[#bad6eb]" >
        <div className="px-4 items-center justify-center">

            <h2 className=" max-w-3xl mx-auto  text-3xl font-bold mb-8 bg-gradient-to-r from-zinc-700 to-zinc-700 bg-clip-text text-transparent text-center">
                {""}
                About Me
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <img
                            src="/assets/Foto2.png"
                            alt="Foto"
                            className="object-cover w-80 h-80"
                        />
                    </ul>
                </div>
                <div className="col-span-2 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                    <h1 className="space-y-4 flex flex-wrap text-black font-bold text-5xl">
                        <span className="mr-3 text-[#304a91]">Hi!</span>
                        <span className="mr-3 text-[#304a91]">I'm</span>
                        <span className="mr-3 text-[#e84797]">Tania</span>
                    </h1>
                    <div className="space-y-4 texttext-[#1F4529]">
                        <div className="rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                            bla bla bla bla bla bla bla bla bla bla bla bla
                        </div>
                    </div>
                </div>

            </div>





            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                <div className="p-6 rounded-xl border-[#304a91] border hover:-translate-y-1 transition-all ">
                    <h3 className="text-xl font-bold mb-4 text-center"> 🏫 Education </h3>
                    <ul className="list-disc list-inside text-[#e84797] space-y-2">

                        <div class="relative border-l-4 border-[#e84797] ml-6">

                            <div class="mb-10 ml-6">
                                <div class="absolute w-4 h-4 bg-[#6a88be] rounded-full -left-[10px] mt-2"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-[#304a91]">2021 - 2025</time>
                                <div class="p-4 border rounded-xl bg-white shadow-sm">
                                    <h3 class="font-semibold">Bachelor of Informatics</h3>
                                    <p class="text-gray-600 text-sm">Telkom University</p>
                                </div>
                            </div>


                            <div class="mb-10 ml-6">
                                <div class="absolute w-4 h-4 bg-[#6a88be] rounded-full -left-[10px] mt-2"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-[#304a91]">2018 - 2021</time>
                                <div class="p-4 border rounded-xl bg-white shadow-sm">
                                    <h3 class="font-semibold">Diploma in Information Technology</h3>
                                    <p class="text-gray-600 text-sm">SMK Telkom Purwokerto</p>
                                </div>
                            </div>
                        </div>

                    </ul>
                </div>
                <div className="p-6 rounded-xl border-[#304a91] border hover:-translate-y-1 transition-all ">
                    <h3 className="text-xl font-bold mb-4 text-center"> ✨ Experience With ✨ </h3>
                    <div className="space-y-4 text-gray-300">
                        <div className="p-2 rounded-xl border hover:-translate-y-1 transition-all ">

                            {/* Grid Container */}
                            <div className="max-w-4xl mx-auto grid grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
                                
                                {/* Card Skill */}
                                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gray-50 shadow-md hover:scale-105 transition">
                                    <img src="/assets/Figma.png" alt="Figma" className="w-10 h-10" />
                                </div>

                                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gray-50 shadow-md hover:scale-105 transition">
                                    <img src="/assets/Laravel.png" alt="Figma" className="w-10 h-10" />
                                </div>

                                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gray-50 shadow-md hover:scale-105 transition">
                                    <img src="/assets/react.png" alt="Figma" className="w-10 h-10" />
                                </div>

                                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gray-50 shadow-md hover:scale-105 transition">
                                    <img src="/assets/flutter.png" alt="Figma" className="w-10 h-10" />
                                </div>

                                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gray-50 shadow-md hover:scale-105 transition">
                                    <img src="/assets/python.png" alt="Figma" className="w-10 h-10" />
                                </div>

                                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gray-50 shadow-md hover:scale-105 transition">
                                    <img src="/assets/javascript.svg" alt="Figma" className="w-10 h-10" />
                                </div>

                                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gray-50 shadow-md hover:scale-105 transition">
                                    <img src="/assets/css.png" alt="Figma" className="w-10 h-10" />
                                </div>

                                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gray-50 shadow-md hover:scale-105 transition">
                                    <img src="/assets/html2.png" alt="Figma" className="w-10 h-10" />
                                </div>
                            </div>

                        </div>
                    
                </div>
            </div>
        </div>



        <div className="gap-6 mt-8 relative w-full overflow-clip">

        </div>

    </div >
    </section >

    );
};