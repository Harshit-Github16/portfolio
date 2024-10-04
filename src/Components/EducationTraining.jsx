import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaChevronRight, FaCertificate } from 'react-icons/fa';

const EducationTraining = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    controls.start({
      backgroundPosition: `${mousePosition.x / 50}px ${mousePosition.y / 50}px`,
    });
  }, [mousePosition, controls]);

  const educations = [
    {
      degree: "MCA",
      institution: "Bikaner Technical University",
      period: "2019-2021",
      score: "79%"
    },
    {
      degree: "BCA",
      institution: "Jai Narayan Vyas University",
      period: "2016-2019",
      score: "74%"
    },
    {
      degree: "Higher Secondary",
      institution: "RBSE",
      period: "2014-2015",
      score: "62%"
    }
  ];

  const trainings = [
    {
      course: "Cyber Security Training",
      institution: "Aquilai IT Solutions"
    },
    {
      course: "Front-end Development",
      institution: "Tech Fly"
    }
  ];

  return (
    <motion.section
      animate={controls}
      className="relative w-full min-h-screen overflow-hidden bg-black text-white py-16"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 25%)`,
      }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzE3MTcxNyI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMzNDM0MzQiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Education and Training
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg backdrop-blur-sm flex flex-col h-full border border-blue-500/20 hover:border-purple-500/40 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <FaGraduationCap className="mr-2 text-yellow-300 text-2xl" />
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              </div>
              <p className="text-md text-blue-200 mb-2">{edu.institution}</p>
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="mr-2 text-green-300 text-lg" />
                <p className="text-sm text-white">{edu.period}</p>
              </div>
              <div className="flex items-center text-white mt-auto">
                <FaChevronRight className="mr-2 text-pink-300 flex-shrink-0" />
                <span className="text-sm">Score: {edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Additional Training
          </span>
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainings.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
              className="bg-gradient-to-br from-green-900/30 to-blue-900/30 p-6 rounded-lg backdrop-blur-sm flex flex-col border border-green-500/20 hover:border-blue-500/40 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <FaCertificate className="mr-2 text-yellow-300 text-2xl" />
                <h3 className="text-xl font-semibold text-white">{training.course}</h3>
              </div>
              <p className="text-md text-green-200">{training.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EducationTraining;