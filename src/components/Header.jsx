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
      <nav className="flex justify-between items-center p-5 h-16 max-w-[90%] md:max-w-[620px] mx-auto border border-[rgba(68,68,68,0.4)] rounded-full bg-[rgba(17,17,17,0.37)] backdrop-blur-[15px] mt-4">
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
        className={`absolute md:relative top-16 left-0 md:top-0 md:left-auto w-full md:w-auto bg-[rgba(17,17,17,0.9)] md:bg-transparent backdrop-blur-[15px] md:backdrop-blur-none border md:border-none border-[rgba(68,68,68,0.4)] rounded-lg md:rounded-none md:flex items-center justify-center transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row list-none text-center font-light items-center gap-6"
        >
          <li className="cursor-pointer text-[1.1em] text-[#c0c0c0]">Home</li>
          <li href="#Skill" className="cursor-pointer text-[1.1em] text-[#c0c0c0]">
            Skills
          </li>
          <li
            href="projects"
            className="cursor-pointer text-[1.1em] text-[#c0c0c0]"
          >
            Projects
          </li>
          <li className="cursor-pointer text-[1.1em] text-[#c0c0c0]">Contact</li>
          <li className="border border-[rgba(94,93,93,0.4)] py-2 px-3.5 ml-2.5 text-xl rounded-full cursor-pointer text-[#c0c0c0]">
            Connect
          </li>
        </motion.ul>
      </motion.div>

      {/* Hamburger Icon */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: menuOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer md:hidden"
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

      {/* Hero Section */}
      <div className="hero-section xl:pt-[80px] pb-[70px] flex flex-col md:flex-row items-center justify-between max-w-[90%] md:max-w-[1650px] mx-auto mt-20 px-5 text-center md:text-left">
      {/* Profile Image */}
      <motion.div
        className="order-1 md:order-2 mt-8 mb-4 md:mt-0 flex justify-center md:justify-end w-full md:mr-[30px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={profileImage}
          alt="Profile Picture of the Developer"
          className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] p-2 bg-[rgba(94,93,93,0.12)] border-2 border-dotted border-[rgba(94,93,93,0.4)] rounded-full object-cover shadow-[0_0_100px_#000]"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Role Badge */}
        <motion.span
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-block py-2 px-4 border border-[#c0c0c0] text-gray-300 rounded-full text-[0.9em] sm:text-[1em] md:text-[1.2em] mb-4 font-[200]"
        >
          ⭐ Front-End Developer
        </motion.span>

        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[1.4em] sm:text-[1.2em] md:text-[2.2em] text-[#c0c0c0] font-[200]"
        >
          Hi, I am Satheshwaran V 👋,
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-[1.8em] sm:text-[1.5em] md:text-[2.5em] font-extralight mb-[8px] mt-[4px] w-[90%] md:w-[800px] max-w-full text-[#AEAEAE] font-poppins"
        >
          I am Passionate in Web Development and App Development
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-1 mb-8 font-extralight text-[1em] sm:text-[1em] md:text-[1.1em] text-[#C0C0C0]"
        >
          Crafting beautiful, user-centered experiences that shine with
          creativity and innovation.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-col md:flex-row sm:space-x-4 h-auto text-[0.9em] sm:text-[1em] md:text-[1.2em] font-[200]"
        >
          <a
            href="path-to-cv.pdf"
            className="py-3 px-6 border border-[#292929] text-gray-300 rounded-full text-center mb-4 sm:mb-0"
            download="YourCVName.pdf"
          >
            Download CV
          </a>
          <a
            href="#working-style-section"
            className="py-3 px-6 border border-[#292929] text-gray-300 rounded-full text-center"
          >
            Working Style
          </a>
        </motion.div>
      </motion.div>
    </div>
    </header>
  );
}

export default Header;
