import React, { useState } from "react";
import "./Header.css";
import profileImage from "../assets/sathes-profile.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Portfolio</div>
        <div className={`nav-links-container ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Education</li>
            <li className="connect-button">Connect</li>
          </ul>
        </div>
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <span className="badge">⭐ Front-End Developer</span>
          <h1>
            I am Passionated in web Developement <br /> and App Developement
          </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipiscing.</p>
          <div className="buttons">
            <a href="path-to-cv.pdf" className="dowload-btn" download="YourCVName.pdf">
              Download CV
            </a>
            <a href="#working-style-section" className="wrk-btn">
              <i className="fa-solid fa-play"></i>Working Style
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
