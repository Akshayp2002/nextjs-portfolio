"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const size = 200; // h-50/w-50 = 200px
  return (
    <div
      className="pointer-events-none fixed z-[9999] h-50 w-50 rounded-full bg-gray-400/10 blur-2xl transition-all duration-200 ease-out"
      style={{ transform: `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)` }}
    />
  );
}