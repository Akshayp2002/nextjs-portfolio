"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    Home,
    FolderKanban,
    BarChart3,
    Wrench,
    Pencil,
} from "lucide-react";

const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: FolderKanban },
    { href: "/experience", label: "Experience", icon: BarChart3 },
    { href: "/tools", label: "Tools", icon: Wrench },
    // { href: "/blog", label: "Blog", icon: Pencil },
];
export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 w-full z-[1000]">
            {/* full-width header area */}
            <div className="mx-auto max-w-5xl px-4 py-3 flex justify-center">
                <nav
                    className="
            flex items-center gap-2 rounded-full px-3 py-2
            bg-zinc-900/80 text-white shadow-lg
            ring-1 ring-white/10
            backdrop-blur-md
            dark:bg-zinc-950/70"
                >
                    {navItems.map((item) => {
                        const active = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-label={item.label}
                                className="
                  group relative grid place-items-center
                  h-11 w-11 rounded-full
                  text-white/70 hover:text-white
                  transition
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                "
                            >
                                {/* Active bubble (moves smoothly) */}
                                {active && (
                                    <motion.span
                                        layoutId="activeBubble"
                                        className="
                      absolute inset-1 rounded-full
                      bg-white/95
                      shadow
                      dark:bg-white
                    "
                                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                    />
                                )}

                                {/* icon above bubble */}
                                <Icon
                                    className={`
                    relative z-10 h-5 w-5
                    ${active ? "text-zinc-900" : "text-white/80"}
                  `}
                                />

                                {/* Tooltip */}
                                <span
                                    className="
                    pointer-events-none absolute top-[52px] left-1/2 -translate-x-1/2
                    rounded-lg px-2 py-1 text-xs
                    bg-zinc-900 text-white
                    ring-1 ring-white/10
                    opacity-0 translate-y-[-4px]
                    transition
                    group-hover:opacity-100 group-hover:translate-y-0
                    dark:bg-zinc-950
                  "
                                >
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
