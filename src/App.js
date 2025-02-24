import React from "react";
import Header from "./components/Header";
import TextScrolling from "./components/TextScrolling";
import './App.css';
import Skill from "./components/Skill";
import Projects from "./components/Projectsection";
import Qualification from "./components/Timeline ";
import ContactSection from "./components/ConatactSection";
import Footer from "./components/Footer";
import Flowchart from "./components/Flowchart.jsx"
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