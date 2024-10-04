import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineComment,
  AiOutlineMail,
  AiOutlineEnvironment,
} from 'react-icons/ai';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [feedback, setFeedback] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [result, setResult] = useState('');
  const controls = useAnimation();
  
  const onSubmit = async (event) => {
    debugger
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1bfdeb48-65d3-484e-9cd1-26eecd328979");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setName('');
        setEmail('');
        setMobileNo('');
        setFeedback('');
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

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
      animate={controls}
      className="relative w-full min-h-screen overflow-hidden bg-black text-white py-16"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 25%)`,
      }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzE3MTcxNyI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMzNDM0MzQiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-12 text-center"
        >
          <span className="block transform hover:scale-110 transition-transform duration-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Get in Touch
          </span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row justify-between items-start space-y-12 lg:space-y-0 lg:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-300">
                  <AiOutlineUser className="mr-2 text-blue-400" /> Name
                </label>
                <input
                  type="text"
                  name='name'
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full p-3 bg-transparent text-white placeholder-gray-500 border border-blue-500/30 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-300">
                  <AiOutlineMail className="mr-2 text-blue-400" /> Email
                </label>
                <input
                  type="email"
                  name='email'
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full p-3 bg-transparent text-white placeholder-gray-500 border border-blue-500/30 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                  placeholder="Enter your Email"
                />
              </div>

              <div>
                <label htmlFor="mobileNo" className="flex items-center text-sm font-medium text-gray-300">
                  <AiOutlinePhone className="mr-2 text-blue-400" /> Mobile No
                </label>
                <input
                  type="tel"
                  id="mobileNo"
                  name='mobileNo'
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  required
                  className="mt-1 block w-full p-3 bg-transparent text-white placeholder-gray-500 border border-blue-500/30 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                <label htmlFor="feedback" className="flex items-center text-sm font-medium text-gray-300">
                  <AiOutlineComment className="mr-2 text-blue-400" /> Feedback
                </label>
                <textarea
                  id="feedback"
                  value={feedback}
                  name='feedback'
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                  className="mt-1 block w-full p-3 bg-transparent text-white placeholder-gray-500 border border-blue-500/30 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                  rows="4"
                  placeholder="Enter your feedback"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-700 transition duration-300"
              >
                Submit
              </motion.button>
              {result && (
                <div className={`mt-4 p-3 rounded-md ${result.includes("Successfully") ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"}`}>
                  {result}
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-lg backdrop-blur-sm border border-blue-500/20"
          >
            <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Contact Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <AiOutlineUser className="mr-3 text-blue-400" />
                <span><strong className="text-purple-300">Name:</strong> Harshit Sharma</span>
              </div>
              <div className="flex items-center">
                <AiOutlinePhone className="mr-3 text-blue-400" />
                <span><strong className="text-purple-300">Mobile No:</strong> 7976696076</span>
              </div>
              <div className="flex items-center">
                <AiOutlineMail className="mr-3 text-blue-400" />
                <span><strong className="text-purple-300">Email:</strong> harshit0150@gmail.com</span>
              </div>
              <div className="flex items-start">
                <AiOutlineEnvironment className="mr-3 text-blue-400 mt-1" />
                <span>
                  <strong className="text-purple-300">Address:</strong> Bhutanadi, Inside Chandpole, Near Police Chouki, Chandpole, Jodhpur, Rajasthan 342001
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-300">Connect with me</h4>
              <div className="flex space-x-4">
                {socialIcons.map(({ href, icon: Icon, color }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-3xl"
                    style={{ color }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;