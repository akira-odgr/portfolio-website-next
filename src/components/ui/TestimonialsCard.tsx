"use client";

import { testimonialItems } from "@/data/data";
import SocialIcons from "./SocialIcons";
import { RiStarFill } from "@remixicon/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

export const TestimonialsCard = () => {
    return (
        // {/* slider */}
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1.5,
                },
                1024: {
                    slidesPerView: 2.5,
                },
            }}
            autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            }}
        >
            {testimonialItems.map((item) => (
                <SwiperSlide key={item.id}>
                    {/* Card */}
                    <div className="border border-neutral-800 rounded-[10px] p-10 bg-neutral-900 flex flex-col gap-5 aspect-video">
                        {/* Card title */}
                        <div>
                            <div>
                                <h5>{item.name}</h5>
                                <p>{item.location}</p>
                            </div>
                            {/* Social icons */}
                            <SocialIcons />
                        </div>
                        {/* stars */}
                        <div className="flex items-center text-yellow-500 gap-2">
                            <RiStarFill size={22} />
                            <RiStarFill size={22} />
                            <RiStarFill size={22} />
                            <RiStarFill size={22} />
                            <RiStarFill size={22} />
                        </div>
                        {/* text */}
                        <p>{item.text}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TestimonialsCard;
