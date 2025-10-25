import { motion } from "framer-motion";

const Hero4 = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-[#f5f8f7] via-[#e8f0ee] to-[#d8e3df]">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1593261735317-9ccba5a2a5b3?auto=format&fit=crop&w=1600&q=80"
          alt="Ancient Temple"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e8f0ee]/40 to-[#d8e3df]/95"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl px-6"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2b3a36] leading-tight tracking-tight font-[Poppins]"
        >
          Experience the <span className="text-[#6ea38e]">Soul</span> of Bharat
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-[#3f4d48] font-medium leading-relaxed sm:leading-loose"
        >
          Discover ancient temples, timeless art, and the living heritage of India — 
          where every stone whispers a story of divinity and culture.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#temples"
          whileHover={{ scale: 1.08, backgroundColor: "#59826c" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="inline-block mt-8 px-10 py-3 rounded-full bg-[#6ea38e] text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          Begin Your Darshan
        </motion.a>
      </motion.div>

      {/* Floating Elements */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png"
        alt="lotus"
        className="absolute bottom-12 left-12 w-16 sm:w-20 opacity-70"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/566/566031.png"
        alt="sun"
        className="absolute top-12 right-12 w-14 sm:w-16 opacity-70"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero4;
