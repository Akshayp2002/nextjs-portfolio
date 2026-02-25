import { ArrowUpRight } from "lucide-react";

type ExperienceRowProps = {
  title: string;
  role: string;
  description: string;
  period: string;
  href?: string;
};

export default function ExperienceRow({
  title,
  role,
  description,
  period,
  href,
}: ExperienceRowProps) {
  const Wrapper: React.ElementType = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
      className={[
        "group flex items-start justify-between gap-8 rounded-2xl py-10 px-8 transition-colors duration-300 mb-2",
        "bg-neutral-100/60 dark:bg-neutral-900/50",
        "hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70",
        "border-b border-neutral-200/70 dark:border-neutral-800/70",
      ].join(" ")}
    >
      <div className="max-w-3xl">
        <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
        {/* Role */}
        <p className="mt-1 text-lg font-medium text-neutral-600 dark:text-neutral-400">
          {role}
        </p>

        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          {description}
        </p>

        <p className="mt-6 text-base text-neutral-500 dark:text-neutral-400">
          {period}
        </p>
      </div>

      {/* <div className="mt-2 flex items-center justify-center text-orange-500 transition-colors group-hover:text-orange-400">
        <ArrowUpRight
          className="
            h-7 w-7
            transition-transform duration-300
            group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12
          "
          strokeWidth={2.5}
        />
      </div> */}
    </Wrapper>
  );
}
