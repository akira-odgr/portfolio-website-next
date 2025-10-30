import React from "react";
import { HeroSec } from "./home-section/HeroSec";
import { AboutSec } from "./home-section/AboutSec";
import ServicesSec from "./home-section/ServicesSec";

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
