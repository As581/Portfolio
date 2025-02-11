import { motion } from "framer-motion";

const HeroTitle = ({ text }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {text.split(" ").map((word, wordIndex) => (
        <div key={wordIndex} className="flex">
          {word.split("").map((char, index) => (
            <motion.span
              key={index}
              className="text-[#F1E24] font-bold"
              style={{
                fontSize: "clamp(3rem, 5vw, 6rem)", // Responsive font size
                textShadow: "0px 0px 10px rgba(241, 226, 36, 0.8)", // Glow effect
              }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: (wordIndex * 0.5) + (index * 0.1), // Stagger effect
                ease: "easeOut",
                type: "spring",
                stiffness: 80,
              }}
            >
              {char}
            </motion.span>
          ))}
          <span className="w-[0.8vw]"></span> {/* Space between words */}
        </div>
      ))}
    </div>
  );
};

export default HeroTitle;




