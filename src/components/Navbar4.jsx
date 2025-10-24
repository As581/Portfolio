import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for background appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 px-[5vw] py-4 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "bg-[#1a1a1a]/90 backdrop-blur-md shadow-md border-b border-[#f1e24]/20"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* 🇮🇳 Logo + Title */}
      <motion.div
        className="flex items-center gap-3 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src="/bharatlogo.png"
          alt="BharatDarshan Logo"
          className="w-12 h-12 rounded-full border-2 border-[#FACC15] shadow-md"
        />
        <h1 className="text-2xl font-extrabold text-[#FACC15] tracking-wider">
          Bharat<span className="text-white">Darshan</span>
        </h1>
      </motion.div>

      {/* 💫 Nav Links (Desktop) */}
      <ul className="hidden md:flex gap-10 text-[#E0E0E0] font-medium tracking-wide">
        {["Home", "Temples", "Gallery", "About", "Contact"].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1, color: "#FACC15" }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer hover:text-[#FACC15] transition-colors duration-300"
          >
            {item}
          </motion.li>
        ))}
      </ul>

      {/* 🔱 Call to Action Button */}
      <motion.a
        href="#explore"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:inline-block bg-gradient-to-r from-[#FACC15] to-[#d4ac0d] text-black font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-[#FACC15]/40 transition-all duration-300"
      >
        Explore Bharat
      </motion.a>

      {/* 📱 Mobile Menu Icon */}
      <button
        className="md:hidden text-[#FACC15] text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 📜 Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 right-0 h-full w-[70vw] bg-[#121212] flex flex-col items-center justify-center gap-8 text-xl text-[#E0E0E0] shadow-2xl md:hidden"
      >
        {["Home", "Temples", "Gallery", "About", "Contact"].map((item) => (
          <motion.button
            key={item}
            whileHover={{ scale: 1.1, color: "#FACC15" }}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:text-[#FACC15] transition-all duration-300"
          >
            {item}
          </motion.button>
        ))}

        <motion.a
          href="#explore"
          whileHover={{ scale: 1.1 }}
          className="bg-[#FACC15] text-black px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-[#FACC15]/40 transition"
        >
          Explore Bharat
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar4;
