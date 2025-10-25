import { motion } from "framer-motion";

const Hero4 = () => {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-[#f5f8f7] via-[#e8f0ee] to-[#d8e3df]"
    >
      {/* 🌄 Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1593261735317-9ccba5a2a5b3?auto=format&fit=crop&w=1600&q=80"
          alt="Ancient Temple"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e8f0ee]/30 to-[#d8e3df]/90"></div>
      </div>

      {/* ✨ Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-[#2b3a36] leading-tight font-[Poppins]"
        >
          Experience the <span className="text-[#6ea38e]">Soul</span> of Bharat
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-5 text-lg md:text-xl text-[#3f4d48] font-medium leading-relaxed"
        >
          Discover ancient temples, timeless art, and the living heritage of
          India — where every stone whispers a story of divinity and culture.
        </motion.p>

        {/* 🔘 Explore Button */}
        <motion.a
          href="#temples"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="inline-block mt-8 px-8 py-3 rounded-full bg-[#6ea38e] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Begin Your Darshan
        </motion.a>
      </motion.div>

      {/* 🌤️ Floating Elements (optional decor) */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png"
        alt="lotus"
        className="absolute bottom-10 left-10 w-14 opacity-70"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/566/566031.png"
        alt="sun"
        className="absolute top-10 right-10 w-12 opacity-70"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
    </section>
  );
};

export default Hero4;
