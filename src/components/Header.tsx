"use client";
import { useState } from "react";
import Link from "next/link";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { navItems } from "@/data/data";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuOpen = () => setIsOpen((prev) => !prev);

    const pathname = usePathname();

    return (
        <header className="border-b border-neutral-900">
            <div className="container flex items-center justify-between py-5 lg:pb-0">
                {/* Logo */}
                <Link href="/" className="text-3xl font-medium uppercase">
                    Demien
                </Link>

                {/* Mobile Menu */}
                <nav className={cn("navbar", isOpen && "active")}>
                    {/* wrapper */}
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="font-medium text-3xl uppercase">
                            Damien
                        </h3>
                        <button
                            className="border w-[50px] h-[50px] rounded-full flex items-center justify-center border-neutral-800 hover:bg-neutral-900 transition-colors"
                            onClick={handleMenuOpen}
                        >
                            <RiCloseLine size={30} />
                        </button>
                    </div>

                    {/* nav list */}
                    <ul className="grid">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                className="border-b border-neutral-900 text-center"
                            >
                                <Link
                                    href={item.path}
                                    className={cn(
                                        "block py-5 hover:bg-neutral-900",
                                        pathname === item.path &&
                                            "bg-neutral-900"
                                    )}
                                    onClick={handleMenuOpen}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* contact btn */}
                    <Link
                        href="/contact"
                        className="primary-btn block text-center mt-10"
                        onClick={handleMenuOpen}
                    >
                        contact me
                    </Link>
                </nav>

                {/* Lg menu */}
                <ul className="max-lg:hidden flex items-center border border-neutral-800 rounded-t-2xl overflow-hidden">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={item.path}
                                className={cn(
                                    "px-8 py-5 block hover:bg-neutral-900 transition-colors",
                                    pathname === item.path && "bg-neutral-900"
                                )}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* lg contact btn */}
                <Link href="/contact" className="max-lg:hidden primary-btn">
                    contact me
                </Link>

                {/* Menu icon */}
                <button
                    className={cn("lg:hidden", isOpen && "hidden")}
                    onClick={handleMenuOpen}
                >
                    <RiMenu3Line size={30} />
                </button>

                {/* overlay */}
                <div
                    className={cn("overlay", isOpen && "active")}
                    onClick={handleMenuOpen}
                />
            </div>
        </header>
    );
};

export default Header;
