import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLenis } from "@studio-freight/react-lenis";

const Navbar3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lenis = useLenis();
  const lastScrollY = useRef(0);

  // 🧭 Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current < lastScrollY.current) setIsHidden(true);
      else setIsHidden(false);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔽 Scroll to section (Lenis)
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      lenis?.scrollTo(section);
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className={`w-full px-6 lg:px-[4vw] py-4 flex justify-between items-center fixed top-0 z-50 bg-[#121212]/80 backdrop-blur-md transition-transform duration-500 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } shadow-md`}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {/* ✅ Logo */}
      <div className="flex items-center space-x-2 text-[#FFD700] font-extrabold text-2xl cursor-pointer">
        <img src="/Logo.png" alt="Logo" className="w-14 h-auto" />
        <span className="hidden sm:block tracking-wide">CodeForBharat</span>
      </div>

      {/* ✅ Desktop Nav */}
      <ul className="hidden lg:flex space-x-8 text-[#E0E0E0] font-medium">
        {["about", "skills", "projects", "education", "contact"].map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollToSection(item)}
              className="relative group cursor-pointer transition duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
        ))}
      </ul>

      {/* ✅ CTA Button */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden lg:inline-block bg-gradient-to-r from-[#FFD700] to-[#e0c000] text-black px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:shadow-[0_0_15px_#FFD700]"
      >
        Contact Me
      </motion.a>

      {/* ✅ Mobile Menu Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-[#FFD700] text-3xl z-[60]"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* ✅ Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed top-0 right-0 w-3/4 h-full bg-[#121212]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 text-[#E0E0E0] text-lg font-medium shadow-2xl ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* ✖ Close Icon */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-3xl text-[#FFD700]"
        >
          <FaTimes />
        </button>

        {["about", "skills", "projects", "education", "contact"].map((item) => (
          <motion.button
            key={item}
            onClick={() => scrollToSection(item)}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer hover:text-[#FFD700] transition duration-300 text-[5vw] sm:text-[3vw]"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </motion.button>
        ))}

        {/* Mobile CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="mt-6 bg-gradient-to-r from-[#FFD700] to-[#e0c000] text-black px-10 py-3 rounded-full font-bold text-[4vw] sm:text-[2vw] hover:shadow-[0_0_20px_#FFD700]"
        >
          Let’s Talk
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar3;
