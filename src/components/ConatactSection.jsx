import React from "react";
import man from "../assets/ma.png";

const ContactSection = () => {
  return (
    <div className="flex justify-center items-center text-[#c0c0c0] p-6 font-poppins">
      <div className="relative max-w-[1600px] w-full lg:w-[1300px] rounded-lg border border-[#414040] p-6 md:p-10 overflow-hidden">
        {/* Blurred Silver Circle */}
        <div className="absolute -top-10 -left-10 w-40 h-40 md:w-56 md:h-56 bg-gradient-to-tr from-gray-300 to-gray-900 rounded-full blur-2xl md:blur-3xl opacity-20"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tr from-gray-300 to-gray-900 rounded-full blur-2xl md:blur-3xl opacity-20"></div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row text-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
  {/* Profile Picture */}
  <img
    src={man}
    alt="Profile"
    className="w-8 h-8 md:w-16 md:h-16"
  />
  {/* Available Badge */}
  <div className="flex items-center space-x-2">
    <span className="border text-white px-4 py-2 items-center font-thin rounded-full text-[1.1em] md:text-[1.2em]">
      🚀 Available for work
    </span>
  </div>
</div>


        {/* Heading and Description */}
        <h1 className="text-2xl md:text-3xl font-light mb-4 text-center md:text-left">
          Drop me a line or say 👋 on social networks
        </h1>
        <p className="text-[#616161] text-[1em] md:text-[1.2em] mb-6 text-center md:text-left">
          Whether you're a design team in need of support or an early-stage
          company looking to level up your design, I'd love to talk about your
          project 💜
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6 mb-6">
          <a
            href="#"
            className="text-gray-400 transition duration-300 text-xl md:text-2xl"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 transition duration-300 text-xl md:text-2xl"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 transition duration-300 text-xl md:text-2xl"
            aria-label="Dribbble"
          >
            <i className="fab fa-dribbble"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 transition duration-300 text-xl md:text-2xl"
            aria-label="Figma"
          >
            <i className="fab fa-figma"></i>
          </a>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center md:justify-start">
          <button className="border text-white py-3 px-4 md:px-6 rounded-lg shadow-md text-sm md:text-[1.1em] font-light">
            Let’s create magic together ✨
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
