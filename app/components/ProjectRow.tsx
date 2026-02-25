import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

type ProjectRowProps = {
  name: string;
  description: string;
  image: string;
  date: string;
  view?: string | false;
  github?: string | false;
  status?: boolean;
};


export default function ProjectRow({
  name,
  description,
  image,
  date,
  view,
  github,
  status,
}: ProjectRowProps) {
  return (
    <div
      className="
        group flex items-start justify-between gap-8
        rounded-2xl
        bg-neutral-100/60 dark:bg-neutral-900/50
        hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70
        transition-colors duration-300
        p-6 mb-2
      "
    >
      {/* LEFT */}
      <div className="flex gap-6 max-w-3xl">
        {/* IMAGE — fixed size */}
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800">
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="h-full w-full object-cover"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col">
          <h3 className="text-xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
            {name}
          </h3>

          {/* description clamp */}
          <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-300 line-clamp-3">
            {description}
          </p>

          <div className="mt-3 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{date}</span>

            {status && (
              <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-600 dark:text-green-400">
                Active
              </span>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-3 pt-1">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="opacity-60 hover:opacity-100 transition"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        )}

        {view && (
          <a
            href={view}
            target="_blank"
            rel="noreferrer"
            aria-label="View project"
            className="
              text-orange-500
              transition-transform duration-300
              group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12
            "
          >
            <ArrowUpRight className="h-6 w-6" strokeWidth={2.5} />
          </a>
        )}
      </div>
    </div>
  );
}