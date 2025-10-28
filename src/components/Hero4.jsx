import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero4 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center bg-[#e8f0ee]"
    >
      {/* 🌄 Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1593261735317-9ccba5a2a5b3?auto=format&fit=crop&w=2000&q=80"
          alt="Ancient Temple"
          className="w-full h-full object-cover brightness-90 scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000040] via-[#e8f0ee40] to-[#e8f0ee] backdrop-blur-[2px]"></div>
      </motion.div>

      {/* 🌟 Animated Light Rays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6ea38e10] via-transparent to-[#6ea38e10] animate-pulse"></div>

      {/* ✨ Floating Glowing Orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-[#6ea38e] rounded-full blur-3xl opacity-20"
          style={{
            width: Math.random() * 80 + 40,
            height: Math.random() * 80 + 40,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🪷 Floating Icons (Depth Effect) */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png"
        alt="lotus"
        className="absolute bottom-16 left-16 w-20 opacity-80"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/566/566031.png"
        alt="sun"
        className="absolute top-16 right-16 w-20 opacity-80"
        animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* 🌸 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-20 px-6 max-w-5xl text-center"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-[#2b3a36] font-[Poppins] drop-shadow-[0_3px_6px_rgba(0,0,0,0.2)]"
        >
          Discover the{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="bg-gradient-to-r from-[#6ea38e] to-[#4c8b73] bg-clip-text text-transparent"
          >
            Soul
          </motion.span>{" "}
          of Bharat
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="mt-6 text-lg md:text-xl lg:text-2xl text-[#3f4d48] font-medium leading-relaxed max-w-3xl mx-auto"
        >
          Immerse yourself in timeless temples, living traditions, and divine heritage — 
          where every stone whispers stories of faith, art, and eternity.
        </motion.p>

        {/* ⚡ CTA Button */}
        <motion.a
          href="#temples"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(110,163,142,0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="inline-block mt-10 px-12 py-4 rounded-full bg-[#6ea38e] text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 tracking-wide"
        >
          Begin Your Darshan
        </motion.a>
      </motion.div>

      {/* 🌅 Gradient Glow at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#d8e3df] via-[#e8f0ee]/30 to-transparent"></div>
    </section>
  );
};

export default Hero4;
