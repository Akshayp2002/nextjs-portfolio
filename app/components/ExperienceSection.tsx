import ExperienceRow from "./ExperienceRow";
import Reveal from "./Reveal";

type ProjectsSectionProps = {
    animated?: boolean;
};
export default function ExperienceSection({ animated = false }: ProjectsSectionProps) {
    const Content = (
        <section className="space-y-16">
            {/* Heading */}
            <div className="px-10">
                <h2 className="font-black leading-[0.9] tracking-tight">
                    <span className="block text-[clamp(3.5rem,7vw,7rem)] text-black dark:text-white">
                        3 YEARS OF
                    </span>
                    <span className="block text-[clamp(3.5rem,7vw,7rem)] text-zinc-500/50">
                        EXPERIENCE
                    </span>
                </h2>
            </div>

            {/* Experience list */}
            <div className="space-y-10 px-10">
                <ExperienceRow
                    title="I Trend Solution"
                    role="Software Engineer"
                    description="Built automation and analytics using Amazon SP-API and Ads API. Worked on real-time inventory sync, scheduled workflows, and AI-driven ad optimization for scalable commerce systems."
                    period="May 2025 – Present"
                />

                <ExperienceRow
                    title="Cloudrevel Innovation"
                    role="Software Engineer"
                    description="Developed and optimized backend systems with a focus on database design, API performance, and scalable architecture. Collaborated closely with frontend teams on production applications."
                    period="March 2023 – April 2025"
                />

                <ExperienceRow
                    title="AOF Engineering Systems, LLC"
                    role="Junior Developer"
                    description="Gained hands-on experience in backend development, database management, and performance optimization within production environments."
                    period="September 2022 – February 2023"
                />
            </div>
        </section>
    );

    // ✅ Animate only when requested (Home)
    if (animated) {
        return (
            <Reveal amount={0.3} y={28} margin="0px 0px -35% 0px">
                {Content}
            </Reveal>
        );
    }

    // ✅ Static version (Projects page)
    return Content;
}