import { motion } from "framer-motion";

const Hero4 = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#f5f8f7] via-[#e8f0ee] to-[#d8e3df]">

      {/* 🌄 Cinematic Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1593261735317-9ccba5a2a5b3?auto=format&fit=crop&w=1600&q=80"
          alt="Ancient Temple"
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e8f0ee]/30 to-[#d8e3df]/95 backdrop-blur-sm"></div>
      </div>

      {/* 🌟 Floating Light Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 5 }}
        />
      ))}

      {/* ✨ Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 max-w-5xl px-6 text-center"
      >
        {/* Heading with staggered animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2b3a36] leading-tight tracking-tight font-[Poppins]"
        >
          Experience the{" "}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[#6ea38e]"
          >
            Soul
          </motion.span>{" "}
          of Bharat
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 text-lg md:text-xl lg:text-2xl text-[#3f4d48] font-medium leading-relaxed sm:leading-loose"
        >
          Discover ancient temples, timeless art, and the living heritage of India — 
          where every stone whispers a story of divinity and culture.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#temples"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(110,163,142,0.6)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="inline-block mt-8 px-12 py-4 rounded-full bg-[#6ea38e] text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Begin Your Darshan
        </motion.a>
      </motion.div>

      {/* Floating Decorative Icons */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png"
        alt="lotus"
        className="absolute bottom-12 left-12 w-16 sm:w-20 opacity-80"
        animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/566/566031.png"
        alt="sun"
        className="absolute top-12 right-12 w-16 sm:w-20 opacity-80"
        animate={{ y: [0, 12, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero4;
