import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MarqueeSec } from "@/components/ui/MarqueeSec";
import { cn } from "@/lib/utils/cn";

export const HeroSec = () => {
    return (
        <section>
            <div>
                {/* content */}
                <div
                    className={cn(
                        "container grid",
                        "lg:grid-cols-3 lg:items-center"
                    )}
                >
                    {/* Title */}
                    <div>
                        <p className="subtitle">Stunning Photography by</p>
                        <h1 className="text-[40px] sm:text-5xl md:text-6xl font-semibold ">
                            Damien Braun
                        </h1>
                    </div>
                    {/* shape */}
                    <div className="max-lg:hidden">
                        <Image
                            src="/images/shape-1.svg"
                            alt="shape"
                            width={346}
                            height={346}
                        />
                    </div>
                    {/* Title 2 */}
                    <div>
                        <Button label="Let's" />
                        <h2>Work Together</h2>
                    </div>
                </div>
                {/* marquee */}
                <MarqueeSec />
                {/* banner */}
                <figure className="container">
                    <Image
                        src="/images/hero-banner.png"
                        alt="hero banner"
                        width={1280}
                        height={424}
                    />
                </figure>
            </div>
        </section>
    );
};

export default HeroSec;
