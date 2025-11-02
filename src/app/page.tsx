import { HeroSec } from "./home-section/HeroSec";
import { AboutSec } from "./home-section/AboutSec";
import { ServicesSec } from "./home-section/ServicesSec";
import { PortfolioSec } from "./home-section/PortfolioSec";
import { FaqSec } from "./home-section/FaqSec";
import { TestimonialsSec } from "./home-section/TestimonialsSec";

const Home = () => {
    return (
        <>
            <HeroSec />
            <AboutSec />
            <ServicesSec />
            <PortfolioSec />
            <FaqSec />
            <TestimonialsSec />
        </>
    );
};

export default Home;
