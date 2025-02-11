{/*import { motion } from "framer-motion";

const educationData = [
  {
    year: "2021-2024",
    degree: "Bachelor Of Computer Application",
    college: "Ln College Of Management Of Technology,Mumbai",
    description: "Studied Full Stack Development, Data Structures, and Machine Learning.",
  },
  {
    year: "2018-2020",
    degree: "Higher Secondary (12th)",
    college: "P.D Turakhia College,Mumbai",
    description: "Major subjects:Accountung,Economics.",
  },
  {
    year: "2013-2018",
    degree: "Secondary (10th)",
    college: "Pal Rajendra Hindi High School,Mumbai",
    description: "Achieved high grades and developed a strong foundation in Science & History.",
  },
    {
    year: "2024-2025",
    Course: "6 Month",
    college: "Shankar Multimedia,Mumbai",
    description: "Create Scalable And Fantastic Application and Website.",
  }
];

const Education = () => {
  return (
    <div className="bg-[#121212] text-[#E0E0E0] py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
  <div className="flex items-center gap-4">
    <div className="w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
    <h2 className="text-[3vw] font-bold text-[#F1E24]">Education</h2>
  </div>
  <div className="w-[3vw] h-[5px] bg-white"></div>
</div>
        <div className="relative border-l-4 border-[#F1E24] pl-6 mt-[4vw]">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="absolute -left-3 w-6 h-6 bg-[#F1E24] rounded-full py-3"></div>
              <h3 className="text-5xl font-semibold">{edu.degree}</h3>
               <h3 className="text-5xl font-semibold">{edu.Course}</h3>
              <p className="text-3xl text-gray-400">{edu.college}</p>
              <span className="text-2xl text-[#F1E24] font-bold">{edu.year}</span>
              <p className="mt-2 text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;*/}
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2021-2024",
    degree: "Bachelor Of Computer Application",
    college: "Ln College Of Management Of Technology, Mumbai",
    description: "Studied Full Stack Development, Data Structures, and Machine Learning.",
  },
  {
    year: "2018-2020",
    degree: "Higher Secondary (12th)",
    college: "P.D Turakhia College, Mumbai",
    description: "Major subjects: Accounting, Economics.",
  },
  {
    year: "2013-2018",
    degree: "Secondary (10th)",
    college: "Pal Rajendra Hindi High School, Mumbai",
    description: "Achieved high grades and developed a strong foundation in Science & History.",
  },
  {
    year: "2024-2025",
    course: "6 Month Course",
    college: "Shankar Multimedia, Mumbai",
    description: "Create scalable and fantastic applications and websites.",
  },
];

const Education = () => {
  return (
    <div className="bg-[#121212] text-[#E0E0E0] py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <h2 className="text-[2.5vw] font-bold text-[#F1E24]">Education</h2>
          </div>
          <div className="w-12 h-[4px] bg-white"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-[#F1E24] pl-6 mt-[4vw]">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 w-6 h-6 bg-[#F1E24] rounded-full group-hover:scale-110 transition-transform"></div>

              {/* Degree & Course */}
              <h3 className="text-[1.8vw] font-semibold text-white">
                {edu.degree || edu.course}
              </h3>

              {/* College Name */}
              <p className="text-[1.3vw] text-gray-400">{edu.college}</p>

              {/* Year */}
              <span className="text-[1.2vw] text-[#F1E24] font-bold block mt-1">
                {edu.year}
              </span>

              {/* Description */}
              <p className="mt-2 text-gray-300 text-[1.1vw] leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

