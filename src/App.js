import React from "react";
import Header from "./components/Header";
import TextScrolling from "./components/TextScrolling";
import './App.css';
import Skill from "./components/Skill";
import Projects from "./components/Projectsection";

import ContactSection from "./components/ConatactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <TextScrolling />
      <Skill />
      <Projects />
      <ContactSection />
      <Footer/>
    </div>
  );
}

export default App;