"use client";

import Divider from "@/components/ui/Divider";
import Title from "@/components/ui/Title";
import { faqItems } from "@/data/data";
import { cn } from "@/lib/utils/cn";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "@remixicon/react";
import React, { useState } from "react";

export const FaqSec = () => {
    const [openId, setOpenId] = useState<null | string | number>(
        faqItems[0].id ?? null
    );

    const handleClick = (id: number) => {
        setOpenId(openId === id ? null : id);
    };
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <Title subtitle="FAQ’s" title="Frequently Asked Questions" />

                {/* Divider */}
                <Divider />

                {/* wrapper */}
                <div
                    className={cn(
                        "grid gap-4",
                        "lg:grid-cols-2 lg:items-start"
                    )}
                >
                    {faqItems.map((item) => (
                        <div
                            key={item.id}
                            className="border border-neutral-800"
                        >
                            {/* Title */}
                            <div className="flex items-center justify-between px-5 py-8 gap-8">
                                <h3 className="text-xl uppercase">
                                    {item.title}
                                </h3>
                                <button
                                    className={cn(
                                        "w-[52px] h-[52px] border rounded-full flex items-center justify-center aspect-square transition-colors border-neutral-800",
                                        "hover:border-neutral-700"
                                    )}
                                    onClick={() => handleClick(item.id)}
                                >
                                    {openId === item.id ? (
                                        <RiArrowDropDownLine size={30} />
                                    ) : (
                                        <RiArrowDropUpLine size={30} />
                                    )}
                                </button>
                            </div>

                            {/* Text */}
                            <div
                                className={cn(
                                    "max-h-0 overflow-y-hidden transition-all duration-300 ease-in-out",
                                    openId === item.id && "max-h-96"
                                )}
                            >
                                <p className="px-5 pb-8">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSec;
