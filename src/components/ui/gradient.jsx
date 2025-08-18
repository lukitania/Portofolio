import { cn } from "../lib/utils2";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true
}) => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0 50%", "100% 50%", "0 50%"] },
  };

  // SUNSET VIBES
  const gradient =
  "bg-[radial-gradient(circle_farthest-side_at_0%_100%,#f283af,transparent_70%),radial-gradient(circle_farthest-side_at_100%_0%,#60a5fa,transparent_70%),radial-gradient(circle_farthest-side_at_100%_100%,#f283af,transparent_80%),radial-gradient(circle_farthest-side_at_0%_0%,#f283af,transparent_80%)]";



  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 2, // lebih cepat dari sebelumnya
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{ backgroundSize: animate ? "400% 400%" : undefined }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          gradient
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{ backgroundSize: animate ? "400% 400%" : undefined }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          gradient
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};