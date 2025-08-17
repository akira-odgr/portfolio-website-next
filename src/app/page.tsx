import React from "react";
import HeroSec from "@/app/home-sections/HeroSec";
import AboutSec from "@/app/home-sections/AboutSec";
import ServicesSec from "@/app/home-sections/ServicesSec";

const Home = () => {
    return (
        <>
            <HeroSec />
            <AboutSec />
            <ServicesSec />
        </>
    );
};

export default Home;
