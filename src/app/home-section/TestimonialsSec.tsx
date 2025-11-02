import { TestimonialsCard } from "@/components/ui/TestimonialsCard";
import { Title } from "@/components/ui/Title";
import { Divider } from "@/components/ui/Divider";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { cn } from "@/lib/utils/cn";

export const TestimonialsSec = () => {
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <Title
                    subtitle="Testimonials"
                    title="What My Clients Say"
                    link="View All Testimonials"
                />
                <div className="mt-5">
                    <p>Total Reviews</p>
                    <h3 className="text-2xl font-semibold">323</h3>
                </div>
                {/* Divider */}
                <Divider />
                <TestimonialsCard />
                {/* navigation buttons */}
                <div className="flex items-center gap-2 flex-wrap border border-neutral-800 max-w-max p-3 rounded-full mt-10">
                    <button
                        className={cn(
                            "prev-btn",
                            "w-11 h-11 bg-neutral-800 flex-center rounded-full aspect-square transition-colors",
                            "hover:bg-neutral-700"
                        )}
                    >
                        <RiArrowLeftSLine size={30} />
                    </button>
                    <button
                        className={cn(
                            "next-btn",
                            "w-11 h-11 bg-neutral-800 flex-center rounded-full aspect-square transition-colors",
                            "hover:bg-neutral-700"
                        )}
                    >
                        <RiArrowRightSLine size={30} />
                    </button>
                </div>
            </div>
        </section>
    );
};
