import React from "react";
import "./AboutSection.css";
import profileImage from '../assets/sathes-profile.jpg';; // Add your profile image path


const AboutSection = () => {
  return (
    <div className="about-container">
      {/* Left Section */}
      <div className="profile-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-name">Satheshwaran</div>
      </div>
      {/* Right Section */}
      <div className="about-content">
        <h2 className="about-title">ABOUT ME</h2>
        <h1 className="about-heading">
          Professional Web Developer and <br /> App Developer
        </h1>
        <p className="about-description">
          We shifted our talents to frontier science because we wanted our work
          to have tangible, human-positive impact.
        </p>


        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-square-github"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-x-twitter"></i>
          </a>
        </div>

        {/* Contact Section */}
        <div class="contact-section">
  <div class="contact-card">
    <div class="icon-container">
      <i class="fas fa-envelope"></i>
    </div>
    <div class="text-container">
      <p>Email Us</p>
      <span>sathes68787i@gmail.com</span>
    </div>
  </div>
  <div class="contact-card">
    <div class="icon-container">
      <i class="fas fa-phone"></i>
    </div>
    <div class="text-container">
      <p>Contact Us</p>
      <span>+91 8784397913</span>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default AboutSection;
