import { motion } from "framer-motion";

const About = () => {
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
          Hey there! I’m <span className="text-[#FFD700] font-bold">Ashish Vishwakarma</span>,  
          a <strong>Full Stack Developer</strong> who loves building things that make life easier.  
          From <strong>dynamic web apps</strong> to <strong>real-time applications</strong>,  
          I enjoy turning ideas into reality with clean and efficient code.
        </motion.p>

        {/* Skills */}
        <motion.p
          className="mt-6 text-[3.8vw] sm:text-[2.2vw] md:text-[1.2vw] text-gray-300 leading-relaxed tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <strong>Tech I Work With:</strong><br />
          🔹 <strong>Frontend:</strong> ReactJS, Tailwind CSS, Framer Motion<br />
          🔹 <strong>Backend:</strong> Node.js, Express.js, MongoDB, Redis, Socket.io<br />
          🔹 <strong>Others:</strong> API Development, Authentication, Caching<br />
          I’m always exploring <strong>new technologies</strong> and love problem-solving.
        </motion.p>

        {/* Projects */}
        <motion.p
          className="mt-6 text-[3.8vw] sm:text-[2.2vw] md:text-[1.2vw] text-gray-300 leading-relaxed tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <strong>Some of My Work:</strong><br />
          🚀 <strong>Pinterest Clone</strong> – A visual discovery platform<br />
          🚀 <strong>BlinkIt Clone</strong> – A real-time grocery delivery app<br />
          🚀 <strong>Google Docs Clone</strong> – A collaborative document editor<br />
          Always working on new and exciting projects!
        </motion.p>

        {/* Career Goal */}
        <motion.p
          className="mt-6 text-[3.8vw] sm:text-[2.2vw] md:text-[1.2vw] text-gray-300 leading-relaxed tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          viewport={{ once: true }}
        >
          My goal? To work on <strong>challenging and innovative projects</strong> where I can contribute,  
          grow, and collaborate with like-minded people. I love working on  
          <strong>scalable, high-performance applications</strong> that solve real-world problems.
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
          Let’s Build Something Awesome!
        </motion.a>

      </div>
    </section>
  );
};

export default About;
