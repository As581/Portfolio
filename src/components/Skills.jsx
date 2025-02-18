/*import { motion } from "framer-motion";

const skills = [
  { name: "HTML", img: "https://cdn-icons-png.flaticon.com/128/888/888859.png" },
  { name: "CSS", img: "https://cdn-icons-png.flaticon.com/128/888/888847.png" },
  { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png" },
  { name: "Tailwind CSS", img: "/public/images.png" },
  { name: "Bootstrap", img: "https://cdn-icons-png.flaticon.com/128/5968/5968672.png" },
  { name: "GSAP", img: "/public/images (1).png" },
  { name: "Framer Motion", img: "https://cdn-icons-png.flaticon.com/128/5968/5968332.png" },
  { name: "ReactJS", img: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png" },
  { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/128/919/919825.png" },
  { name: "Express.js", img: "images (4).png" },
  { name: "MongoDB", img: "/public/" },
  { name: "Socket.io", img: "/public/images (2).png" },
  { name: "Redis", img: "/public/images (2).jpeg" },
  { name: "jQuery", img: "https://cdn-icons-png.flaticon.com/128/919/919831.png" },
];

const Skills = () => {
  return (
    <div className="bg-[#121212] text-[#E0E0E0] py-16">
      <div className="max-w-5xl mx-auto px-6">       
      <div className="flex flex-col items-center gap-4">
  <div className="flex items-center gap-4">
    <div className="w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
    <h2 className="text-[3vw] font-bold text-[#F1E24]">Skills</h2>
  </div>
  <div className="w-[3vw] h-[5px] bg-white"></div>
</div>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-[#1E1E1E] rounded-lg shadow-md transition-all duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 rounded-full bg-white p-2 shadow-md"
              />
              <p className="mt-3 text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;*/
/*import { motion } from "framer-motion";

const skills = [
  { name: "HTML", img: "https://cdn-icons-png.flaticon.com/128/888/888859.png" },
  { name: "CSS", img: "https://cdn-icons-png.flaticon.com/128/888/888847.png" },
  { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png" },
  { name: "Tailwind CSS", img: "/public/Tail.png" },
  { name: "Bootstrap", img: "https://cdn-icons-png.flaticon.com/128/5968/5968672.png" },
  { name: "GSAP", img: "/public/Gsap.png" },
  { name: "Framer Motion", img: "/public/Motion.png" },
  { name: "ReactJS", img: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png" },
  { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/128/919/919825.png" },
  { name: "Express.js", img: "/public/Express.png" },
  { name: "MongoDB", img: "/public/images (5).png" },
  { name: "Socket.io", img: "/public/Socket.io.png" },
  { name: "Redis", img: "/public/Redis.jpeg" },
  { name: "jQuery", img: "/public/jQuery.png" },
  {name: "AdobeXd", img: "/public/Xd.png"},
    {name: "Photoshop", img: "/public/Photo.png"},
      {name: "Figma", img: "/public/Figma.png"}
];

const Skills = () => {
  return (
    <section className="bg-[#121212] text-[#E0E0E0] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        //Animated Heading 
        
        <motion.h2
          className="text-[2.5vw] font-extrabold text-[#F1E24] tracking-wide"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        //Underline Effect 
        
        <motion.div
          className="w-[5vw] h-[5px] bg-[#F1E24] mx-auto mt-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>

       //Skills Grid 
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-5 bg-[#1E1E1E] rounded-lg shadow-md 
              transition-all duration-300 border border-[#F1E24] hover:shadow-lg hover:-translate-y-2"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 rounded-full bg-white p-2 shadow-md"
              />
              <p className="mt-3 text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;*/

import { motion } from "framer-motion";

const skills = [
  { name: "HTML", img: "https://cdn-icons-png.flaticon.com/128/888/888859.png", level: "Advanced" },
  { name: "CSS", img: "https://cdn-icons-png.flaticon.com/128/888/888847.png", level: "Advanced" },
  { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png", level: "Advanced" },
  { name: "Tailwind CSS", img: "/public/Tail.png", level: "Expert" },
  { name: "Bootstrap", img: "https://cdn-icons-png.flaticon.com/128/5968/5968672.png", level: "Proficient" },
  { name: "GSAP", img: "/public/Gsap.png", level: "Intermediate" },
  { name: "Framer Motion", img: "/public/Motion.png", level: "Expert" },
  { name: "ReactJS", img: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png", level: "Expert" },
  { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/128/919/919825.png", level: "Advanced" },
  { name: "Express.js", img: "/public/Express.png", level: "Advanced" },
  { name: "MongoDB", img: "/public/images (5).png", level: "Proficient" },
  { name: "Socket.io", img: "/public/Socket.io.png", level: "Advanced" },
  { name: "Redis", img: "/public/Redis.jpeg", level: "Intermediate" },
  { name: "jQuery", img: "/public/jQuery.png", level: "Intermediate" },
  { name: "Adobe XD", img: "/public/Xd.png", level: "Proficient" },
  { name: "Photoshop", img: "/public/Photo.png", level: "Proficient" },
  { name: "Figma", img: "/public/Figma.png", level: "Expert" },
    { name: "Redux", img: "Redux.png", level: "Intermediate" },
     { name: "GitHub", img: "Git.png", level: "Intermediate" }
];

const Skills = () => {
  return (
    <section className="bg-gradient-to-b  from-[#121212] to-[#1e1e1e] bg-gradient-to-t  from-[#121212] to-[#1e1e1e]  text-[#E0E0E0] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Animated Heading */}
        <motion.h2
          className="text-[2.5vw] font-extrabold text-[#F1E24] tracking-wide"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Skills & Expertise
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="mt-4 text-[1.2vw] text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Over the years, I have mastered various **frontend & backend technologies**  
          to build modern, scalable, and **high-performance applications**.
        </motion.p>

        {/* Underline Effect */}
        <motion.div
          className="w-[5vw] h-[5px] bg-[#F1E24] mx-auto mt-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-5 bg-[#1E1E1E] rounded-lg shadow-md 
              transition-all duration-300 border border-[#F1E24] hover:shadow-lg hover:-translate-y-2"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 rounded-full bg-white p-2 shadow-md"
              />
              <p className="mt-3 text-lg font-semibold">{skill.name}</p>
              <p className="text-sm text-gray-400">{skill.level}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="#projects"
            className="inline-block bg-[#F1E24] text-black px-8 py-4 font-bold text-[1.2vw] rounded-full 
            transition duration-300 hover:bg-yellow-400 hover:shadow-lg hover:scale-105"
          >
            Check Out My Work!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

