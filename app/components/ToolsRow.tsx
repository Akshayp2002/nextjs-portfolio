type ToolsRowProps = {
  name: string;
  subtitle: string;
  iconSrc: string;
  active?: boolean;
};

export default function ToolsRow({
  name,
  subtitle,
  iconSrc,
  active = false,
}: ToolsRowProps) {
  return (
    <div
      className={[
        "flex items-center gap-5 rounded-2xl p-6 transition-colors duration-300",
        // base background
        "bg-neutral-100/60 dark:bg-neutral-900/50",
        // hover
        "hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70",
        // active (optional highlight)
        active ? "bg-neutral-200/80 dark:bg-neutral-800/80" : "",
      ].join(" ")}
    >
      {/* icon tile */}
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white dark:bg-white-950">
        <img
          src={iconSrc}
          alt={name}
          className="h-8 w-8 object-contain"
        />
      </div>

      {/* text */}
      <div className="min-w-0">
        <div className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
          {name}
        </div>
        <div className="mt-1 text-base text-neutral-600 dark:text-neutral-400">
          {subtitle}
        </div>
      </div>
    </div>
  );
}
