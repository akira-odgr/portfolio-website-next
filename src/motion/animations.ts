import { Variants } from "framer-motion";

export const fadeUp = (delay: number = 0): Variants => ({
    hidden: { y: 30, opacity: 0, filter: "blur(5px)" },
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0)",
        transition: {
            duration: 0.7,
            delay: delay,
            ease: "easeOut",
        },
    },
});

export const fadeIn = (delay: number = 0): Variants => ({
    hidden: { opacity: 0, filter: "blur(5px)" },
    visible: {
        opacity: 1,
        filter: "blur(0)",
        transition: {
            duration: 0.7,
            delay: delay,
            ease: "easeOut",
        },
    },
});
