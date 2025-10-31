import React from "react";
import { HeroSec } from "./home-section/HeroSec";
import { AboutSec } from "./home-section/AboutSec";
import { ServicesSec } from "./home-section/ServicesSec";
import { PortfolioSec } from "./home-section/PortfolioSec";
import FaqSec from "./home-section/FaqSec";

const Home = () => {
    return (
        <>
            <HeroSec />
            <AboutSec />
            <ServicesSec />
            <PortfolioSec />
            <section className="section">
                <FaqSec />
            </section>
        </>
    );
};

export default Home;
