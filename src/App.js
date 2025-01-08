import React from "react";
import Header from "./components/Header";
import TextScrolling from "./components/TextScrolling";
import './App.css';
import Skill from "./components/SkillSection";
import Projects from "./components/Projectsection";
import Qualification from "./components/Timeline ";


function App() {
  return (
    <div className="app">
      <Header />
      <TextScrolling />
      <Skill />
      <Projects />
      
    </div>
  );
}

export default App;