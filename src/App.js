import React from "react";
import Header from "./components/Header";
import TextScrolling from "./components/TextScrolling";
import AboutSection from "./components/AboutSection";
import './App.css';
import SkillsSection from "./components/SkillSection";

function App() {
  return (
    <div className="app">
      <Header />
      <TextScrolling />
      <AboutSection/>
      <SkillsSection/>
    </div>
  );
}

export default App;