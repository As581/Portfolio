{/*import { motion } from "framer-motion";
import HeroTitle from './HeroTitle'
const Hero = () => {
  return (
    <div className="w-screen h-[100%]  bg-[#121212] text-[#E0E0E0] px-[4vw]">
      <div className="py-[15vw]">
       <HeroTitle />
      <motion.h2
        className="text-[3vw] mt-2 text-[#F1E24]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Full Stack Developer
      </motion.h2>
      <p className="mt-8 w-2/4 text-[1.3vw]">
        Passionate about building web applications and solving real-world problems with clean, efficient code.
      </p>
      <div className="mt-[3.7vw]">
              <motion.a
        href="/public/myClass2 (1).pdf"
        download
        className=" bg-[#ffff] text-black px-6 py-3 rounded-md font-semibold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download CV
      </motion.a>
      </div>

      </div>
    </div>
  );
};

export default Hero;
*/}
  
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-screen h-screen bg-[#121212] text-[#E0E0E0] 
      flex flex-col justify-center items-center text-center relative overflow-hidden px-[4vw]"
    >
      {/* Floating Blur Effects */}
      <motion.div
        className="absolute top-10 left-20 w-40 h-40 bg-[#F1E24] opacity-20 blur-3xl rounded-full sm:w-24 sm:h-24 sm:top-16 sm:left-10"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-32 h-32 bg-[#F1E24] opacity-15 blur-2xl rounded-full sm:w-20 sm:h-20 sm:right-10 sm:bottom-16"
        style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
      />

      {/* Animated Hero Title */}
      <motion.h1
        className="text-[4.5vw] sm:text-[7vw] font-extrabold tracking-wide text-white leading-snug"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <TypeAnimation
          sequence={[
            "Beyond the Code: Creating Impact", 2000,
            "Innovate. Build. Inspire.", 2000,
            "Crafting Digital Experiences.", 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="text-[2.5vw] sm:text-[5vw] mt-3 text-[#F1E24] drop-shadow-lg font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Full Stack Developer | UI/UX Enthusiast
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-6 w-[50%] sm:w-[90%] text-[1.3vw] sm:text-[4vw] text-gray-400 leading-relaxed sm:leading-snug"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Passionate about building high-performance web applications and solving
        real-world problems with clean, efficient code.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.div
        className="mt-[3.7vw] sm:mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.a
          href="/public/myClass2 (1).pdf"
          download
          className="relative inline-block px-10 py-3 sm:px-8 sm:py-3 text-black font-semibold 
          text-[1.2vw] sm:text-[4vw] rounded-full shadow-lg transition-all duration-300 ease-in-out 
          overflow-hidden bg-[#121212] hover:bg-white hover:text-black text-white border border-white"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;
