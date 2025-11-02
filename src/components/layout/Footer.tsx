"use client";

import { footerList } from "@/data/data";
import MarqueeSec from "../ui/MarqueeSec";
import Button from "../ui/Button";
import Link from "next/link";
import SocialIcons from "../ui/SocialIcons";
import { cn } from "@/lib/utils/cn";

export const Footer = () => {
    return (
        <footer>
            <div>
                {/* Footer lg text */}
                <div className="container block">
                    <div
                        className={cn(
                            "text-[64px] uppercase flex justify-end text-neutral-800 font-semibold",
                            "sm:text-[100px]",
                            "md:text-[160px]",
                            "lg:text-[200px]"
                        )}
                    >
                        <h1>Demian</h1>
                    </div>
                    {/* marquee */}
                    <MarqueeSec />
                    {/* Footer top */}
                    <div
                        className={cn(
                            "container py-24 grid gap-10 border-x border-neutral-800",
                            "sm:grid-cols-2",
                            "lg:grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr_0.5fr_0.5fr]"
                        )}
                    >
                        {/* wrapper */}
                        <div>
                            <p className="subtitle">
                                A more meaningful home for photography
                            </p>
                            {/* Button */}
                            <Button label="Let’s" />
                            <h2>Work Together</h2>
                        </div>
                        {/* footer list */}
                        {footerList.map((item) => (
                            <div key={item.id}>
                                <p className="font-semibold text-xl text-white">
                                    {item.title}
                                </p>
                                {/* list */}
                                <ul className="grid mt-5 gap-3">
                                    {item.links.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href="#"
                                                className="hover:underline"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {/* Footer bottom */}
                    <div className="border-b border-neutral-900">
                        <div className="container py-6">
                            {/* Links */}
                            <div className="flex gap-4 mb-7">
                                <a href="#" className="hover:underline">
                                    Terms & Conditions
                                </a>
                                <a href="" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </div>
                            {/* wrapper */}
                            <div className="flex items-center justify-between flex-wrap gap-3">
                                {/* social icons */}
                                <SocialIcons />
                                {/* copy right info */}
                                <p>
                                    &copy; {new Date().getFullYear()} Damien
                                    Braun Photography. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
