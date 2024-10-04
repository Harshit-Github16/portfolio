
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaExternalLinkAlt, FaMousePointer } from 'react-icons/fa';

const projects = [
  {
    title: 'Pet Store Website',
    description:
      'A dynamic and responsive e-commerce platform for pet supplies with a user-friendly design, secure checkout, and real-time inventory tracking.',
    imgSrc: 'https://picsum.photos/seed/pet/400/300',
    link: '#',
  },
  {
    title: 'Commercial Website',
    description:
      'A professional corporate website designed for commercial businesses, focusing on services, client engagement, and showcasing products.',
    imgSrc: 'https://picsum.photos/seed/commercial/400/300',
    link: '#',
  },
  {
    title: 'Hospital Management CRM',
    description:
      'A comprehensive CRM built for managing hospital operations, patient records, appointments, and billing with various administrative consoles.',
    imgSrc: 'https://picsum.photos/seed/hospital/400/300',
    link: '#',
  },
  {
    title: 'Inventory Management CRM',
    description:
      'A streamlined CRM solution for tracking stock, orders, and supplier information in real-time for businesses with high inventory turnover.',
    imgSrc: 'https://picsum.photos/seed/inventory/400/300',
    link: '#',
  },
  {
    title: 'LMS (Learning Management System)',
    description:
      'An interactive platform designed for online learning, featuring multiple consoles for instructors, students, and admins to manage content, assignments, and grades.',
    imgSrc: 'https://picsum.photos/seed/lms/400/300',
    link: '#',
  },
  {
    title: 'Admin Console Dashboards',
    description:
      'A set of intuitive and powerful admin dashboards designed for managing backend operations, analytics, and user management across various platforms.',
    imgSrc: 'https://picsum.photos/seed/admin/400/300',
    link: '#',
  },
];

const ProjectSection = () => {
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

  return (
    <motion.section
      animate={controls}
      className="relative w-full py-16 overflow-hidden bg-black text-white"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 25%)`,
      }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzE3MTcxNyI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMzNDM0MzQiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            A collection of diverse projects ranging from e-commerce platforms to CRM systems and interactive dashboards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-600"
                >
                  View Project <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gray-400 mb-2">Explore more projects</span>
        <FaMousePointer className="text-2xl animate-bounce" />
      </motion.div>
    </motion.section>
  );
};

export default ProjectSection;