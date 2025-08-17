import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/app/globals.css";
import "@/utils/fluid-text.css";
import { ReactLenis } from "lenis/react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Demien Braun | photographer portfolio",
    description:
        "Explore the portfolio of Demien braun a professional photographer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className={manrope.className}>
            <ReactLenis root />
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
