"use client";

import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import Link from "next/link";
import { navItems } from "@/data/data";
import { cn } from "@/lib/utils/cn";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const pathname = usePathname();

    return (
        <header className="border-b border-neutral-900">
            <div className="container flex items-center justify-between py-5 lg:pb-0">
                {/* Logo */}
                <Link href="/" className="text-3xl font-medium uppercase">
                    Demian
                </Link>

                {/* Mobile menu */}
                <nav className={cn("navbar", isOpen && "active")}>
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="font-medium text-3xl uppercase">
                            Damien
                        </h3>
                        <button
                            className={cn(
                                "border w-[50px] h-[50px] rounded-full flex items-center justify-center border-neutral-800 transition-colors",
                                "hover:bg-neutral-900"
                            )}
                            onClick={handleClick}
                        >
                            <RiCloseLine size={30} />
                        </button>
                    </div>

                    <ul className="grid">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                className="border-b border-neutral-900 text-center"
                            >
                                <Link
                                    href={item.path}
                                    className={cn(
                                        "block py-5",
                                        "hover:bg-neutral-900",
                                        pathname === item.path &&
                                            "bg-neutral-900"
                                    )}
                                    onClick={handleClick}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/contact"
                        className={cn("block text-center mt-10", "primary-btn")}
                        onClick={handleClick}
                    >
                        contact me
                    </Link>
                </nav>

                {/* lg menu */}
                <ul className="max-lg:hidden flex items-center border border-neutral-800 rounded-t-2xl">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={item.path}
                                className={cn(
                                    "px-8 py-5 block transition-colors overflow-hidden",
                                    "hover:bg-neutral-900",
                                    pathname === item.path && "bg-neutral-900"
                                )}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* lg contact btn */}
                <Link
                    href="/contact"
                    className={cn("max-lg:hidden", "primary-btn")}
                >
                    contact me
                </Link>

                {/* Menu icon */}
                <button className="lg:hidden" onClick={handleClick}>
                    <RiMenu3Line size={30} />
                </button>

                {/* overlay */}
                <div
                    className={cn("overlay", isOpen && "active")}
                    onClick={handleClick}
                />
            </div>
        </header>
    );
};

export default Header;
