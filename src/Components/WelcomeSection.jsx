import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaMousePointer } from 'react-icons/fa';

const WelcomeSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundRef = useRef(null);
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

  const socialIcons = [
    { href: "https://wa.me/7976696076", icon: FaWhatsapp, color: "#25D366" },
    { href: "https://www.instagram.com/harshit_0150", icon: FaInstagram, color: "#E1306C" },
    { href: "https://www.linkedin.com/in/your-linkedin", icon: FaLinkedin, color: "#0077B5" }
  ];

  return (
    <motion.section
      ref={backgroundRef}
      animate={controls}
      className="relative w-full h-screen overflow-hidden bg-black text-white"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 25%)`,
      }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzE3MTcxNyI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMzNDM0MzQiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 relative">
            <span className="block transform hover:scale-110 transition-transform duration-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Harshit Sharma
            </span>
          </h1>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-300"
          >
            Front-End Developer & UX Enthusiast
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative w-64 h-64 md:w-80 md:h-80 mt-12"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="none" stroke="url(#gradient)" strokeWidth="0.5">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="20s"
                repeatCount="indefinite"
              />
            </circle>
            {[...Array(12)].map((_, i) => (
              <circle
                key={i}
                cx="50"
                cy="2"
                r="1"
                fill="#fff"
                transform={`rotate(${i * 30} 50 50)`}
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from={`${i * 30} 50 50`}
                  to={`${i * 30 + 360} 50 50`}
                  dur="20s"
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </svg>
          <motion.img
            src="https://picsum.photos/400/400?random=2"
            alt="Harshit Sharma"
            className="absolute inset-0 w-full h-full rounded-full object-cover"
            style={{ clipPath: 'circle(47%)' }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-12 flex space-x-6"
        >
          {socialIcons.map(({ href, icon: Icon, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-4xl"
              style={{ color }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center max-md:hidden"
      >
        <span className="text-gray-400 mb-2 ">Scroll to explore</span>
        <FaMousePointer className="text-2xl animate-bounce" />
      </motion.div>
    </motion.section>
  );
};

export default WelcomeSection;