import { motion } from "framer-motion";
import { FaHandshake, FaLeaf, FaMobileAlt } from "react-icons/fa";

const Swadeshi = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#121212] via-[#181818] to-[#121212] text-[#E0E0E0] py-20 px-6 flex flex-col items-center text-center">
      {/* 🇮🇳 Background Subtle Glow */}
      <div className="absolute inset-0 bg-[url('/bharat-pattern.png')] opacity-10 bg-cover bg-center"></div>
      <div className="absolute w-72 h-72 bg-[#ff9933] blur-[120px] rounded-full top-0 left-10 opacity-20"></div>
      <div className="absolute w-72 h-72 bg-[#138808] blur-[120px] rounded-full bottom-0 right-10 opacity-20"></div>

      {/* 🟧 Heading */}
      <motion.h2
        className="text-[3vw] sm:text-[7vw] font-extrabold bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Use Swadeshi Apps 🇮🇳
      </motion.h2>

      {/* ✨ Subheading */}
      <motion.p
        className="mt-4 text-gray-400 max-w-2xl text-lg sm:text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Promote Made-in-India technologies and empower the spirit of *Atmanirbhar Bharat*.
        Let's build, use, and grow our own digital ecosystem together.
      </motion.p>

      {/* 💚 Feature Cards */}
      <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
        {[
          {
            icon: <FaMobileAlt size={40} className="text-[#FF9933]" />,
            title: "Support Local Apps",
            desc: "Discover and use Indian apps that bring innovation and reliability.",
          },
          {
            icon: <FaHandshake size={40} className="text-white" />,
            title: "Empower Developers",
            desc: "Every download supports Indian startups and local tech creators.",
          },
          {
            icon: <FaLeaf size={40} className="text-[#138808]" />,
            title: "Sustainable Digital Future",
            desc: "Choose Swadeshi, build a self-reliant and sustainable India.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#1e1e1e] border border-gray-700 hover:border-[#F1E24] p-8 rounded-xl shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-2xl font-bold text-[#F1E24] mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 🇮🇳 CTA Button */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-[#F1E24]/40 transition-all duration-500"
      >
        Explore Swadeshi Apps
      </motion.a>
    </section>
  );
};

export default Swadeshi;
