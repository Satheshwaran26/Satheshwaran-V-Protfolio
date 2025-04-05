import React, { useState } from "react";
import profileImage from "../assets/sathes-profile.jpg";
import { motion } from "framer-motion";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative text-[#c0c0c0] font-poppins overflow-hidden">
      {/* Blur Circle */}
      <div className="absolute -top-20 -left-40 w-[400px] h-[400px] bg-[#4A4A4A] opacity-50 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-40 w-[300px] h-[300px] bg-[#4A4A4A] opacity-50 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 h-16 max-w-[90%] md:max-w-[620px] mx-auto border border-[rgba(68,68,68,0.4)] rounded-full mt-4 bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px] relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[1.5em] font-extralight text-white"
        >
          Portfolio
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`absolute md:relative top-20 left-0 md:top-0 md:left-auto w-full md:w-auto bg-[rgba(17,17,17,0.9)] md:bg-transparent backdrop-blur-[15px] md:backdrop-blur-none border md:border-none border-[rgba(68,68,68,0.4)] rounded-lg md:rounded-none md:flex items-center justify-center transition-all duration-300 z-[40] ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row list-none text-center font-light items-center gap-6 py-6 md:py-0"
          >
            <li className="cursor-pointer text-[1.1em] text-[#c0c0c0] hover:text-white transition-colors duration-300">Home</li>
            <li className="cursor-pointer text-[1.1em] text-[#c0c0c0] hover:text-white transition-colors duration-300">
              Skills
            </li>
            <li
              className="cursor-pointer text-[1.1em] text-[#c0c0c0] hover:text-white transition-colors duration-300"
            >
              Projects
            </li>
            <li className="cursor-pointer text-[1.1em] text-[#c0c0c0] hover:text-white transition-colors duration-300">Contact</li>
            <li className="border border-[rgba(94,93,93,0.4)] py-2 px-3.5 mt-2 md:mt-0 md:ml-2.5 text-xl rounded-full cursor-pointer text-[#c0c0c0] hover:bg-[rgba(68,68,68,0.2)] hover:text-white transition-all duration-300">
              Connect
            </li>
          </motion.ul>
        </motion.div>

        {/* Hamburger Icon */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer md:hidden z-[50]"
          onClick={toggleMenu}
        >
          <motion.span
            initial={{ scale: 1 }}
            animate={{ scale: menuOpen ? 0.8 : 1 }}
            className="block w-6 h-0.5 bg-white mb-1"
          ></motion.span>
          <motion.span
            className="block ml-2 w-4 h-0.5 bg-white mb-1"
          ></motion.span>
          <motion.span className="block ml-4 w-2 h-0.5 bg-white"></motion.span>
        </motion.div>
      </nav>

      {/* Hero Section - Fixed responsive layout issues */}
      <div className="hero-section pt-[40px] md:pt-[60px] xl:pt-[80px] pb-[70px] flex flex-col lg:flex-row items-center justify-between max-w-[90%] md:max-w-[1650px] mx-auto mt-10 md:mt-20 px-4 md:px-5 text-center lg:text-left">
        
        {/* Text Section - Now appears first on mobile and desktop */}
        <motion.div
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Role Badge */}
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block py-2 px-4 border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px] text-gray-300 rounded-full text-[0.9em] sm:text-[1em] md:text-[1.2em] mb-4 font-[200]"
          >
            <span className="flex items-center">
              <span className="w-2 h-2 bg-[#ffcc66] rounded-full mr-2"></span>
              Front-End Developer
            </span>
          </motion.span>

          {/* Headings */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[1.4em] sm:text-[1.6em] md:text-[2.2em] text-[#c0c0c0] font-[200]"
          >
            Hi, I am <span className="text-white">Satheshwaran V</span> 👋
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-[1.2em] sm:text-[1.5em] md:text-[2.2em] font-extralight mb-[10px] mt-[8px] max-w-full text-[#AEAEAE] font-poppins"
          >
            I am Passionate in Web Development and App Development
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-1 mb-8 font-extralight text-[0.9em] sm:text-[1em] md:text-[1.1em] text-[#C0C0C0] max-w-[600px]"
          >
            Crafting beautiful, user-centered experiences that shine with
            creativity and innovation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:space-x-4 h-auto text-[0.9em] sm:text-[1em] md:text-[1.2em] font-[200] w-full sm:w-auto"
          >
            <a
              href="path-to-cv.pdf"
              className="py-3 px-6 border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px] text-gray-300 rounded-full text-center hover:border-[rgba(120,120,120,0.4)] hover:text-white transition-all duration-300 w-full sm:w-auto"
              download="YourCVName.pdf"
            >
              Download CV
            </a>
            <a
              href="#working-style-section"
              className="py-3 px-6 border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px] text-gray-300 rounded-full flex items-center justify-center hover:border-[rgba(120,120,120,0.4)] hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              <span>Working Style</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-2 bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Profile Image - Now appears second on mobile and desktop */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end w-full lg:w-1/2 mb-8 lg:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[rgba(94,93,93,0.12)] rounded-full blur-md"></div>
            <img
              src={profileImage}
              alt="Profile Picture of the Developer"
              className="relative z-10 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] p-2 bg-[rgba(94,93,93,0.12)] border-2 border-dotted border-[rgba(94,93,93,0.4)] rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>

    </header>
  );
}

export default Header;
