import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero3 = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-screen h-screen bg-[#121212] text-[#E0E0E0] flex flex-col justify-center items-center text-center relative overflow-hidden px-[5vw] sm:px-[3vw]"
    >
      {/* Floating Blur Effects */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-[#FFD700] opacity-20 blur-3xl rounded-full"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-[#FFD700] opacity-15 blur-2xl rounded-full"
        style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
      />

      {/* Animated Hero Title */}
      <motion.h1
        className="font-extrabold tracking-wide text-white text-[8vw] sm:text-[5vw] md:text-[4vw] leading-snug"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <TypeAnimation
          sequence={[
            "Design. Develop. Deliver.", 2000,
            "Creating Impact with Code.", 2000,
            "Innovate. Build. Inspire.", 2000,
          ]}
          wrapper="span"
          speed={45}
          repeat={Infinity}
        />
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="text-[#FFD700] drop-shadow-lg mt-4 text-[5vw] sm:text-[3vw] md:text-[2vw] font-semibold"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Full Stack Developer | Problem Solver
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-5 text-gray-400 leading-relaxed w-[90%] sm:w-[70%] md:w-[50%] text-[4vw] sm:text-[2.5vw] md:text-[1.3vw]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Building high-performance, visually stunning digital experiences that
        merge creativity with clean, optimized code.
      </motion.p>

      {/* Call to Action */}
      <motion.div
        className="mt-8 sm:mt-[3vw]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <motion.a
          href="/public/myClass2 (1).pdf"
          download
          className="relative inline-block px-10 py-3 text-white font-semibold text-[4vw] sm:text-[2vw] md:text-[1.2vw] rounded-full shadow-lg 
                     transition-all duration-300 ease-in-out overflow-hidden border border-[#FFD700] 
                     hover:bg-[#FFD700] hover:text-black"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero3;
