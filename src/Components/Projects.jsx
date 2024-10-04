import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaMousePointer, FaCode, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Pet Store Website',
    description: 'A dynamic and responsive e-commerce platform for pet supplies with a user-friendly design, secure checkout, and real-time inventory tracking.',
    imgSrc: 'https://picsum.photos/seed/pet/400/300',
    link: '#',
    tech: ['React', 'Node.js', 'MongoDB'],
    duration: '3 months'
  },
  {
    title: 'Commercial Website',
    description: 'A professional corporate website designed for commercial businesses, focusing on services, client engagement, and showcasing products.',
    imgSrc: 'https://picsum.photos/seed/commercial/400/300',
    link: '#',
    tech: ['Vue.js', 'Express', 'PostgreSQL'],
    duration: '2 months'
  },
  {
    title: 'Hospital Management CRM',
    description: 'A comprehensive CRM built for managing hospital operations, patient records, appointments, and billing with various administrative consoles.',
    imgSrc: 'https://picsum.photos/seed/hospital/400/300',
    link: '#',
    tech: ['Angular', 'Django', 'MySQL'],
    duration: '6 months'
  },
  {
    title: 'Inventory Management System',
    description: 'A streamlined solution for tracking stock, orders, and supplier information in real-time for businesses with high inventory turnover.',
    imgSrc: 'https://picsum.photos/seed/inventory/400/300',
    link: '#',
    tech: ['React', 'Flask', 'SQLite'],
    duration: '4 months'
  },
  {
    title: 'Learning Management System',
    description: 'An interactive platform designed for online learning, featuring multiple consoles for instructors, students, and admins to manage content, assignments, and grades.',
    imgSrc: 'https://picsum.photos/seed/lms/400/300',
    link: '#',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    duration: '5 months'
  },
  {
    title: 'Admin Console Dashboards',
    description: 'A set of intuitive and powerful admin dashboards designed for managing backend operations, analytics, and user management across various platforms.',
    imgSrc: 'https://picsum.photos/seed/admin/400/300',
    link: '#',
    tech: ['React', 'Express', 'PostgreSQL'],
    duration: '3 months'
  },
];

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black bg-opacity-50 rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-0"
        animate={{ opacity: isExpanded ? 0.2 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative">
        <motion.img
          src={project.imgSrc}
          alt={project.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      </div>
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-4">{project.description}</p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-2">
                <FaCode className="mr-2 text-blue-300" />
                <p className="text-sm text-yellow-200">{project.tech.join(', ')}</p>
              </div>
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="mr-2 text-green-300" />
                <p className="text-sm text-white">Duration: {project.duration}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project <FaExternalLinkAlt className="ml-2" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const ProjectSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzE3MTcxNyI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMzNDM0MzQiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-20"></div>
      
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 25%)`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center min-h-screen">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Projects</span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 text-center mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore a diverse collection of projects that showcase my skills and expertise in web development and software engineering.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

     

      <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#171717" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  );
};

export default ProjectSection;