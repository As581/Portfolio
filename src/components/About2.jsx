import { motion } from "framer-motion";

const About2 = () => {
  return (
    <section className="w-screen min-h-screen bg-[#121212] text-white py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h2
          className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-extrabold text-[#FFD700] tracking-wide"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Introduction */}
        <motion.p
          className="mt-6 text-[4vw] sm:text-[2.5vw] md:text-[1.3vw] text-gray-300 leading-relaxed tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hi! I’m <span className="text-[#FFD700] font-bold">Ashish Vishwakarma</span>,  
          a passionate <strong>Interior Designer</strong> who loves transforming spaces into experiences.  
          From <strong>modern minimalism</strong> to <strong>luxury aesthetics</strong>,  
          I design interiors that balance functionality, beauty, and emotion.
        </motion.p>

        {/* Skills */}
        <motion.p
          className="mt-6 text-[3.8vw] sm:text-[2.2vw] md:text-[1.2vw] text-gray-300 leading-relaxed tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <strong>Design Expertise:</strong><br />
          🪞 <strong>Interior Styling:</strong> Residential, Commercial & Office Spaces<br />
          🎨 <strong>Design Tools:</strong> AutoCAD, SketchUp, Photoshop, Figma<br />
          🏠 <strong>Core Skills:</strong> Space Planning, Lighting Design, Color Coordination<br />
          I believe great design tells a story — one that inspires and comforts.
        </motion.p>

        {/* Projects */}
        <motion.p
          className="mt-6 text-[3.8vw] sm:text-[2.2vw] md:text-[1.2vw] text-gray-300 leading-relaxed tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <strong>Featured Works:</strong><br />
          🏡 <strong>Modern Apartment Makeover</strong> – Elegant yet functional home design<br />
          🪴 <strong>Nature-Inspired Workspace</strong> – A blend of calm and creativity<br />
          🕯️ <strong>Luxury Villa Interiors</strong> – Sophisticated design with rich textures<br />
          Each project is a reflection of creativity, detail, and passion.
        </motion.p>

        {/* Career Goal */}
        <motion.p
          className="mt-6 text-[3.8vw] sm:text-[2.2vw] md:text-[1.2vw] text-gray-300 leading-relaxed tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          viewport={{ once: true }}
        >
          My mission is to <strong>design spaces that inspire people daily</strong> —  
          blending art, comfort, and purpose. I’m always looking to collaborate on  
          <strong>unique, detail-driven interior projects</strong> that leave a lasting impression.
        </motion.p>

        {/* Call-to-Action */}
        <motion.a
          href="#contact"
          className="mt-8 inline-block bg-[#FFD700] text-black px-8 py-3 md:px-10 md:py-4 font-bold text-[4vw] sm:text-[2vw] md:text-[1.2vw] rounded-full 
          transition duration-300 hover:bg-yellow-400 hover:shadow-lg hover:scale-105"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let’s Design Something Beautiful!
        </motion.a>

      </div>
    </section>
  );
};

export default About2;
