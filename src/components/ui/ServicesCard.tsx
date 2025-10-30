import Image from "next/image";
import React from "react";

interface cardProps {
    label: string;
}

export const ServicesCard = ({ label }: cardProps) => {
    return (
        <div>
            <div className="flex items-center gap-2 mb-3 border border-neutral-800 py-6 px-5">
                <Image
                    src="/images/star-shape.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
                <span>{label}</span>
            </div>
        </div>
    );
};

export default ServicesCard;
