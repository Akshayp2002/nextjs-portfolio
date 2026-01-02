import ExperienceSection from "./components/ExperienceSection";
import ProfileCard from "./components/ProfileCard";
import ProjectsSection from "./components/ProjectsSection";
import ToolsSection from "./components/ToolsSection";

export default function HomePage() {
  return (
    <main className="pt-14">
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[380px_1fr]">
          {/* LEFT: sticky (no separate scroll) */}
          <aside className="lg:sticky lg:top-10 lg:self-start">
            <ProfileCard />
          </aside>

          {/* RIGHT: normal content (page scrolls) */}
          <div className="space-y-10 pb-16">
            <div className="px-10 py-0">
              <h1 className="font-black leading-[0.9] tracking-tight">
                <span className="block text-[clamp(3.5rem,7vw,7rem)] dark:text-white text-black">
                  SOFTWARE
                </span>
                <span className="block text-[clamp(3.5rem,7vw,7rem)] text-zinc-500/50">
                  ENGINEER
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-zinc-400">
                Passionate about creating intuitive and engaging user experiences.
                Specialize in transforming ideas into beautifully crafted products.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3">
                <Stat value="+3" label="Years of experience" />
                <Stat value="+10" label="Projects completed" />
              </div>

            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <PlaceholderCard
                title="Currently Exploring"
                desc="Experimenting with AI-driven systems, scalable backend architecture, and performance-focused web applications."
              />

              <PlaceholderCard
                title="What I’m Looking For"
                desc="Opportunities to work on meaningful products, solve complex problems, and build systems that scale."
              />
            </div>

            {/* PROJECTS (animated) */}
            <section id="projects" className="scroll-mt-28">
              <ProjectsSection animated />
            </section>

            {/* Experience (animated) */}
            <section id="experience" className="scroll-mt-28">
              <ExperienceSection animated />
            </section>

            {/* Tools (animated) */}
            <section id="tools" className="scroll-mt-28">
              <ToolsSection animated />
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-5xl font-extrabold dark:text-white text-black">
        {value}
      </div>
      <div className="mt-2 text-sm uppercase tracking-wide text-zinc-500">
        {label}
      </div>
    </div>
  );
}
function PlaceholderCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        h-[220px]
        rounded-2xl
        bg-neutral-100/60 dark:bg-neutral-900/50
        hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70
        transition-colors duration-300
        p-8
        flex flex-col justify-between
      "
    >
      <div>
        <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>

        <p className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {desc}
        </p>
      </div>

      {/* <div className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        Coming soon
      </div> */}
    </div>
  );
}

