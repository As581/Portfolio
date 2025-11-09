import { motion } from "framer-motion"; import { useEffect, useMemo, useState } from "react"; import { Stars } from "lucide-react";

// --- Swadeshi: Ultra WOW Section --- // One-file, production-ready hero section for your portfolio. // Tailwind + Framer Motion. No external images needed. // Drop-in usage: <Swadeshi />

const floaters = [ { label: "Made in 🇮🇳", x: -220, y: -120 }, { label: "Local > Global", x: 200, y: -80 }, { label: "Aatmanirbhar", x: -240, y: 90 }, { label: "Desi Innovation", x: 210, y: 130 }, ];

const FeatureCard = ({ title, desc, i }) => ( <motion.div className="relative group rounded-2xl p-6 bg-white/5 border border-white/10 overflow-hidden shadow-xl backdrop-blur-sm" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.05 * i }}

> 

<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
  <div className="absolute -inset-1 bg-gradient-to-r from-[#ff4e4e]/20 via-[#ffb300]/20 to-transparent blur-2xl" />
</div>
<div className="flex items-center gap-3">
  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#ff4e4e] to-[#ffb300] grid place-items-center shadow-lg">
    <Stars className="h-5 w-5 text-black" />
  </div>
  <h3 className="text-lg font-bold tracking-wide">{title}</h3>
</div>
<p className="mt-3 text-sm text-white/70 leading-relaxed">{desc}</p>
<div className="mt-5 flex items-center gap-2 text-xs text-[#ffb300] font-semibold">
  Learn more
  <motion.span animate={{ x: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
    →
  </motion.span>
</div>

</motion.div> );

const ShineButton = ({ children, variant = "primary" }) => ( <motion.button whileTap={{ scale: 0.98 }} whileHover={{ y: -2 }} className={ variant === "primary" ? "relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-black bg-gradient-to-r from-[#ffb300] to-[#ff7a00] shadow-[0_10px_30px_rgba(255,140,0,0.25)] overflow-hidden" : "relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold border border-[#ffb300] text-[#ffb300] bg-black/20 backdrop-blur" }

> 

<span className="relative z-10">{children}</span>
<span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

</motion.button> );

const Swadeshi = () => { const [mouse, setMouse] = useState({ x: 0, y: 0 }); useEffect(() => { const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY }); window.addEventListener("mousemove", onMove); return () => window.removeEventListener("mousemove", onMove); }, []);

// Smooth parallax factors const glow = useMemo( () => ({ x: mouse.x * 0.02, y: mouse.y * 0.02 }), [mouse] );

return ( <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0b0b0b] via-[#0a0a0a] to-[#000] text-white"> {/* Aurora / Nebula */} <motion.div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[70vmax] w-[70vmax] -translate-x-1/2 rounded-full blur-[120px]" style={{ background: "radial-gradient(closest-side, rgba(255,78,78,0.35), transparent 60%), conic-gradient(from 180deg at 50% 50%, rgba(255,179,0,0.2), transparent 40%, rgba(255,78,78,0.18))", }} animate={{ rotate: [0, 10, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

{/* Mouse Glow */}
  <motion.div
    aria-hidden
    className="absolute h-[520px] w-[520px] rounded-full bg-[#ffb300] opacity-10 blur-[180px]"
    style={{ x: glow.x, y: glow.y }}
  />

  {/* Grid Overlay */}
  <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px]" />

  {/* Hero Content */}
  <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 pt-28 pb-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="text-center"
    >
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e4e] via-[#ff8a00] to-[#ffb300] drop-shadow-[0_0_30px_rgba(255,140,0,0.25)]"
      >
        #SwadeshiApp — Build, Use, Celebrate 🇮🇳
      </motion.h1>
      <motion.p
        className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-white/70"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
      >
        "स्वदेशी भावेन नव-भारत निर्माणम्।" — Create, adopt and champion
        Indian-made tech that carries our heritage forward.
      </motion.p>

      {/* Floating badges */}
      <div className="relative mt-8 flex items-center justify-center gap-3 sm:gap-6">
        {floaters.map((f, i) => (
          <motion.span
            key={f.label}
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 shadow-lg backdrop-blur"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 * i }}
          >
            {f.label}
          </motion.span>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className="group relative">
          <ShineButton>Start Swadeshi Journey 🚀</ShineButton>
        </div>
        <div className="group relative">
          <ShineButton variant="ghost">Explore Apps 🌍</ShineButton>
        </div>
      </motion.div>
    </motion.div>

    {/* Stats / Trust Section */}
    <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-5 text-center">
      {["Creators", "Projects", "Downloads", "Cities"].map((k, i) => (
        <motion.div
          key={k}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 * i }}
        >
          <div className="text-2xl sm:text-3xl font-extrabold text-[#ffb300]">{["10k+","150+","1M+","120+"][i]}</div>
          <div className="mt-1 text-xs sm:text-sm text-white/70">{k}</div>
        </motion.div>
      ))}
    </div>

    {/* Feature Grid */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      <FeatureCard
        i={0}
        title="Promote Desi Products"
        desc="Showcase Made-in-India apps & tools with pride. Give users a blazing-fast way to discover, adopt and share."
      />
      <FeatureCard
        i={1}
        title="Empower Local Businesses"
        desc="Simple onboarding, analytics & growth playbooks that help homegrown creators scale sustainably."
      />
      <FeatureCard
        i={2}
        title="Culture + Code"
        desc="Fonts, scripts & UI motifs inspired by Bharat — designed to look modern without losing the soul."
      />
    </div>

    {/* Gallery / Proof Section */}
    <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,78,78,0.25),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(255,179,0,0.25),transparent_50%)]" />
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 grid place-items-center text-sm font-semibold text-white/90">
            Coming Soon → Case Study #{i + 1}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Quote */}
    <motion.div
      className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="text-lg text-white/80 italic">
        “यत्र स्वाभिमानं तत्र उत्कर्षः — Where there is pride, greatness emerges.”
      </p>
    </motion.div>
  </div>

  {/* Footer */}
  <div className="relative z-10 pb-10 pt-4 text-center text-xs text-white/50">
    Built with ❤️ for Bharat • SwadeshiApp Section
  </div>
</div>

); };

export default Swadeshi;
