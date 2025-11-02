"use client";

import { Title } from "@/components/ui/Title";
import { Divider } from "@/components/ui/Divider";
import Image from "next/image";
import { servicesHeightligts } from "@/data/data";
import { ServicesCard } from "@/components/ui/ServicesCard";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/motion/animations";

export const ServicesSec = () => {
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
                    subtitle="Services"
                    title="My Photography Services"
                    link="View All Services"
                />
                {/* Divider */}
                <Divider />
                {/* wrapper */}
                <div className={cn("grid gap-[50px]", "lg:grid-cols-2")}>
                    <motion.figure
                        variants={fadeUp}
                        viewport={{ once: true }}
                        className="lg:order-1"
                    >
                        <Image
                            src="/images/services-section-banner.png"
                            alt="banner"
                            width={773}
                            height={625}
                            className="rounded-t-xl rounded-b-4xl"
                        />
                    </motion.figure>

                    {/* content */}
                    <div className="grid gap-14">
                        <div>
                            <motion.h2 variants={fadeUp}>Events</motion.h2>
                            <motion.p
                                variants={fadeUp}
                                className="my-5 max-w-[570px]"
                            >
                                Our event photography service is dedicated to
                                capturing the magic of your special occasions.
                                Whether it&apos;s a wedding, corporate event, or
                                milestone celebration, we&apos;re there to
                                document every heartfelt moment. We blend into
                                the background, ensuring natural and candid
                                shots that reflect the emotions of the day.
                            </motion.p>
                        </div>

                        <div>
                            <motion.p
                                variants={fadeUp}
                                className="font-medium text-white mb-5 text-xl"
                            >
                                Service Highlights
                            </motion.p>
                            {/* Card wrapper */}
                            <motion.div
                                variants={staggerContainer}
                                viewport={{ once: true }}
                                className="grid gap-2"
                            >
                                {servicesHeightligts.map((item) => (
                                    // card
                                    <ServicesCard
                                        key={item.id}
                                        label={item.label}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ServicesSec;
