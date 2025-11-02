"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MarqueeSec } from "@/components/ui/MarqueeSec";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/motion/animations";

export const HeroSec = () => {
    return (
        <section>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* content */}
                <div
                    className={cn(
                        "container grid",
                        "lg:grid-cols-3 lg:items-center",
                        "max-lg:my-10"
                    )}
                >
                    {/* Title */}
                    <div>
                        <motion.p variants={fadeUp} className="subtitle">
                            Stunning Photography by
                        </motion.p>
                        <motion.h1
                            variants={fadeUp}
                            className="text-[40px] sm:text-5xl md:text-6xl font-semibold "
                        >
                            Damien Braun
                        </motion.h1>
                    </div>
                    {/* shape */}
                    <div className="max-lg:hidden">
                        <Image
                            src="/images/shape-1.svg"
                            alt="shape"
                            width={346}
                            height={346}
                        />
                    </div>
                    {/* Title 2 */}
                    <motion.div variants={fadeUp}>
                        <Button label="Let's" />
                        <h2>Work Together</h2>
                    </motion.div>
                </div>
                {/* marquee */}
                <MarqueeSec />
                {/* banner */}
                <motion.figure variants={fadeUp} className="container">
                    <Image
                        src="/images/hero-banner.png"
                        alt="hero banner"
                        width={1280}
                        height={424}
                    />
                </motion.figure>
            </motion.div>
        </section>
    );
};

export default HeroSec;
