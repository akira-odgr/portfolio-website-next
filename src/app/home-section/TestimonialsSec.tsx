"use client";

import { TestimonialsCard } from "@/components/ui/TestimonialsCard";
import { Title } from "@/components/ui/Title";
import { Divider } from "@/components/ui/Divider";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/motion/animations";

export const TestimonialsSec = () => {
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
                    subtitle="Testimonials"
                    title="What My Clients Say"
                    link="View All Testimonials"
                />
                <div className="mt-5">
                    <motion.p variants={fadeUp}>Total Reviews</motion.p>
                    <motion.h3
                        variants={fadeUp}
                        className="text-2xl font-semibold"
                    >
                        323
                    </motion.h3>
                </div>
                {/* Divider */}
                <Divider />
                <motion.div variants={fadeUp}>
                    <TestimonialsCard />
                </motion.div>
                {/* navigation buttons */}
                <motion.div
                    variants={fadeUp}
                    className="flex items-center gap-2 flex-wrap border border-neutral-800 max-w-max p-3 rounded-full mt-10"
                >
                    <button
                        className={cn(
                            "prev-btn",
                            "w-11 h-11 bg-neutral-800 flex-center rounded-full aspect-square transition-colors",
                            "hover:bg-neutral-700"
                        )}
                    >
                        <RiArrowLeftSLine size={30} />
                    </button>
                    <button
                        className={cn(
                            "next-btn",
                            "w-11 h-11 bg-neutral-800 flex-center rounded-full aspect-square transition-colors",
                            "hover:bg-neutral-700"
                        )}
                    >
                        <RiArrowRightSLine size={30} />
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};
