"use client";
import { marqueeItems } from "@/data/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeSec = () => {
    return (
        <div className="border border-neutral-900 flex gap-10 justify-center">
            <Marquee pauseOnHover={true}>
                {marqueeItems.map((item, index) => (
                    <div key={index} className="flex items-center p-5">
                        <Image
                            src={"/images/star-shape.svg"}
                            alt="shape"
                            width={30}
                            height={30}
                        />
                        <p className="text-lg text-neutral-400">{item.label}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeSec;
