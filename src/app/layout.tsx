import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils/cn";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Demien Braun | photographer portfolio",
    description:
        "Explore the portfolio of Damien braun a professional photographer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className={cn("antialiased", manrope.className)}>
            <body className="antialiased">
                <LenisProvider>
                    <Header />
                    <main className="min-h-screen">{children}</main>
                    <Footer />
                </LenisProvider>
            </body>
        </html>
    );
}
