import { cn } from "@/lib/utils/cn";
import { RiArrowRightUpLongLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

interface portfolioCardProps {
    img: string;
    title: string;
    date: string;
}

export const PortfolioCard = ({ img, title, date }: portfolioCardProps) => {
    return (
        <div>
            {/* Card image */}
            <figure className="mb-5">
                <Image
                    src={img}
                    alt={title}
                    width={519}
                    height={499}
                    className="rounded-4xl w-full h-full object-cover"
                />
            </figure>

            {/* card content */}
            <div className="flex justify-between items-center flex-wrap gap-5">
                <div>
                    <h4 className="text-xl">{title}</h4>
                    <p>{date}</p>
                </div>
                <Link
                    href="/portfolio"
                    className={cn("flex items-center", "hover:underline")}
                >
                    View project{" "}
                    <span>
                        <RiArrowRightUpLongLine />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default PortfolioCard;
