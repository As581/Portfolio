// HeroUltra.jsx
import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

/**
 * Ultra-premium Hero for "Soul of Bharat"
 * - Mouse parallax: moves layers subtly with cursor
 * - Scroll parallax: background shifts on scroll
 * - Floating particles (divs) + light rays
 * - Layered SVG silhouette for depth
 *
 * Usage: <HeroUltra />
 *
 * Requirements:
 * - TailwindCSS
 * - framer-motion
 * - Include "Poppins" font (or change to your preferred font)
 */

const NUM_PARTICLES = 12;

const Hero4 = () => {
  const containerRef = useRef(null);

  // mouse position motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // scroll parallax
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ["0%", "15%"]);

  // small transforms derived from mouse for different layers
  const slowX = useTransform(mouseX, (v) => `${v * 0.02}px`);
  const slowY = useTransform(mouseY, (v) => `${v * 0.02}px`);
  const midX = useTransform(mouseX, (v) => `${v * 0.04}px`);
  const midY = useTransform(mouseY, (v) => `${v * 0.04}px`);
  const fastX = useTransform(mouseX, (v) => `${v * 0.08}px`);
  const fastY = useTransform(mouseY, (v) => `${v * 0.08}px`);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      // normalized -50..50
      const nx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const ny = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      mouseX.set(nx * 30); // scale
      mouseY.set(ny * 30);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("touchmove", handleMove, { passive: true });

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("touchmove", handleMove);
    };
  }, [mouseX, mouseY]);

  // helper to produce particle styles
  const particles = Array.from({ length: NUM_PARTICLES }).map((_, i) => {
    const size = 8 + Math.round(Math.random() * 36);
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 5;
    const dur = 6 + Math.random() * 6;
    const opacity = 0.05 + Math.random() * 0.18;
    return { id: i, size, left, top, delay, dur, opacity };
  });

  return (
    <section
      ref={containerRef}
      aria-label="Hero - Experience the Soul of Bharat"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#eef3f1] via-[#e7efec] to-[#dfe9e6]"
    >
      {/* Background image layer (slowest, scroll-parallax) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <picture>
          {/* you can replace these with optimized local / CDN images */}
          <source
            srcSet="https://images.unsplash.com/photo-1593261735317-9ccba5a2a5b3?auto=format&fit=crop&w=2400&q=80"
            media="(min-width: 768px)"
          />
          <img
            src="https://images.unsplash.com/photo-1593261735317-9ccba5a2a5b3?auto=format&fit=crop&w=1200&q=80"
            alt="Ancient temple background"
            className="w-full h-full object-cover object-center brightness-90 scale-[1.06] blur-[0px]"
            loading="eager"
            draggable="false"
          />
        </picture>

        {/* soft cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b0b09] to-[#0b0b0b10] mix-blend-overlay" />
      </motion.div>

      {/* Light rays & subtle vignette */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#ffffff50,_transparent_25%)] mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#00000025,_transparent_30%)] opacity-30" />
      </div>

      {/* Floating blurred glowing orbs (depth) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0, p.opacity, 0.02],
              y: [0, -18 - Math.random() * 30, 0],
              x: [0, 8 - Math.random() * 16, 0],
            }}
            transition={{
              delay: p.delay,
              duration: p.dur,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              borderRadius: "9999px",
              background: "linear-gradient(180deg, rgba(110,163,142,0.9), rgba(76,139,115,0.8))",
              filter: "blur(14px)",
            }}
            className="absolute"
          />
        ))}
      </div>

      {/* MIDGROUND: temple silhouette ribbon (parallax with mouse) */}
      <motion.div
        style={{ x: midX, y: midY }}
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-[20%] pointer-events-none w-[110%] max-w-none"
      >
        {/* Simple stylized SVG silhouette - replace with your custom if you want more detail */}
        <svg
          viewBox="0 0 1600 160"
          className="w-full h-[160px] opacity-95"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="sil" x1="0" x2="1">
              <stop offset="0%" stopColor="#0a0a0a" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#0a0a0a" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.06" />
            </linearGradient>
            <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>

          <g transform="translate(0,10)">
            <path
              d="M0 120 C200 20, 400 20, 600 120 C800 220, 1000 220, 1200 120 C1400 20, 1600 30, 1600 120 L1600 160 L0 160 Z"
              fill="url(#sil)"
              filter="url(#soft)"
            />
            {/* small temple peaks */}
            <g transform="translate(200,-40) scale(0.9)">
              <rect x="120" y="50" width="18" height="40" rx="3" fill="#0b0b0b16" />
              <polygon points="129,30 110,60 148,60" fill="#0b0b0b22" />
            </g>
            <g transform="translate(700,-62) scale(1)">
              <rect x="120" y="50" width="20" height="50" rx="3" fill="#0b0b0b18" />
              <polygon points="130,20 106,60 154,60" fill="#0b0b0b24" />
            </g>
          </g>
        </svg>
      </motion.div>

      {/* FOREGROUND: main content (fastest move with mouse) */}
      <motion.div
        style={{ x: fastX, y: fastY }}
        className="relative z-30 px-6 max-w-4xl text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight font-[Poppins] text-[#12221d] drop-shadow-[0_6px_20px_rgba(0,0,0,0.18)]"
        >
          Experience the{" "}
          <motion.span
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.9 }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#6ea38e] to-[#3b8068]"
          >
            Soul
          </motion.span>{" "}
          of Bharat
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#2f403a] max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Ancient temples, living traditions & sacred stories — curated journeys that
          let you feel the heartbeat of India. Step in, explore, and be moved.
        </motion.p>

        {/* CTA group with micro interactions */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <motion.a
            href="#temples"
            whileHover={{ scale: 1.06, rotate: -0.5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#66a785] via-[#5e9a74] to-[#3b8068] text-white font-semibold text-base sm:text-lg shadow-[0_12px_30px_rgba(54,88,73,0.18)] hover:shadow-[0_18px_50px_rgba(54,88,73,0.22)] focus:outline-none focus:ring-4 focus:ring-[#6ea38e66]"
            aria-label="Begin Your Darshan"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Begin Your Darshan
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="px-4 py-2 rounded-full border border-[#375b4f22] bg-white/60 backdrop-blur-sm text-[#284033] font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#6ea38e33]"
            aria-label="Play intro"
            onClick={() => {
              // subtle micro animation trigger — for demo, we can create an entry animation or open modal
              // Here we simply flash a small pulse using document
              const el = document.createElement("div");
              el.style.position = "fixed";
              el.style.left = "50%";
              el.style.top = "50%";
              el.style.transform = "translate(-50%,-50%)";
              el.style.width = "200px";
              el.style.height = "200px";
              el.style.borderRadius = "999px";
              el.style.background = "radial-gradient(circle,#ffffff55,#ffffff00)";
              el.style.pointerEvents = "none";
              el.style.zIndex = "9999";
              document.body.appendChild(el);
              setTimeout(() => el.remove(), 700);
            }}
          >
            ▶ Watch Intro
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom soft gradient to ground the hero */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#dbe6e2] via-transparent to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero4;
