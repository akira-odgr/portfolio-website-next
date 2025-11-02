"use client";

import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/motion/animations";

interface titleProps {
    subtitle: string;
    title: string;
    link?: string;
}

export const Title = ({ subtitle, title, link }: titleProps) => {
    return (
        <div className="flex items-center justify-between flex-wrap gap-7">
            <div>
                <motion.p
                    variants={fadeUp}
                    viewport={{ once: true }}
                    className="subtitle"
                >
                    {subtitle}
                </motion.p>
                <motion.h2 variants={fadeUp}>{title}</motion.h2>
            </div>

            {link && (
                <motion.button variants={fadeUp}>
                    <Link
                        href="#"
                        className="primary-btn flex items-center gap-2"
                    >
                        {link}
                        <span>
                            <RiArrowRightLine size={20} />
                        </span>
                    </Link>
                </motion.button>
            )}
        </div>
    );
};

export default Title;
