"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabase";
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
  const [clicked, setClicked] = useState(false);
  const [fireFlies, setFireFlies] = useState<Array<{id:number, angle:number, delay:number, swirl:number}>>([]);
  const [fireFlyId, setFireFlyId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [userCount, setUserCount] = useState<number|null>(null);
  const [showUserCount, setShowUserCount] = useState(false);


  // Get user IP for unique identification
  const [userId, setUserId] = useState<string | null>(null);
  useEffect(() => {
    async function fetchIp() {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        setUserId(data.ip);
      } catch {
        // fallback to random if IP fails
        let fallback = localStorage.getItem("flame_user_id");
        if (!fallback) {
          fallback = crypto.randomUUID();
          localStorage.setItem("flame_user_id", fallback);
        }
        setUserId(fallback);
      }
    }
    fetchIp();
  }, []);

  // Handler for flame click (unique per user, but animation always)
  const handleFlameClick = async () => {
    if (!userId || loading) return;
    setClicked(true);
    // Fire-fly burst animation (interactive)
    const NUM_FLIES = 7;
    const flies = Array.from({length: NUM_FLIES}, (_, i) => ({
      id: fireFlyId + i,
      angle: (i * 360) / NUM_FLIES + (Math.random() - 0.5) * 20,
      delay: 0.05 * i + Math.random() * 0.08,
      swirl: 80 + Math.random() * 40,
    }));
    setFireFlies((prev) => [...prev, ...flies]);
    setFireFlyId((id) => id + NUM_FLIES);
    setTimeout(() => setClicked(false), 400);
    setTimeout(() => setFireFlies((prev) => prev.slice(NUM_FLIES)), 1200);
    setLoading(true);
    try {
      // Try to increment click_count for this user
      let { error } = await supabase.rpc('increment_flame_click', { user_id_input: userId });
      // If function doesn't exist or fails, fallback to manual logic
      if (error) {
        // Try to fetch user row
        const { data, error: fetchErr } = await supabase
          .from("flame_interactions")
          .select("click_count")
          .eq("user_id", userId)
          .single();
        if (!fetchErr && data) {
          // Row exists, increment click_count
          await supabase
            .from("flame_interactions")
            .update({ click_count: (data.click_count || 0) + 1 })
            .eq("user_id", userId);
        } else {
          // Row does not exist, insert new
          await supabase
            .from("flame_interactions")
            .insert([{ user_id: userId, click_count: 1 }]);
        }
      }
      // Get the count of unique users
      const { count } = await supabase
        .from("flame_interactions")
        .select("user_id", { count: "exact", head: true });
      setUserCount(count ?? null);
      setShowUserCount(true);
      setTimeout(() => setShowUserCount(false), 1800);
    } catch (e) {
      // Optionally handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
      {/* dotted arc (top) */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full border-[4px] border-dashed border-orange-300 opacity-90" />

      <div className="p-7">
        {/* image frame */}
        <div className="rounded-3xl bg-white p-4">
          <div className="aspect-square overflow-hidden rounded-3xl">
            <div className="transition-all duration-300">
              <Image
                src="/img/1000099992.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="h-full w-full object-cover grayscale-[90%] hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
          </div>
        </div>

        {/* name */}
        <h2 className="mt-7 text-center text-4xl font-black tracking-tight text-zinc-900">
          Akshay P
        </h2>

        {/* flame badge + dotted arc */}
        <div className="relative mt-6 flex items-center justify-center">
          <div className="pointer-events-none absolute -left-12 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border-[4px] border-dashed border-gray-300 opacity-90" />

          <div className="relative z-10">
            <button
              type="button"
              aria-label="Show your flame!"
              onClick={handleFlameClick}
              disabled={loading}
              className={`grid h-12 w-12 place-items-center rounded-full bg-orange-500 text-white shadow transition-all duration-300 active:scale-95 ${clicked ? "ring-4 ring-orange-400" : ""}`}
              style={{ cursor: loading ? "wait" : "pointer" }}
            >
              <Flame size={22} strokeWidth={2.5} />
            </button>
            <AnimatePresence>
              {fireFlies.map(({id, angle, delay, swirl}) => {
                // Interactive, playful wind path
                const swirlAngle = angle + 30 * Math.sin(angle * Math.PI / 90);
                const swirlX = swirl * Math.cos((swirlAngle * Math.PI) / 180);
                const swirlY = swirl * Math.sin((swirlAngle * Math.PI) / 180) + 20 * Math.sin(angle * Math.PI / 45);
                return (
                  <motion.div
                    key={id}
                    initial={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
                    animate={{
                      opacity: 0,
                      x: swirlX,
                      y: swirlY,
                      scale: 0.7,
                      rotate: 30 * Math.sin(angle * Math.PI / 45),
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.1, ease: "easeOut", delay }}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      marginLeft: -12,
                      marginTop: -12,
                      pointerEvents: "none",
                    }}
                  >
                    <Flame size={22} strokeWidth={2} className="text-orange-500 saturate-200 drop-shadow-[0_0_8px_#ff9800]" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* description */}
        <p className="mt-6 text-center text-lg leading-snug text-zinc-500">
          A Software Engineer who has developed countless innovative solutions.
          {/* {showUserCount && userCount !== null && (
            // <span className="block mt-2 text-sm text-orange-500 font-semibold">👤 {userCount} unique users interacted</span>
          )} */}
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
        hover:scale-110 hover:text-orange-500
      "
    >
      {children}
    </a>
  );
}

