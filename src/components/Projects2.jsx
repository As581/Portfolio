import { motion } from "framer-motion";

const projects = [
  {
    title: "LiveChat – Face to Face Chatting",
    description:
      "Real-time video calling app with private rooms and random pairing. Built using WebRTC, Socket.io, and Node.js.",
    img: "/public/live.jpg",
    live: "https://livechat-g2cg.onrender.com/",
    github: "https://github.com/As581/Omegle_Proj",
  },
  {
    title: "BlinkIt Clone – Speed Commerce",
    description:
      "Fast grocery delivery app with authentication, cart system, payments, and Redis caching for speed.",
    img: "/public/blink.jpg",
    live: "https://blinkit-kc9u.onrender.com/",
    github: "https://github.com/As581/BlinkI",
  },
  {
    title: "DevTube – A YouTube Alternative",
    description:
      "Video platform with live streaming, uploads, and real-time communication using Express & Socket.io.",
    img: "/public/dev.jpg",
    live: "https://devtube-wih8.onrender.com/",
    github: "https://github.com/As581/DevTube",
  },
  {
    title: "FetchMovie – TMDB API Project",
    description:
      "A movie database app using React & Redux with live trending movie data and responsive design.",
    img: "/public/Fetch.jpg",
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
      {/* ✨ Floating Background Glow */}
      <motion.div
        className="absolute top-[-10vw] left-[-5vw] w-[25vw] h-[25vw] bg-[#F1E24] opacity-10 blur-[120px] rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-[-10vw] right-[-5vw] w-[25vw] h-[25vw] bg-[#F1E24] opacity-10 blur-[120px] rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      {/* 🧠 Heading */}
      <motion.h2
        className="text-[8vw] sm:text-[5vw] md:text-[3vw] font-extrabold text-[#F1E24] tracking-wide text-center"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Projects 🚀
      </motion.h2>

      {/* Underline */}
      <motion.div
        className="w-[70px] h-[5px] bg-[#F1E24] mx-auto mt-4 mb-10 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      {/* 💻 Project Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-[#1c1c1c]/80 backdrop-blur-lg border border-[#2a2a2a] hover:border-[#F1E24]/70 shadow-[0_0_25px_rgba(241,226,36,0.15)] hover:shadow-[0_0_40px_rgba(241,226,36,0.25)] rounded-2xl overflow-hidden transform transition-all duration-500 w-[90%] sm:w-[85%] md:w-[100%]"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-52 object-cover rounded-t-2xl opacity-90 hover:opacity-100 transition-all duration-500"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-[#F1E24] mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6">{project.description}</p>

              <div className="flex justify-between">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#F1E24] text-black font-semibold rounded-md hover:bg-[#e0c000] transition-all duration-300"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition-all duration-300"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✨ Bottom Glow Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F1E24] to-transparent opacity-50"></div>
    </section>
  );
};

export default Projects2;
