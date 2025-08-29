import React from "react";
import { Timeline } from "../ui/timeline";
"use client";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

export const About = () => {

    const data = [
        {
            title: "July 2025",
            content: (
                <div>
                    <p className="mb-8 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 text-justify">
                        Joined the <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">MDA Program</span>, an experience at
                        <span className="font-semibold"> Bank Mandiri</span> that challenged me to step out of my comfort zone, collaborate with amazing people, and sharpen my skills in
                        <span className="italic text-indigo-500"> problem-solving</span> and
                        <span className="italic text-pink-500"> innovation</span>, especially in contributing to digital product development such as
                        <span className="font-semibold text-amber-500"> Livin’ Sukha</span>.
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
                            className="col-span-2 h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
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
            title: "May 2025",
            content: (
                <div>
                    <p className="mb-8 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 text-justify">

                        I graduated in <span className="font-semibold text-pink-500">May 2025</span> with a thesis titled
                        <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> ‘Swin-BiLSTM with Attention for Face Swap Detection in Deepfake Videos’</span>.
                    </p>
                    <p className="mb-8 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 text-justify">

                        This work was further recognized and presented at the
                        <span className="font-semibold text-amber-500"> International Conference ICOICT on July 30, 2025</span>.
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
            title: "June 2024",
            content: (
                <div>
                    <p className="mb-8 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 text-justify">
                        During my internship at
                        <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Yayasan Pendidikan Telkom</span>,
                        I optimized the <span className="font-semibold text-indigo-600">Wi-Fi network</span> with <span className="font-semibold text-purple-600">Ruijie Cloud</span>, analyzed <span className="font-semibold text-pink-500">signal coverage</span>, recommended additional <span className="font-semibold text-green-600">APs</span>, and improved <span className="font-semibold text-blue-600">network stability</span> to support a smooth <span className="italic font-medium text-purple-500">digital learning experience</span>.
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
            title: "Februari 2024",
            content: (
                <div>
                    <p className="mb-8 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 text-justify">
                        Independent Study at <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Bisa AI</span>
                        . Focused on <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Cyber Security</span>.
                        
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
            title: "Okt - Apr 2024",
            content: (
                <div>
                    <p className="mb-8 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 text-justify">
                        Joined FORESTY (Forensic And Security Laboratory) as a member involved in Digital Forensic research. Focused on exploring digital investigation methods, analyzing electronic traces, and applying security technologies to identify and respond to cyber incidents. This experience deepened my technical insight and understanding of evidence-based digital investigation practices.
                        
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
    ];


    return (<section id="about" className="min-h-screen flex items-center justify-center py-10 bg-[#d6e6fd]" >
        <div className="px-4 items-center justify-center">

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
                        <span className="mr-3 text-[#304a91]">About</span>
                        <span className="mr-3 text-[#e84797]">Me</span>
                    </h1>
                    <div className="space-y-4 texttext-[#1F4529]">
                        <div className="rounded-xl border-white/10 border hover:-translate-y-1 transition-all text-justify">
                            I’m passionate about Digital Product and Cyber Security—two fields that may seem different, but actually complete each other.

                            My interest in Digital Product comes from the excitement of creating solutions that people genuinely find useful.

                            At the same time, I believe every great product must also be secure, which led me to explore Cyber Security as a complementary skill.

                            Over the years, I’ve developed skills in UI/UX design, product research, and data analysis, alongside my growing knowledge in security fundamentals and digital forensics.

                            This combination allows me to not only think about how a product works, but also how to keep it safe for users.

                            Beyond work, I enjoy continuous learning, exploring new technologies, and collaborating with others to solve meaningful challenges.
                        </div>
                    </div>
                </div>

            </div>





            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 py-10">
                <div className="p-6 rounded-xl bg-pink-50 border-transparent border hover:-translate-y-1 transition-all ">
                    <h3 className="text-xl font-bold mb-4 text-center"> 🏫 Education </h3>
                    <ul className="list-disc list-inside text-[#e84797] space-y-2">

                        <div class="relative border-l-4 border-[#e84797] ml-6">

                            <div class="mb-10 ml-6">
                                <div class="absolute w-4 h-4 bg-[#304a91] rounded-full -left-[10px] mt-2"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-[#304a91]">2021 - 2025</time>
                                <div class="p-4 border rounded-xl bg-white shadow-sm">
                                    <h3 class="font-semibold">Bachelor of Informatics</h3>
                                    <p class="text-gray-600 text-sm">Telkom University</p>
                                </div>
                            </div>


                            <div class="mb-10 ml-6">
                                <div class="absolute w-4 h-4 bg-[#304a91] rounded-full -left-[10px] mt-2"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-[#304a91]">2018 - 2021</time>
                                <div class="p-4 border rounded-xl bg-white shadow-sm">
                                    <h3 class="font-semibold">Diploma in Information Technology</h3>
                                    <p class="text-gray-600 text-sm">SMK Telkom Purwokerto</p>
                                </div>
                            </div>
                        </div>

                    </ul>
                </div>
                <div className="p-6 rounded-xl bg-pink-50 border-transparent border hover:-translate-y-1 transition-all ">
                    <h3 className="text-xl font-bold mb-4 text-center"> ✨ Experience With ✨ </h3>
                    <div className="space-y-4 text-gray-300">
                        <div className="p-2 rounded-xl border-TRANSPARENT hover:-translate-y-1 transition-all ">

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

            <div className="max-w-4xl mx-auto gap-6 mt-8 relative w-full overflow-clip">
                <div className="relative w-full overflow-clip">
                    <Timeline data={data} />
                </div>
            </div>

        </div >
    </section >

    );
};