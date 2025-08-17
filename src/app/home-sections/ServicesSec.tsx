import Divider from "@/components/Divider";
import Title from "@/components/Title";
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
                <div>
                    {/* banner */}
                    <figure>
                        <Image
                            src="/images/services-section-banner.png"
                            alt="banner"
                            width={773}
                            height={625}
                        />
                    </figure>
                    {/* content */}
                    <div>
                        <p>Service Highlights</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSec;
