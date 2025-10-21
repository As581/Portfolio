import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLenis } from "@studio-freight/react-lenis";

const Navbar3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lenis = useLenis();
  const lastScrollY = useRef(0);

  // 🔹 Scroll Detection for BG + Hide Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Background logic
      setHasScrolled(currentY > 20);

      // Hide/show logic
      if (currentY < lastScrollY.current) setIsHidden(true);
      else setIsHidden(false);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Smooth Scroll Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      lenis?.scrollTo(section);
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full px-6 lg:px-[4vw] py-4 flex justify-between items-center z-50 transition-all duration-500 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${
        hasScrolled
          ? "bg-[#121212]/85 backdrop-blur-md border-b border-[#1f1f1f] shadow-md"
          : "bg-transparent border-none"
      }`}
    >
      {/* ✅ Logo */}
      <div className="flex items-center">
        <img
          src="/Logo.png"
          alt="Logo"
          className="w-14 h-auto cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* ✅ Desktop Menu */}
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

      {/* ✅ Contact Button */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden lg:inline-block bg-[#FFD700] text-black px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:shadow-[0_0_15px_#FFD700]"
      >
        Contact Me
      </motion.a>

      {/* ✅ Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="lg:hidden text-[#FFD700] text-3xl"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* ✅ Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-screen bg-[#121212]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-10 text-[#E0E0E0] text-2xl font-semibold shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-6 text-3xl text-[#FFD700]"
            >
              <FaTimes />
            </button>

            {/* Menu Links */}
            {["about", "skills", "projects", "education", "contact"].map(
              (item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative cursor-pointer hover:text-[#FFD700] transition duration-300"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              )
            )}

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-gradient-to-r from-[#FFD700] to-[#e0c000] text-black px-10 py-3 rounded-full font-bold text-xl hover:shadow-[0_0_25px_#FFD700]"
            >
              Let’s Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar3;
