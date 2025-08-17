"use client";
import { RiArrowRightUpLine } from "react-icons/ri";

interface buttonProps {
    label: string;
}

const Button = ({ label }: buttonProps) => {
    return (
        <button className="flex items-center gap-2.5 max-w-max">
            <h2 className="flex items-center gap-2.5 max-w-max">
                {label}
                <span className="bg-purple-600 w-20 h-12 flex items-center justify-center rounded-full hover:bg-purple-500 transition-colors">
                    <RiArrowRightUpLine size={26} />
                </span>
            </h2>
        </button>
    );
};

export default Button;
