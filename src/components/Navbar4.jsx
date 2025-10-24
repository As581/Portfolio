import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[6vw] py-4 transition-all duration-700 ${
        scrolled
          ? "bg-[#2B0A0A]/95 backdrop-blur-md border-b border-[#FFD700]/30 shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* 🔱 BharatDarshan Logo */}
      <motion.div
        className="flex items-center gap-3 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src="/templelogo.png"
          alt="BharatDarshan Logo"
          className="w-12 h-12 rounded-full border-2 border-[#FFD700] shadow-[0_0_10px_#FFD70055]"
        />
        <h1 className="text-2xl font-extrabold text-[#FFD700] tracking-wider font-serif">
          Bharat<span className="text-[#FFF]">Darshan</span>
        </h1>
      </motion.div>

      {/* 🌟 Desktop Links */}
      <ul className="hidden md:flex gap-10 text-[#FFF] font-medium tracking-wide">
        {["Home", "Temples", "Culture", "History", "Contact"].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1 }}
            className="relative cursor-pointer group"
          >
            <span className="group-hover:text-[#FFD700] transition duration-300">
              {item}
            </span>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
          </motion.li>
        ))}
      </ul>

      {/* ✨ Explore Button */}
      <motion.a
        href="#explore"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#d6b300] text-[#2B0A0A] font-semibold shadow-[0_0_10px_#FFD70055] hover:shadow-[0_0_20px_#FFD70099] transition-all duration-300"
      >
        Explore Temples
      </motion.a>

      {/* 📱 Mobile Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#FFD700] text-3xl"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 📜 Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 right-0 h-full w-[70vw] bg-[#2B0A0A] flex flex-col items-center justify-center gap-8 text-[#FFF] text-xl md:hidden border-l border-[#FFD700]/30 shadow-lg"
      >
        {["Home", "Temples", "Culture", "History", "Contact"].map((item) => (
          <motion.button
            key={item}
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.1, color: "#FFD700" }}
            className="cursor-pointer hover:text-[#FFD700] transition-all duration-300"
          >
            {item}
          </motion.button>
        ))}

        <motion.a
          href="#explore"
          whileHover={{ scale: 1.08 }}
          className="bg-[#FFD700] text-[#2B0A0A] px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-[#FFD700]/40 transition-all"
        >
          Explore Temples
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar4;
