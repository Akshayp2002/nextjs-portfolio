"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Home, FolderKanban, BarChart3, Wrench, MailCheck } from "lucide-react";

const navItems = [
  { href: "/",           label: "Home",       icon: Home,         section: "home" },
  { href: "/projects",   label: "Projects",   icon: FolderKanban, section: "projects" },
  { href: "/experience", label: "Experience", icon: BarChart3,    section: "experience" },
  { href: "/tools",      label: "Tools",      icon: Wrench,       section: "tools" },
  { href: "/contact",    label: "Contact",    icon: MailCheck,    section: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // ✅ On other pages, highlight the matching nav icon
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    // ✅ When landing/returning to home, always start at "home"
    setActiveSection("home");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10% 0px -85% 0px",
        threshold: 0,
      }
    );

    ["home", "projects", "experience", "tools", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-[1000]">
      <div className="mx-auto max-w-5xl px-4 py-3 flex justify-center">
        <nav className="flex items-center gap-2 rounded-full px-3 py-2
          bg-zinc-900/80 text-white shadow-lg ring-1 ring-white/10
          backdrop-blur-md dark:bg-zinc-950/70">
          {navItems.map((item) => {
            const active =
              pathname === "/"
                ? activeSection === item.section
                : pathname === item.href;

            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className="group relative grid place-items-center
                  h-11 w-11 rounded-full text-white/70 hover:text-white
                  transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                {active && (
                  <motion.span
                    layoutId="activeBubble"
                    className="absolute inset-1 rounded-full bg-white/95 shadow dark:bg-white"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <Icon className={`relative z-10 h-5 w-5 ${active ? "text-zinc-900" : "text-white/80"}`} />
                <span className="pointer-events-none absolute top-[52px] left-1/2 -translate-x-1/2
                  rounded-lg px-2 py-1 text-xs bg-zinc-900 text-white ring-1 ring-white/10
                  opacity-0 translate-y-[-4px] transition
                  group-hover:opacity-100 group-hover:translate-y-0 dark:bg-zinc-950">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}