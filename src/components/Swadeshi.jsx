import { motion } from "framer-motion";
import { FaHandshake, FaLeaf, FaMobileAlt, FaRocket, FaHeart } from "react-icons/fa";

const Swadeshi = () => {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] text-white py-24 px-6 flex flex-col items-center text-center">
      {/* 🇮🇳 Tricolor Blurred Glow */}
      <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-[#FF9933] blur-[140px] opacity-20 rounded-full"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-[#138808] blur-[140px] opacity-20 rounded-full"></div>

      {/* 🔱 Title */}
      <motion.h2
        className="text-[8vw] md:text-[4vw] font-extrabold bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent leading-tight tracking-wide"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Swadeshi Code. Global Impact. 🇮🇳
      </motion.h2>

      {/* 💬 Subtitle */}
      <motion.p
        className="mt-6 text-gray-300 max-w-3xl text-[4vw] md:text-[1.3vw] leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        Let's build a future where technology reflects the spirit of Bharat —  
        self-reliant, innovative, and proud. 🌿  
        <span className="text-[#F1E24] font-semibold">CodeForBharat</span> is not just a movement, it’s an emotion.
      </motion.p>

      {/* 🔥 Icon Features */}
      <div className="mt-16 grid sm:grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
        {[
          {
            icon: <FaMobileAlt size={45} className="text-[#FF9933]" />,
            title: "Build Swadeshi Apps",
            desc: "Empower local innovation with global standards. Let's make in India, for the world.",
          },
          {
            icon: <FaRocket size={45} className="text-white" />,
            title: "Lead the Tech Revolution",
            desc: "Join the wave of Indian developers building scalable, future-ready products.",
          },
          {
            icon: <FaHandshake size={45} className="text-[#138808]" />,
            title: "Unite For Bharat",
            desc: "Every line of code can uplift a nation. Together, let’s redefine digital India.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#121212]/70 border border-gray-700 hover:border-[#F1E24] p-8 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.08, y: -8 }}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-2xl font-bold text-[#F1E24] mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 💖 Message */}
      <motion.div
        className="mt-16 text-lg md:text-xl text-gray-400 font-medium italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        “When you choose Swadeshi, you choose Strength, Pride, and Progress.”
      </motion.div>

      {/* 🚀 CTA */}
      <motion.a
        href="#"
        className="mt-12 inline-block bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-black font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-[#F1E24]/50 hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        Join the Movement 🚀
      </motion.a>

      {/* 💫 Decorative Heart Pulse */}
      <motion.div
        className="absolute bottom-10 left-10 text-[#F1E24]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaHeart size={25} />
      </motion.div>
    </section>
  );
};

export default Swadeshi;
