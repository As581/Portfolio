import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "🔍 Research",
    description:
      "Understanding project requirements, analyzing competitors, and gathering resources for a solid foundation.",
  },
  {
    title: "📌 Strategy",
    description:
      "Defining the tech stack, designing wireframes, and planning the development roadmap for efficient execution.",
  },
  {
    title: "💻 Development",
    description:
      "Writing clean and scalable code, implementing features, and ensuring the best user experience.",
  },
  {
    title: "🚀 Deployment",
    description:
      "Hosting the application, monitoring performance, and ensuring smooth functionality in production.",
  },
];

const MyWorkingProcess = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-gradient-to-b from-[#121212] via-[#1e1e1e] to-[#121212] text-[#E0E0E0]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Heading Section */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F1E24]">
              My Working Process
            </h2>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative border-l-4 border-zinc-300 pl-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute w-6 h-6 bg-[#F1E24] rounded-full -left-[40px]"></div>
              <h3 className="text-2xl font-bold text-gray-200">{step.title}</h3>
              <p className="text-gray-400 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorkingProcess;


