import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Bharat = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white text-center bg-gradient-to-b from-[#121212] to-[#1e1e1e] overflow-hidden">
      
      {/* 🔥 Soft Moving Golden Aura */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-[#FFD700] via-[#ffb300] to-[#ff9100] opacity-10 blur-[200px]"
        style={{
          transform: `translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px)`,
        }}
      />

      {/* ✨ Subtle Tricolor Ambient Layer */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,153,51,0.12),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(19,136,8,0.12),transparent_70%)]"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 🚀 Main Title */}
      <motion.h1
        className="text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff9933] via-[#FFD700] to-[#138808] drop-shadow-[0_0_35px_rgba(255,215,0,0.8)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        #CodeForBharat 🇮🇳
      </motion.h1>

      {/* 📜 Sanskrit Quote */}
      <motion.p
        className="mt-6 text-2xl lg:text-3xl text-[#f5e4b8] italic font-semibold leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        "संस्कृतेन सह भारतस्य नवयुगम्।"
      </motion.p>

      {/* 🌟 English Mission Subtitle */}
      <motion.p
        className="mt-3 text-lg lg:text-xl text-gray-300 font-medium tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Empowering Bharat through <span className="text-[#FFD700]">Code</span>,{" "}
        <span className="text-[#ff9933]">Culture</span> &{" "}
        <span className="text-[#138808]">Creativity</span>.
      </motion.p>

      {/* 🌸 Description / Tagline */}
      <motion.p
        className="mt-8 text-base lg:text-lg text-gray-400 max-w-3xl px-6 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        A movement uniting developers, designers, artists & innovators — 
        to digitally revive the timeless beauty of Bharat’s culture, temples & heritage.
      </motion.p>

      {/* 🔗 Buttons */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <button className="px-10 py-4 bg-[#FFD700] text-black font-extrabold rounded-lg shadow-lg shadow-[#FFD700]/40 hover:bg-[#ffb300] hover:scale-105 transition-all duration-300">
          Join the Revolution 🚀
        </button>
        <button className="px-10 py-4 border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-lg hover:bg-[#FFD700] hover:text-black transition-all duration-300">
          Learn More 🌏
        </button>
      </motion.div>

      {/* 🌅 Sanskrit Footer Aura */}
      <motion.div
        className="absolute bottom-10 text-[#f1e4a3] text-sm italic opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        "यत्र विज्ञानं तत्र भारतस्य तेजः।" — Where there is innovation, there shines Bharat.
      </motion.div>
    </div>
  );
};

export default Bharat;
