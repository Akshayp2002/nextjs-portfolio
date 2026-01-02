import ContactSection from "./ContactSection";
import Reveal from "./Reveal";
import ToolsRow from "./ToolsRow";

type ToolsSectionProps = {
    animated?: boolean;
};

export default function ToolsSection({ animated = false }: ToolsSectionProps) {
    const Content = (
        <section className="space-y-16">
            {/* Heading */}
            <div className="px-10">
                <h2 className="font-black leading-[0.9] tracking-tight">
                    <span className="block text-[clamp(3.5rem,7vw,7rem)] text-black dark:text-white">
                        TOOLS AND
                    </span>
                    <span className="block text-[clamp(3.5rem,7vw,7rem)] text-zinc-500/50">
                        TECHNOLOGY
                    </span>
                </h2>
            </div>

            {/* Tools grid (like screenshot) */}
            <div className="px-10">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Backend core */}
                    <ToolsRow
                        name="Laravel"
                        subtitle="Backend Framework"
                        iconSrc="/tools/laravel.svg"
                    />
                    <ToolsRow
                        name="PHP"
                        subtitle="Backend Language"
                        iconSrc="/tools/php.svg"
                    />

                    {/* Data layer */}
                    <ToolsRow
                        name="MySQL"
                        subtitle="Relational Database"
                        iconSrc="/tools/mysql.svg"
                    />
                    <ToolsRow
                        name="Redis"
                        subtitle="Cache & Queue Store"
                        iconSrc="/tools/redis.svg"
                    />

                    <ToolsRow
                        name="Tailwind CSS"
                        subtitle="UI Styling"
                        iconSrc="/tools/tailwindcss.svg"
                    />

                    <ToolsRow
                        name="OpenAI"
                        subtitle="AI Platform"
                        iconSrc="/tools/openai.svg"
                    />

                    {/* OS + Notes */}
                    <ToolsRow
                        name="Ubuntu"
                        subtitle="Linux Server OS"
                        iconSrc="/tools/ubuntu.svg"
                    />
                    <ToolsRow
                        name="Affine"
                        subtitle="Notes & Docs"
                        iconSrc="/tools/affine.svg"
                    />
                </div>
            </div>
            <ContactSection />
        </section>
    );

    if (animated) {
        return (
            <Reveal amount={0.15} margin="0px 0px -35% 0px">
                {Content}
            </Reveal>
        );
    }

    return Content;
}
