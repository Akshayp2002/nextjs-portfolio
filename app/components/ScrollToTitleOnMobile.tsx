"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function smoothScrollTo(targetY: number, duration = 900) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start: number | null = null;

  function easeInOutCubic(t: number) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp: number) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + diff * eased);

    if (elapsed < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export default function ScrollToTitleOnMobile() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    const timeout = setTimeout(() => {
      const el = document.getElementById("page-title");
      if (!el) return;

      const y =
        el.getBoundingClientRect().top +
        window.scrollY -
        90; // offset for navbar

      smoothScrollTo(y, 1000); // 👈 slow + smooth
    }, 120); // wait for layout

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}