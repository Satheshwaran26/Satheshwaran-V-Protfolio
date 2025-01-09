import React from "react";
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
  <div className="mb-10">
    <h2 className="text-2xl text-[#535353] font-light mb-5 uppercase">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center bg-[#2e2e2e31] border border-[#232323] rounded-lg p-4 hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-200 h-[58px] w-full backdrop-blur-[15px]"
        >
          <img
            src={skill.image}
            alt={`${skill.name} logo`}
            className="w-12 h-12 p-1 font-[100]"
          />
          <span className="text-lg font-[400] text-[#c0c0c0] pl-4">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skill = () => {
  const backendSkills = [
    { name: "HTML5", image: Htmllogo },
    { name: "CSS3", image: diconLogo },
    { name: "JavaScript", image: Javascriptlogo },
    { name: "React JS", image: reactLogo },
    { name: "Tailwind CSS", image: Tailwindlogo },
    { name: "Bootstrap", image: Bootstrap },
    { name: "Flutter", image: Fluttre },
  ];

  const frontendSkills = [
    { name: "Node JS", image: Node },
    { name: "Express JS", image: bvk },
    { name: "Python", image: python },
    { name: "Firebase", image: firbase },
    { name: "MySQL", image: mysql },
    { name: "Email JS", image: email },
    { name: "MongoDB", image: mongo },
  ];

  const tools = [
    { name: "VS Code", image: vscode },
    { name: "Git", image: gitlogo },
    { name: "GitHub", image: github },
    { name: "Netlify", image: netlifylogo },
    { name: "Vercel", image: Vercel },
    { name: "Canva", image: canva },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-5 py-10">
      <h1 className="text-left mb-10 text-3xl text-[#C0c0c0] font-light">
        TECHNOLOGIEËN
      </h1>
      <SkillSection title="Frontend" skills={backendSkills} />
      <SkillSection title="Backend" skills={frontendSkills} />
      <SkillSection title="Tools" skills={tools} />
    </div>
  );
};

export default Skill;
