import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Swadeshi = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white text-center bg-gradient-to-b from-[#0f0f0f] via-[#111] to-[#0c0c0c] overflow-hidden px-4 sm:px-8">
      <motion.div
        className="absolute w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-[#ff4e4e] opacity-20 blur-[160px] sm:blur-[220px] will-change-transform"
        style={{
          transform: `translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px)`,
        }}
      />

      <motion.h1
        className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e4e] to-[#ffb300] drop-shadow-[0_0_25px_rgba(255,100,100,0.4)]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        #SwadeshiApp 🇮🇳
      </motion.h1>

      <motion.p
        className="mt-6 text-base sm:text-lg lg:text-2xl text-gray-300 italic font-medium leading-relaxed max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        "स्वदेशी भावेन नव-भारत निर्माणम्।"
        <br />
        <span className="text-[#ffb300] font-semibold block mt-1">
          (Reviving Bharat by creating and using our own apps)
        </span>
      </motion.p>

      <motion.p
        className="mt-6 text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl sm:max-w-2xl leading-relaxed px-2 sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        A powerful step towards Atmanirbhar Bharat — promote, build and use homegrown
        tech that celebrates our identity, culture and innovation.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <button className="px-8 sm:px-10 py-3 sm:py-4 bg-[#ff4e4e] text-black font-bold rounded-lg shadow-lg hover:bg-[#e54545] hover:scale-105 transition-all duration-300 text-sm sm:text-base">
          Start Swadeshi Journey 🚀
        </button>
        <button className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-[#ff4e4e] text-[#ff4e4e] font-bold rounded-lg hover:bg-[#ff4e4e] hover:text-black transition-all duration-300 text-sm sm:text-base">
          Explore Apps 🌍
        </button>
      </motion.div>

      <motion.div
        className="absolute bottom-6 sm:bottom-10 text-gray-400 text-xs sm:text-sm italic px-3 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        "यत्र स्वाभिमानं तत्र उत्कर्षः।" — Where there is pride, greatness emerges.
      </motion.div>
    </div>
  );
};

export default Swadeshi;
