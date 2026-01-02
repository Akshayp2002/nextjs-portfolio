import {
  Linkedin,
  Flame,
  LucideGithub,
  InstagramIcon,
  Globe,
} from "lucide-react";
const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dev-akshay-p", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Akshayp2002", icon: LucideGithub },
  { label: "Instagram", href: "https://www.instagram.com/aks.haay_/", icon: InstagramIcon },
  { label: "Portfolio", href: "https://devakshay.vercel.app/home", icon: Globe },
];

<div className="mt-8 flex items-center justify-center gap-6">
  {socials.map((s) => (
    <a
      key={s.label}
      href={s.href}
      target="_blank"
      rel="noreferrer"
      aria-label={s.label}
      title={s.label}
      className="grid h-11 w-11 place-items-center rounded-full transition hover:scale-110"
    >
      {/* keep your icon component here */}
    </a>
  ))}
</div>

export default function ProfileCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
      {/* dotted arc (top) */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full border-[4px] border-dashed border-gray-300 opacity-90" />

      <div className="p-7">
        {/* image frame */}
        <div className="rounded-3xl bg-white p-4">
          <div className="aspect-square overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=70"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* name */}
        <h2 className="mt-7 text-center text-4xl font-black tracking-tight text-zinc-900">
          Akshay P
        </h2>

        {/* flame badge + dotted arc */}
        <div className="relative mt-6 flex items-center justify-center">
          <div className="pointer-events-none absolute -left-12 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border-[4px] border-dashed border-gray-300 opacity-90" />

          {/* <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-gray-500 text-white shadow">
            <Flame size={22} strokeWidth={2.5} />
          </div> */}
        </div>

        {/* description */}
        <p className="mt-6 text-center text-lg leading-snug text-zinc-500">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        {/* socials */}
        <div className="mt-8 flex items-center justify-center gap-6">
          {socials.map(({ label, href, icon: Icon }) => (
            <SocialIcon key={label} label={label} href={href}>
              <Icon size={22} strokeWidth={2.2} />
            </SocialIcon>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialIcon({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="
        relative z-20
        grid h-11 w-11 place-items-center rounded-full
        text-gray-500
        transition
        hover:scale-110 hover:text-black
      "
    >
      {children}
    </a>
  );
}

