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
  // Dynamic blur positions
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <div
  className="w-screen h-screen bg-[#121212]  text-[#E0E0E0] px-[4vw] flex flex-col justify-center items-center text-center relative overflow-hidden bg-cover bg-center">
      
      {/* Floating Blur Effects with Parallax */}
      <motion.div
        className="absolute top-10 left-20 w-40 h-40 bg-[#F1E24] opacity-20 blur-3xl rounded-full"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-32 h-32 bg-[#F1E24] opacity-15 blur-2xl rounded-full"
        style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
      />

      {/* Animated Hero Title with Typewriter Effect */}
      <motion.h1
        className="text-[4.5vw] font-extrabold tracking-wide text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <TypeAnimation
          sequence={[
            "Beyond the Code: Creating Impact", 2000,
            "Innovate. Build. Inspire.", 2000,
            "Crafting Digital Experiences.", 2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.h1>

      {/* Sub-title with Glow Effect */}
      <motion.h2
        className="text-[2.5vw] mt-2 text-[#F1E24] drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Full Stack Developer | UI/UX Enthusiast
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-6 w-[50%] text-[1.3vw] text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Passionate about building high-performance web applications and solving
        real-world problems with clean, efficient code.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.div
        className="mt-[3.7vw]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.a
          href="/public/myClass2 (1).pdf"
          download
          className="bg-gradient-to-r from-[#F1E24] to-yellow-500 text-black px-8 py-3 rounded-full font-semibold text-lg shadow-lg relative group overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
          {/* Shine Effect */}
          <span className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-md"></span>
        </motion.a>
      </motion.div>
    </div>
  );
};


export default Hero;


