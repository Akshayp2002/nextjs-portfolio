"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header style={styles.header}>
            <div style={styles.inner}>
                <Link href="/" style={styles.brand}>
                    MyPortfolio
                </Link>
                <Link href="/projects">Projects</Link>
                <nav style={styles.nav}>
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                style={{
                                    ...styles.link,
                                    ...(isActive ? styles.linkActive : {}),
                                }}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}

const styles: Record<string, React.CSSProperties> = {
    header: {
        position: "sticky",
        top: 0,
        background: "white",
        borderBottom: "1px solid #eee",
        zIndex: 10,
    },
    inner: {
        maxWidth: 1100,
        margin: "0 auto",
        padding: "14px 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
    },
    brand: { fontWeight: 800, textDecoration: "none", color: "#111" },
    nav: { display: "flex", gap: 10 },
    link: {
        textDecoration: "none",
        color: "#555",
        padding: "8px 10px",
        borderRadius: 10,
    },
    linkActive: {
        color: "#111",
        background: "#f2f2f2",
    },
};
