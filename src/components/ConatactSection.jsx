import React, { useState, useEffect } from "react";
import man from "../assets/ma.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  // State for controlling the popup modal visibility
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Set up the intersection observer
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Start animation when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  // Handlers for popup visibility
  const handleOpenPopup = () => setPopupVisible(true);
  const handleClosePopup = () => setPopupVisible(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="relative py-20 font-poppins overflow-hidden" id="contact">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#4A4A4A] opacity-10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4A4A4A] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex justify-center items-center text-[#c0c0c0] px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="relative w-full rounded-2xl border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px] p-8 md:p-12 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-tr from-gray-400 to-gray-700 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-tr from-gray-400 to-gray-700 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10">
            {/* Profile Section */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-10"
            >
              <div className="flex items-center gap-3">
                <img
                  src={man}
                  alt="Profile"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full p-1 border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.5)]"
                />
                <div className="h-8 w-[1px] bg-[rgba(192,192,192,0.3)] hidden md:block"></div>
              </div>
              
              <div>
                <span className="border border-[rgba(68,68,68,0.6)] bg-[rgba(17,17,17,0.4)] backdrop-blur-sm text-gray-300 px-5 py-2 rounded-full text-sm md:text-base font-light inline-flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available for work
                </span>
              </div>
            </motion.div>

            {/* Heading and Description */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-light mb-6 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-[#c0c0c0] to-[#8a8a8a]"
            >
              Drop me a line or say <span className="inline-block transform hover:rotate-12 transition-transform duration-300">👋</span> on social networks
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-[#9c9c9c] text-base md:text-lg mb-10 text-center md:text-left leading-relaxed"
            >
              Whether you're a design team in need of support or an early-stage
              company looking to level up your design, I'd love to talk about your
              project <span className="text-purple-400">💜</span>
            </motion.p>

            {/* Contact grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
            >
              {/* Left side - Social Icons */}
              <div className="space-y-6">
                <h3 className="text-xl font-light mb-4">Connect with me</h3>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(68,68,68,0.4)] text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(68,68,68,0.4)] text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(68,68,68,0.4)] text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
                    aria-label="Dribbble"
                  >
                    <i className="fab fa-dribbble text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(68,68,68,0.4)] text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
                    aria-label="Figma"
                  >
                    <i className="fab fa-figma text-lg"></i>
                  </a>
                </div>
                
                <div className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(68,68,68,0.4)] flex items-center justify-center">
                      <i className="fas fa-envelope text-sm text-gray-400"></i>
                    </div>
                    <span className="text-gray-300">youremail@example.com</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(68,68,68,0.4)] flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-sm text-gray-400"></i>
                    </div>
                    <span className="text-gray-300">Your Location</span>
                  </div>
                </div>
              </div>
              
              {/* Right side - Quick Contact Form */}
              <div className="bg-[rgba(17,17,17,0.4)] backdrop-blur-sm border border-[rgba(68,68,68,0.4)] rounded-xl p-6">
                <h3 className="text-xl font-light mb-4">Send a quick message</h3>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(68,68,68,0.6)] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(68,68,68,0.6)] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your message"
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(68,68,68,0.6)] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[rgba(17,17,17,0.6)] backdrop-blur-[15px] border border-[rgba(68,68,68,0.6)] text-gray-300 py-3 rounded-lg hover:bg-[rgba(68,68,68,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                      <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                    </svg>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center md:justify-start mt-8"
            >
              <button
                onClick={handleOpenPopup}
                className="group relative overflow-hidden py-4 px-8 rounded-full border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px] text-gray-300 hover:text-white transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-2 text-lg font-light">
                  Let's create magic together 
                  <span className="transform transition-transform duration-300 group-hover:rotate-12">✨</span>
                </span>
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-[rgba(68,68,68,0.4)] to-[rgba(68,68,68,0.2)] transition-all duration-500 group-hover:w-full"></div>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Popup Modal */}
      {isPopupVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50 px-4"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[rgba(17,17,17,0.8)] backdrop-blur-[15px] p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.3)] w-full max-w-[550px] border border-[rgba(68,68,68,0.6)]"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-light text-white">Get in touch</h2>
              <button
                onClick={handleClosePopup}
                className="text-gray-400 hover:text-white transition-colors duration-300 w-8 h-8 rounded-full flex items-center justify-center border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.3)]"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <form className="space-y-5">
              <div>
                <label className="text-gray-400 text-sm block mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(68,68,68,0.6)] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="text-gray-400 text-sm block mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(68,68,68,0.6)] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="text-gray-400 text-sm block mb-2">Message</label>
                <textarea
                  placeholder="Tell me about your project"
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(68,68,68,0.6)] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
                  rows="5"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[rgba(68,68,68,0.8)] to-[rgba(48,48,48,0.8)] text-white py-4 rounded-lg shadow-md text-center font-light text-lg flex items-center justify-center gap-2 hover:from-[rgba(78,78,78,0.8)] hover:to-[rgba(58,58,58,0.8)] transition-all duration-300"
              >
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactSection;
