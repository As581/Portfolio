/*import { motion } from "framer-motion";

const projects = [
  {
    title: "LiveChat - Face To Face To Chatting Project",
    description: "Real-time video calling with private rooms and random partner pairing.. It is build Socket Io WebRTC and, Node Js.",
    img: "https://source.unsplash.com/500x300/?ecommerce,website",
    live: "https://livechat-G2cg.onrender.com/",
    github: "https://github.com/As581/Omegle_Proj",
  },
  {
    title: "Blinkit Web App",
    description: "Built a Speed-commerce app with Express.js, including authentication product cartpayment and order management Integrated MongoDB Redis caching and Cloudinary for efficient data storage and media handling",
    img: "https://source.unsplash.com/500x300/?chat,application",
    live: "https://blinkit-Kc9u.onrender.com/",
    github: "https://github.com/As581/BlinkI",
  },
  {
    title: "DevTube - (YouTube)",
    description: "Developed a production-level real-time application using Express.js and Socket.io for seamless client-server communication. Integrated Passport.js for secure authentication, session management and persistent login sessions.",
    img: "https://source.unsplash.com/500x300/?portfolio,website",
    live: "https://devtube-wih8.onrender.com/",
    github: "https://github.com/As581/DevTube",
  },
   {
    title: "FETCHMOVIE - TMDB API Project",
    description: "Built a responsive movie app using React, Redux, and Tailwind CSS,Integrated Redux for API fetching and global state management,Displayed dynamic data like movies, TV shows, and cast details with routing via ReactRouter.",
    img: "https://source.unsplash.com/500x300/?portfolio,website",
    live: "https://fetchmovie.vercel.app/",
    github: "https://github.com/As581/MovieTmdb",
  }
];

const Projects = () => {
  return (
    <section className="bg-[#121212] text-[#E0E0E0] py-16">
      <div className="max-w-6xl mx-auto px-6">  
      <div className="flex items-center justify-center gap-4 text-center">
  <div className="w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
  <h2 className="text-[3vw] font-bold text-[#F1E24]">Projects</h2>
</div>




        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-lg p-4"
            >
              <img src={project.img} alt={project.title} className="w-full h-40 object-cover rounded-md" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-[#F1E24]">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="mt-4 flex gap-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="bg-[#F1E24] text-[#121212] px-4 py-2 rounded-md font-bold hover:bg-[#d9c221]">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-md font-bold hover:bg-gray-600">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;*/
import { motion } from "framer-motion";

const projects = [
  {
    title: "LiveChat - Face To Face Chatting Project",
    description:
      "Real-time video calling with private rooms and random partner pairing. Built with Socket.io, WebRTC, and Node.js.",
    img: "/public/live.jpg",
    live: "https://livechat-G2cg.onrender.com/",
    github: "https://github.com/As581/Omegle_Proj",
  },
  {
    title: "Blinkit Web App",
    description:
      "Speed-commerce app built with Express.js, including authentication, product cart, payment, and order management. Integrated MongoDB, Redis caching, and Cloudinary.",
    img: "/public/blink.jpg",
    live: "https://blinkit-Kc9u.onrender.com/",
    github: "https://github.com/As581/BlinkI",
  },
  {
    title: "DevTube - (YouTube Clone)",
    description:
      "Developed a real-time YouTube-like app using Express.js and Socket.io. Integrated Passport.js for secure authentication and session management.",
    img: "/public/dev.jpg",
    live: "https://devtube-wih8.onrender.com/",
    github: "https://github.com/As581/DevTube",
  },
  {
    title: "FETCHMOVIE - TMDB API Project",
    description:
      "Built a responsive movie app using React, Redux, and Tailwind CSS. Integrated Redux for API fetching and displayed dynamic movie and TV show data.",
    img: "",
    live: "https://fetchmovie.vercel.app/",
    github: "https://github.com/As581/MovieTmdb",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#121212] text-[#E0E0E0] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
            <h2 className="text-[3vw] font-bold text-[#F1E24]">Projects</h2>
          </div>
          <div className="w-[3vw] h-[5px] bg-white"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-lg p-5 border border-gray-700 hover:border-[#F1E24] transition-all duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-44 object-cover rounded-md shadow-lg"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-[#F1E24]">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="mt-4 flex justify-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F1E24] text-[#121212] px-4 py-2 rounded-md font-bold hover:bg-[#d9c221] transition-all duration-300 shadow-md"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-md font-bold hover:bg-gray-600 transition-all duration-300 shadow-md"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

