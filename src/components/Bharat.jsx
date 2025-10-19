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
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white text-center bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#0e0e0e] overflow-hidden">
      
      {/* ✨ Subtle Moving Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-[#FFD700] opacity-5 blur-[200px]"
        style={{
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
        }}
      />

      {/* 🚀 Title */}
      <motion.h1
        className="text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ff9100] drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        #CodeForBharat 🇮🇳
      </motion.h1>

      {/* 📜 Sanskrit Quote */}
      <motion.p
        className="mt-6 text-xl lg:text-2xl text-gray-300 italic font-medium leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        "संस्कृतेन सह भारतस्य नवयुगम्।"
        <br />
        <span className="text-[#FFD700] font-semibold">
          (Empowering Bharat through Code, Culture & Creativity)
        </span>
      </motion.p>

      {/* 🌸 Description */}
      <motion.p
        className="mt-6 text-lg lg:text-xl text-gray-400 max-w-3xl px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        A digital movement uniting developers, designers, animators & storytellers — 
        to revive India’s ancient temples, languages & heritage through innovation.
      </motion.p>

      {/* 🔗 Buttons */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <button className="px-10 py-4 bg-[#FFD700] text-black font-bold rounded-lg shadow-lg hover:bg-[#e0c000] hover:scale-105 transition-all duration-300">
          Join the Revolution 🚀
        </button>
        <button className="px-10 py-4 border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-lg hover:bg-[#FFD700] hover:text-black transition-all duration-300">
          Learn More 🌏
        </button>
      </motion.div>

      {/* 🌅 Footer Sanskrit */}
      <motion.div
        className="absolute bottom-10 text-gray-400 text-sm italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        "यत्र विज्ञानं तत्र भारतस्य तेजः।" — Where there is innovation, there shines Bharat.
      </motion.div>
    </div>
  );
};

export default Bharat;
