"use client";

import PortfolioCard from "@/components/ui/PortfolioCard";
import Title from "@/components/ui/Title";
import { portfolioSectionItems } from "@/data/data";
import { cn } from "@/lib/utils/cn";
import { fadeUp, staggerContainer } from "@/motion/animations";
import { motion } from "framer-motion";

export const PortfolioSec = () => {
    return (
        <section className="section">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container"
            >
                {/* Title */}
                <Title
                    subtitle="Portfolio"
                    title="Explore My photography work."
                    link="View All Works"
                />

                {/* Card Wrapper */}
                <motion.div
                    variants={staggerContainer}
                    viewport={{ once: true }}
                    className={cn(
                        "grid gap-12 mt-20",
                        "md:grid-cols-2",
                        "lg:grid-cols-3"
                    )}
                >
                    {portfolioSectionItems.map((item) => (
                        // Card
                        <PortfolioCard
                            key={item.id}
                            img={item.imgUrl}
                            title={item.title}
                            date={item.date}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default PortfolioSec;
