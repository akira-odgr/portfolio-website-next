import PortfolioCard from "@/components/ui/PortfolioCard";
import Title from "@/components/ui/Title";
import { portfolioSectionItems } from "@/data/data";
import { cn } from "@/lib/utils/cn";

export const PortfolioSec = () => {
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <Title
                    subtitle="Portfolio"
                    title="Explore My photography work."
                    link="View All Works"
                />

                {/* Card Wrapper */}
                <div
                    className={cn(
                        "grid gap-12 mt-20",
                        "md:grid-cols-2",
                        "lg:grid-cols-3"
                    )}
                >
                    {portfolioSectionItems.map((item) => (
                        // Card
                        <PortfolioCard
                            key={item.id}
                            img={item.imgUrl}
                            title={item.title}
                            date={item.date}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSec;
