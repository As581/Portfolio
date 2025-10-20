import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-screen min-h-screen bg-[#121212] text-white py-16 px-6 sm:px-10 md:px-20 flex justify-center items-center">
      <div className="max-w-5xl mx-auto text-center">

        {/* 🌟 Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFD700] tracking-wide"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* 👋 Introduction */}
        <motion.p
          className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hey there! I’m <span className="text-[#FFD700] font-bold">Ashish Vishwakarma</span>,  
          a <span className="font-semibold">Full Stack Developer</span> who loves building things that make life easier.  
          From <span className="text-[#FFD700] font-semibold">dynamic web apps</span> to real-time applications,  
          I enjoy turning ideas into reality with clean and efficient code.
        </motion.p>

        {/* 💻 Skills */}
        <motion.div
          className="mt-8 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed tracking-wide space-y-2"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold text-[#FFD700]">Tech I Work With:</p>
          <p>⚡ <span className="text-[#FFD700]">Frontend:</span> ReactJS, Tailwind CSS, Framer Motion</p>
          <p>⚙️ <span className="text-[#FFD700]">Backend:</span> Node.js, Express.js, MongoDB, Redis, Socket.io</p>
          <p>🧠 <span className="text-[#FFD700]">Others:</span> API Development, Authentication, Caching</p>
          <p>I’m always exploring new technologies and love solving problems creatively.</p>
        </motion.div>

        {/* 🚀 Projects */}
        <motion.div
          className="mt-8 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed tracking-wide space-y-2"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold text-[#FFD700]">Some of My Projects:</p>
          <p>🚀 <span className="text-[#FFD700]">Pinterest Clone</span> – A visual discovery platform</p>
          <p>🛒 <span className="text-[#FFD700]">BlinkIt Clone</span> – A real-time grocery delivery app</p>
          <p>📝 <span className="text-[#FFD700]">Google Docs Clone</span> – A collaborative document editor</p>
          <p>Always working on new and exciting ideas to push innovation forward.</p>
        </motion.div>

        {/* 🎯 Career Goal */}
        <motion.p
          className="mt-8 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          viewport={{ once: true }}
        >
          My goal? To work on <span className="text-[#FFD700] font-semibold">challenging and innovative projects</span>  
          where I can contribute, grow, and collaborate with passionate people.  
          I aim to build <span className="text-[#FFD700] font-semibold">scalable, high-performance applications</span>  
          that make a real-world impact.
        </motion.p>

        {/* 💬 Call-to-Action */}
        <motion.a
          href="#contact"
          className="mt-10 inline-block bg-[#FFD700] text-black px-8 py-3 sm:px-10 sm:py-4 font-bold text-sm sm:text-base rounded-full 
          transition duration-300 hover:bg-yellow-400 hover:shadow-lg hover:scale-105"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let’s Build Something Awesome!
        </motion.a>

      </div>
    </section>
  );
};

export default About;
