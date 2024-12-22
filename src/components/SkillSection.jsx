import React from 'react';
import './SkillSection.css';

const skills = [
  { name: 'Figma', image: 'https://storage.googleapis.com/a1aa/image/uH8fqdGfXXgUA0lSZT9lbRq4L1RgVIG4cJv5qMbpzCwstp8TA.jpg', percentage: '95%' },
  { name: 'Framer', image: 'https://storage.googleapis.com/a1aa/image/mxIuAvlL5zqlMtiN0JwRMAPLi0YmS4GfznY1qBWQ86Y82UeTA.jpg', percentage: '83%' },
  { name: 'Photoshop', image: 'https://storage.googleapis.com/a1aa/image/rgjYxnL9U7qPPJqHfIpxTOHBxiKplZSxce69NaFipuwvtp8TA.jpg', percentage: '93%' },
  { name: 'Wordpress', image: 'https://storage.googleapis.com/a1aa/image/EiMouxyxWo57JxCIebTSeLTLdvWWsOHT7Q3OeTGyz61mbT5nA.jpg', percentage: '84%' },
  { name: 'Angular', image: 'https://storage.googleapis.com/a1aa/image/FlZckXQ9mW4ZONKcw29pAuuABIs8pxi4XI7hk4zATkWbbKfJA.jpg', percentage: '65%' },
  { name: 'Webflow', image: 'https://storage.googleapis.com/a1aa/image/tUVMYYxbULoZDZS2yx3MV7dwBWyu6J6rOo9aeIs7Y3v42UeTA.jpg', percentage: '86%' },
  { name: 'Python', image: 'https://storage.googleapis.com/a1aa/image/GbcscdXfH6y5ES1L5LTLMgKiHkVft86i6WYHOfTGRzotbT5nA.jpg', percentage: '62%' },
  { name: 'Sketch', image: 'https://storage.googleapis.com/a1aa/image/T74x13LoitZsJpCdKHWDTIe8I0027G4kaUOltwQI3Gv62UeTA.jpg', percentage: '94%' },
];

const SkillsSection = () => {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <p>My Skills</p>
        <h1>
          Let's Explore Popular <span>Skills & Experience</span>
        </h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium
          doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo
          inventore veritatis.
        </p>
        <a className="btn" href="#home">
          Learn More <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.image} alt={`${skill.name} logo`} />
            <p>{skill.name}</p>
            <div className="percentage">{skill.percentage}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
