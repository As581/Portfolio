import { motion } from "framer-motion";

const projects = [
  {
    title: "LiveChat – Face to Face Chatting",
    description:
      "Real-time video calling app with private rooms and random partner pairing. Built using WebRTC, Socket.io, and Node.js.",
    img: "/live.jpg",
    live: "https://livechat-g2cg.onrender.com/",
    github: "https://github.com/As581/Omegle_Proj",
  },
  {
    title: "BlinkIt Clone – Speed Commerce",
    description:
      "E-commerce platform with authentication, cart, payment gateway, and Redis caching for blazing speed.",
    img: "/blink.jpg",
    live: "https://blinkit-kc9u.onrender.com/",
    github: "https://github.com/As581/BlinkI",
  },
  {
    title: "DevTube – A YouTube Alternative",
    description:
      "A real-time video platform with uploads, live streaming, and user authentication using Express.js and Socket.io.",
    img: "/dev.jpg",
    live: "https://devtube-wih8.onrender.com/",
    github: "https://github.com/As581/DevTube",
  },
  {
    title: "FetchMovie – TMDB API Project",
    description:
      "A movie app using React, Redux, and TMDB API with trending search, dynamic details, and modern design.",
    img: "/Fetch.jpg",
    live: "https://fetchmovie.vercel.app/",
    github: "https://github.com/As581/MovieTmdb",
  },
];

const Projects2 = () => {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#121212] via-[#1b1b1b] to-[#121212] text-[#E0E0E0] py-20 px-6 overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-[-10vw] left-[-5vw] w-[30vw] h-[30vw] bg-[#F1E24] opacity-10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-10vw] right-[-5vw] w-[30vw] h-[30vw] bg-[#F1E24] opacity-10 blur-[150px] rounded-full"></div>

      {/* ✨ Section Heading */}
      <motion.h2
        className="text-[8vw] sm:text-[5vw] md:text-[3vw] font-extrabold text-[#F1E24] tracking-wide text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Projects 🚀
      </motion.h2>

      {/* Underline */}
      <motion.div
        className="w-[70px] h-[5px] bg-[#F1E24] mx-auto mt-4 mb-12 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      {/* 💻 Project Cards Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-[#1b1b1b]/80 backdrop-blur-lg border border-[#2a2a2a] hover:border-[#F1E24]/80 
                       rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(241,226,36,0.15)] 
                       hover:shadow-[0_0_35px_rgba(241,226,36,0.25)] transition-all duration-500 group w-[90%] sm:w-[85%] md:w-full"
          >
            {/* 🖼 Project Image */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* 📄 Project Content */}
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-[#F1E24] mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex justify-between items-center">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#F1E24] text-black font-semibold rounded-md hover:bg-[#e0c000] 
                             transition-all duration-300"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 
                             transition-all duration-300"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects2;
