import { cn } from "@/lib/utils/cn";
import { RiArrowRightUpLongLine } from "@remixicon/react";
import React from "react";

interface buttonProps {
    label: string;
}

export const Button = ({ label }: buttonProps) => {
    return (
        <button className="flex items-center gap-2.5 max-w-max">
            <h2 className="flex items-center gap-2.5 max-w-max">
                {label}

                <span
                    className={cn(
                        "bg-purple-600 w-20 h-12 flex items-center justify-center rounded-full transition-colors",
                        "hover:bg-purple-500"
                    )}
                >
                    <RiArrowRightUpLongLine size={26} />
                </span>
            </h2>
        </button>
    );
};

export default Button;
