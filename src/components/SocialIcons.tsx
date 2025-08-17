import { socialLinks } from "@/data/data";

const SocialIcons = () => {
    return (
        <div className="flex items-center gap-2 border border-neutral-800 max-w-max p-1 rounded-full">
            {socialLinks.map((item, index) => (
                <a
                    key={index}
                    href="#"
                    target="_blank"
                    className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center aspect-square hover:bg-neutral-700 transition-colors"
                >
                    {<item.icon />}
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;
