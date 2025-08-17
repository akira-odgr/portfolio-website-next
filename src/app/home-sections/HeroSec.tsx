import Button from "@/components/Button";
import MarqueeSec from "@/components/MarqueeSec";
import Image from "next/image";
import React from "react";

const HeroSec = () => {
    return (
        <section>
            <div>
                {/* content */}
                <div className="container grid lg:grid-cols-3 lg:items-center lg:justify-between max-lg:my-10">
                    {/* Title */}
                    <div>
                        <p className="subtitle">Stunning Photography by</p>
                        <h1 className="text-[40px] sm:text-5xl md:text-6xl font-semibold">
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
                    {/* Title2 */}
                    <div>
                        <Button label="Let's" />
                        <h2>Work Together</h2>
                    </div>
                </div>
                {/* marguee */}
                <MarqueeSec />
                {/* banner */}
                <figure className="container">
                    <Image
                        src="/images/hero-banner.png"
                        alt="hero banner"
                        width={1280}
                        height={424}
                        priority
                        className="w-full h-full object-cover"
                    />
                </figure>
            </div>
        </section>
    );
};

export default HeroSec;
