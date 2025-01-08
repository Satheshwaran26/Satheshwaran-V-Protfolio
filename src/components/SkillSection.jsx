// File: Skill.jsx
import React from "react";
import "./SkillSection.css";
import reactLogo from "../assets/react.png";
import diconLogo from "../assets/css.png";
import Htmllogo from "../assets/html (1).png";
import Javascriptlogo from "../assets/javascript (1).png";
import Tailwindlogo from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";
import Fluttre from "../assets/flutter (1).png";
import Node from "../assets/nodejs.png";
import python from "../assets/python (1).png";
import firbase from "../assets/firebase.png";
import mysql from "../assets/mysql.png";
import email from "../assets/emailjs.png";
import mongo from "../assets/mongo-db.png";
import vscode from "../assets/vs.png";
import gitlogo from "../assets/git.png";
import bvk from "../assets/ex.png";
import github from "../assets/github.png";
import netlifylogo from "../assets/netlify.png";
import Vercel from "../assets/vercel.png";
import canva from "../assets/canva.png";
const SkillSection = ({ title, skills }) => (
  <div className="section">
    <h2>{title}</h2>
    <div className="grid">
      {skills.map((skill, index) => (
        <div className="card" key={index}>
          <img
            src={skill.image}
            alt={`${skill.name} logo`}
            width="25"
            height="25"
          />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skill = () => {
  const backendSkills = [
    {
      name: "HTML5",
      image: Htmllogo,
    },
    {
      name: "CSS3",
      image: diconLogo,
    },
    {
      name: "JavaScript",
      image:
        Javascriptlogo,
    },
    {
      name: "React JS",
      image:
        reactLogo,
    },
    {
      name: "Tailwind CSS",
      image:
        Tailwindlogo,
    },
    {
      name: "Bootstrap",
      image:
        Bootstrap,
    },
    {
      name: "Flutter",
      image:
        Fluttre,
    },

  ];

  const frontendSkills = [
    {
      name: "Node JS",
      image:
        Node,
    },
    {
      name: "Express JS",
      image: bvk
        ,
    },
    {
      name: "Python",
      image:python
        ,
    },
    {
      name: "Firebase",
      image:
        firbase,
    },
    {
      name: "MySQL",
      image:
        mysql,
    },
    {
      name: "Email JS",
      image:
        email,
    },
   
    {
      name: "MongoDB",
      image:
        mongo,
    },
  ];

  const tools = [
    {
      name: "VS Code",
      image:
        
      vscode,
    },
    {
      name: "Git",
      image:
        gitlogo,
    },
    {
      name: "GitHub",
      image:
        github,
    },
    {
      name: "Netlify",
      image:
       netlifylogo,
    },
    {
      name: "Vercel",
      image:
       Vercel,
    },
    {
      name: "Canva",
      image:
       canva,
    },
  ];

  return (
    <div className="container">
      <h1 className="titlehead">TECHNOLOGIEËN</h1>
      <SkillSection title="Frontend" skills={backendSkills} />
      <SkillSection title="Backend" skills={frontendSkills} />
      <SkillSection title="Tools" skills={tools} />
    </div>
  );
};

export default Skill;
