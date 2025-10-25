import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[6vw] py-4 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-md bg-[#e6ebe9]/80 border-b border-[#c1c7c3]"
          : "bg-transparent"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* 🌿 Logo */}
      <motion.div
        className="flex items-center gap-3 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src="/bharatSymbol.png"
          alt="BharatDarshan"
          className="w-12 h-12 rounded-full shadow-[0_0_10px_#9ec3b5]"
        />
        <h1 className="text-2xl font-bold tracking-wide text-[#2b3a36] font-[Poppins]">
          Bharat<span className="text-[#6ea38e]">Darshan</span>
        </h1>
      </motion.div>

      {/* 🕊️ Desktop Links */}
      <ul className="hidden md:flex gap-10 text-[#2b3a36] font-medium tracking-wide">
        {["Home", "Temples", "Culture", "Festivals", "About"].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.08 }}
            className="relative group cursor-pointer"
          >
            <span className="group-hover:text-[#6ea38e] transition duration-300">
              {item}
            </span>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#6ea38e] group-hover:w-full transition-all duration-300"></span>
          </motion.li>
        ))}
      </ul>

      {/* 🌞 Explore Button */}
      <motion.a
        href="#discover"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block px-6 py-2 rounded-full bg-[#6ea38e] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
      >
        Discover Bharat
      </motion.a>

      {/* 📱 Mobile Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#2b3a36] text-3xl"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 📜 Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 right-0 h-full w-[70vw] bg-[#e6ebe9] flex flex-col items-center justify-center gap-8 text-[#2b3a36] text-xl md:hidden shadow-2xl border-l border-[#c1c7c3]"
      >
        {["Home", "Temples", "Culture", "Festivals", "About"].map((item) => (
          <motion.button
            key={item}
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.1, color: "#6ea38e" }}
            className="cursor-pointer hover:text-[#6ea38e] transition-all duration-300"
          >
            {item}
          </motion.button>
        ))}

        <motion.a
          href="#discover"
          whileHover={{ scale: 1.08 }}
          className="bg-[#6ea38e] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Discover Bharat
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar4;
