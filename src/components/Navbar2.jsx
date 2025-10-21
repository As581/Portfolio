import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLenis } from "@studio-freight/react-lenis";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lenis = useLenis();
  const lastScrollY = useRef(0);

  // 🛠 Scroll Detection Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        setIsHidden(true); // Scroll Up → Hide Navbar (-y axis par chala jaye)
      } else {
        setIsHidden(false); // Scroll Down → Show Navbar
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔽 Lenis Scroll to Section Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      lenis?.scrollTo(section);
    } else {
      console.error(`Section with ID "${id}" not found!`);
    }
  };

  return (
    <motion.nav
      className={`w-full px-6 lg:px-[4vw] py-4 pb-[5px] mb-[5px] flex justify-between items-center fixed top-0 z-50 shadow-lg transition-transform duration-500 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ✅ Logo Section */}
      <div className="flex items-center text-[#F1E24] text-2xl font-bold">
        <img className="w-16 h-auto" src="/Logo.png" alt="Logo" />
      </div>

      {/* ✅ Navigation Links (Desktop) */}
      <ul className="hidden lg:flex space-x-8 text-[#E0E0E0] font-medium">
        {["about", "skills", "projects", "education", "contact"].map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollToSection(item)}
              className="cursor-pointer hover:text-[#F1E24] transition duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {/* ✅ Call to Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden lg:block bg-[#F1E24] text-[#F1E24] px-6 py-2 rounded-md font-semibold transition duration-300 hover:bg-[#e0c000]"
      >
        Call Us
      </motion.button>

      {/* ✅ Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-[#F1E24] text-2xl"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* ✅ Mobile Navigation Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 right-0 w-3/4 h-full bg-[#121212] flex flex-col items-center justify-center space-y-6 text-[#E0E0E0] text-lg font-medium shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Close Button inside Menu */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-2xl text-[#F1E24]"
        >
          <FaTimes />
        </button>

        {["about", "skills", "projects", "education", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="cursor-pointer hover:text-[#F1E24] transition duration-300"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar2;
