import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { BackgroundGradient } from "../ui/gradient";


export const HoverEffect = ({ items, className }) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);
    let [hoverColor, setHoverColor] = useState("rgba(255,255,255,0.2)");

    const getRandomColor = () => {
        const colors = [
            "rgba(106,136,190,0.3)",  // biru utama (#6a88be)
            "rgba(242,131,175,0.3)",  // pink utama (#f283af)
            "rgba(186,214,235,0.3)",  // biru pastel (#bad6eb)
            "rgba(251,217,229,0.3)",  // pink pastel (#fbd9e5)
            "rgba(106,136,190,0.15)", // biru soft transparan
            "rgba(242,131,175,0.15)"  // pink soft transparan
        ];

        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
            {items.map((item, idx) => (
                <a
                    href={item?.link}
                    key={item?.link}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => {
                        setHoveredIndex(idx);
                        setHoverColor(getRandomColor());
                    }}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full block rounded-3xl"
                                style={{ backgroundColor: hoverColor }}
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        {item.image && (
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover rounded-xl"
                            />
                        )}
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </a>
            ))}
        </div>
    );
};

export const Card = ({ className, children }) => {
    return (
        <BackgroundGradient>
            <div
                className={cn(
                    "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#ffffff] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                    className
                )}
            >
                <div className="relative z-50">
                    <div className="p-2">{children}</div>
                </div>
            </div>
        </BackgroundGradient>
    );
};

export const CardTitle = ({ className, children }) => {
    return (
        <h4 className={cn("text-[#e84797] font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};

export const CardDescription = ({ className, children }) => {
    return (
        <p
            className={cn("mt-2 text-black-400 tracking-wide leading-relaxed text-sm", className)}
        >
            {children}
        </p>
    );
};