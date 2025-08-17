import Divider from "@/components/Divider";
import ServicesCard from "@/components/ServicesCard";
import Title from "@/components/Title";
import { servicesHeightligts } from "@/data/data";
import Image from "next/image";

const ServicesSec = () => {
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <Title
                    subtitle="Services"
                    title="My Photography Services"
                    link="View All Services"
                />
                {/* Divider */}
                <Divider />
                {/* wrapper */}
                <div className="grid gap-[50px] lg:grid-cols-2">
                    {/* banner */}
                    <figure className="lg:order-1">
                        <Image
                            src="/images/services-section-banner.png"
                            alt="banner"
                            width={773}
                            height={625}
                            className="rounded-t-xl rounded-b-4xl"
                        />
                    </figure>
                    {/* content */}
                    <div className="grid gap-14">
                        <div>
                            <h2>Events</h2>
                            <p className="my-5 max-w-[570px]">
                                Our event photography service is dedicated to
                                capturing the magic of your special occasions.
                                Whether it's a wedding, corporate event, or
                                milestone celebration, we're there to document
                                every heartfelt moment. We blend into the
                                background, ensuring natural and candid shots
                                that reflect the emotions of the day.
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-white mb-5 text-xl">
                                Service Highlights
                            </p>
                            {/* Card wrapper */}
                            <div className="grid gap-2">
                                {servicesHeightligts.map((item) => (
                                    // card
                                    <ServicesCard
                                        key={item.id}
                                        label={item.label}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSec;
