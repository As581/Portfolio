{/*import { motion } from "framer-motion";

const About = () => {
  return (
    <section className=" bg-[#121212] text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        
        <motion.h2
          className="text-[3.5vw] font-extrabold text-[#F1E24]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>


        <motion.p
          className="mt-4 text-lg text-gray-300 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hi, I am <span className="text-[#F1E24] font-bold">Ashish Vishwakarma</span>, a passionate **Full Stack Developer** 🚀  
          I love working with **ReactJS, NodeJS, ExpressJS, MongoDB, Tailwind CSS, Socket.io, Redis, Framer Motion**, and more.  
        </motion.p>


        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I have built projects like **Pinterest Clone, BlinkIt Clone, Google Docs Clone**,  
          and I am always exploring **new technologies** to improve my skills.  
          My goal is to create **fast, scalable, and user-friendly web applications** that make an impact.  
        </motion.p>

        <motion.a
          href="#contact"
          className="mt-6 inline-block bg-[#F1E24] text-black px-6 py-3 font-bold text-lg rounded-full transition duration-300 hover:bg-yellow-400"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Let's Connect!
        </motion.a>

      </div>
    </section>
  );
};

export default About; */}
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[#121212] text-white py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Animated Heading */}
        <motion.h2
          className="text-[3vw] font-extrabold text-[#F1E24] tracking-wide"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Animated Subheading */}
        <motion.p
          className="mt-6 text-[1.3vw] text-gray-300 leading-relaxed tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hi, I am <span className="text-[#F1E24] font-bold">Ashish Vishwakarma</span>, a passionate  
          <span className="text-[#F1E24]"> Full Stack Developer</span> 🚀  
          Skilled in **ReactJS, NodeJS, ExpressJS, MongoDB, Tailwind CSS, Socket.io, Redis, Framer Motion,** and more.  
        </motion.p>

        {/* Animated Description */}
        <motion.p
          className="mt-6 text-[1.2vw] text-gray-300 leading-relaxed tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          I have developed projects like:  
          <span className="text-[#F1E24] font-semibold"> Pinterest Clone, BlinkIt Clone, Google Docs Clone, </span>  
          and I am always exploring **new technologies** to improve my skills.  
          My goal is to build **fast, scalable, and user-friendly applications** that make an impact.  
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="#contact"
          className="mt-8 inline-block bg-[#F1E24] text-black px-8 py-4 font-bold text-[1.2vw] rounded-full 
          transition duration-300 hover:bg-yellow-400 hover:shadow-lg hover:scale-105"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let's Connect!
        </motion.a>

      </div>
    </section>
  );
};

export default About;

