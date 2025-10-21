import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

const Hero2 = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-screen h-screen bg-[#121212] text-[#E0E0E0] px-[4vw] flex flex-col justify-center items-center text-center relative overflow-hidden bg-cover bg-center"
    >
      {/* ✨ Floating Golden Glows */}
      <motion.div
        className="absolute top-10 left-20 w-40 h-40 bg-[#d4af37] opacity-20 blur-3xl rounded-full"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-32 h-32 bg-[#d4af37] opacity-10 blur-2xl rounded-full"
        style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
      />

      {/* 🏛️ Elegant Name + Tagline */}
      <motion.h1
        className="text-[4vw] font-extrabold tracking-wide text-white leading-tight"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <TypeAnimation
          sequence={[
            "Designing Spaces That Inspire ✨", 2000,
            "Where Elegance Meets Comfort 🏛️", 2000,
            "Crafting Interiors with Soul 💫", 2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.h1>

      <motion.h2
        className="text-[2vw] mt-4 text-[#d4af37] font-semibold drop-shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Hi, I’m <span className="text-white">Aashish Vishwakarma</span> — Interior Designer
      </motion.h2>

      {/* 🪶 Description */}
      <motion.p
        className="mt-6 w-[55%] text-[1.2vw] text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        I create timeless interiors that blend art, architecture, and emotion.  
        From modern apartments to cultural spaces — my designs reflect simplicity, depth, and identity.
      </motion.p>

      {/* 🎯 Buttons */}
      <motion.div
        className="mt-[3vw] flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.a
          href="#projects"
          className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 hover:bg-[#b8922d] hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Creations 🪄
        </motion.a>

        <motion.a
          href="#contact"
          className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#d4af37] hover:text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let’s Collaborate 🤝
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero2;
