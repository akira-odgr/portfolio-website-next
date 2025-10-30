import { socialLinks } from "@/data/data";
import { cn } from "@/lib/utils/cn";
import React from "react";

export const SocialIcons = () => {
    return (
        <div className="flex gap-2 border border-neutral-800 p-1 max-w-max rounded-full items-center">
            {socialLinks.map((item, index) => (
                <a
                    key={index}
                    href="#"
                    target="_blank"
                    className={cn(
                        "w-10 h-10 bg-neutral-800 rounded-full flex-center aspect-square transition-colors",
                        "hover:bg-neutral-700"
                    )}
                >
                    {<item.icon />}
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;
