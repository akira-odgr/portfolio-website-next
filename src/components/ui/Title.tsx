import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";

interface titleProps {
    subtitle: string;
    title: string;
    link: string;
}

export const Title = ({ subtitle, title, link }: titleProps) => {
    return (
        <div className="flex items-center justify-between flex-wrap gap-7">
            <div>
                <p className="subtitle">{subtitle}</p>
                <h2>{title}</h2>
            </div>

            <button>
                <Link href="#" className="primary-btn flex items-center gap-2">
                    {link}
                    <span>
                        <RiArrowRightLine size={20} />
                    </span>
                </Link>
            </button>
        </div>
    );
};

export default Title;
