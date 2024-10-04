import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaChevronRight, FaBuilding } from 'react-icons/fa';

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-0 "
        animate={{ opacity: isExpanded ? 0.2 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <FaBriefcase className="mr-3 text-yellow-300 text-2xl" />
          <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
        </div>
        <div className="flex items-center mb-2">
          <FaBuilding className="mr-3 text-blue-300 text-xl" />
          <p className="text-md text-yellow-200">{experience.company}</p>
        </div>
        <div className="flex items-center mb-4">
          <FaCalendarAlt className="mr-3 text-green-300 text-xl" />
          <p className="text-sm text-white">{experience.period}</p>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 mt-4"
            >
              {experience.responsibilities.map((resp, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex items-start text-white"
                >
                  <FaChevronRight className="mr-2 mt-1 text-pink-300 flex-shrink-0" />
                  <span className="text-sm">{resp}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const WorkExperience = () => {
  const experiences = [
    {
      company: "Latnip IT Solutions",
      role: "Software Developer",
      period: "December 2023 - June 2024",
      responsibilities: [
        "Developed and maintained full-stack applications",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented new features and optimized existing codebase for better performance"
      ]
    },
    {
      company: "Viddious IT Solutions",
      role: "Front-End Developer",
      period: "March 2023 - November 2023",
      responsibilities: [
        "Created responsive and user-friendly web interfaces using modern front-end technologies",
        "Worked closely with UX/UI designers to implement pixel-perfect designs",
        "Optimized web applications for maximum speed and scalability"
      ]
    },
    {
      company: "Aquilai IT Solutions",
      role: "Cyber Security & Front-End Developer",
      period: "June 2021 - March 2023",
      responsibilities: [
        "Implemented security measures to protect against cyber threats",
        "Developed secure front-end solutions with a focus on data protection",
        "Conducted security audits and vulnerability assessments on web applications"
      ]
    }
  ];

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzE3MTcxNyI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMzNDM0MzQiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center min-h-screen">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Experience</span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 text-center mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My journey in the tech industry has equipped me with diverse skills and experiences. 
          Here's a glimpse into my professional background:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#171717" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  );
};

export default WorkExperience;