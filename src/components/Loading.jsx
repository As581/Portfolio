/*import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete(); // Callback to hide loading screen
          }, 500);
          return 100;
        }
        return oldProgress + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={progress === 100 ? { x: "-100%" } : {}}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center bg-[#1f1e24] text-[#F1E24] text-5xl font-bold z-50"
    >
      {progress}%
    </motion.div>
  );
};

export default Loading;*/
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "/public/Logo.png"; // Make sure the path is correct

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Call onComplete after 100%
          return 100;
        }
        return oldProgress + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#1f1e24] z-50"
      initial={{ y: 0 }}
      animate={progress === 100 ? { y: "-100%" } : {}}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.img
        src={logo}
        alt="Logo"
        className="w-24 h-24"
        style={{
          filter: `grayscale(${100 - progress}%)`, // Grey at start, White at 100%
          opacity: progress / 100, // Gradually appear
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default Loading;










