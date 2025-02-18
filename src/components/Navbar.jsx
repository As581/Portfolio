/*import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <motion.nav
      className="w-full px-[4vw] py-[3vw] flex justify-between items-center fixed top-0 z-50 shadow-lg bg-[#121212]"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between text-[#F1E24] text-2xl font-bold">
        <img className="w-[10%] h-[20%]" src="/public/Logo.png"/>
      </div>
      <ul className="flex space-x-[2.8vw] text-[#E0E0E0]">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#F1E24]"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#F1E24]"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#F1E24]"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#F1E24]"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#F1E24]"
          >
            Contact
          </Link>
        </li>
      </ul>
      <button className="bg-[#ffff] text-black px-8 py-2 rounded-md font-semibold">
        Call Us
      </button>
    </motion.nav>
  );
};

export default Navbar;*/
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLenis } from "@studio-freight/react-lenis";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  // Lenis scroll function
  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`Section with ID "${id}" not found!`);
  }
};

  
  return (
    <motion.nav
      className="w-full px-6 lg:px-[4vw] py-4 flex justify-between items-center fixed to-0 z-50 shadow-lg bg-[#121212]"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Section */}
      <div className="flex items-center text-[#F1E24] text-2xl font-bold">
        <img className="w-16 h-auto" src="/public/Logo.png" alt="Logo" />
      </div>

      {/* Navigation Links (Desktop) */}
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

      {/* Call to Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden lg:block bg-[#F1E24] text-black px-6 py-2 rounded-md font-semibold transition duration-300 hover:bg-[#e0c000]"
      >
        Call Us
      </motion.button>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-[#F1E24] text-2xl"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation Menu */}
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

export default Navbar;







