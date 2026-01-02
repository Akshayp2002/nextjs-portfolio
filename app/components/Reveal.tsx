"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  y = 24,
  amount = 0.15,                 // ✅ smaller => earlier trigger
  margin = "0px 0px -35% 0px",    // ✅ reveal around mid-screen
}: {
  children: React.ReactNode;
  y?: number;
  amount?: number;
  margin?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={
        reduce
          ? {}
          : {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
            }
      }
      viewport={{
        once: true,   // ✅ reveal once, no disappearing gaps
        amount,
        margin,
      }}
    >
      {children}
    </motion.div>
  );
}
