import React from "react";

const Flowchart = () => {
  return ( 
    <svg width="100%" height="2000" viewBox="0 0 1200 2000" xmlns="http://www.w3.org/2000/svg">
      {/* Title */}
      <text x="600" y="40" fontSize="24" fontWeight="bold" textAnchor="middle">Frontend Development Roadmap</text>
      
      {/* Section 1: Basics */}
      <rect x="100" y="80" width="200" height="50" fill="#FFD700" stroke="black" strokeWidth="2" />
      <text x="200" y="110" fontSize="16" fontWeight="bold" textAnchor="middle">HTML & CSS</text>

      <rect x="100" y="140" width="200" height="50" fill="#FFD700" stroke="black" strokeWidth="2" />
      <text x="200" y="170" fontSize="16" fontWeight="bold" textAnchor="middle">JavaScript</text>

      {/* Section 2: Frameworks */}
      <rect x="400" y="140" width="200" height="50" fill="#87CEFA" stroke="black" strokeWidth="2" />
      <text x="500" y="170" fontSize="16" fontWeight="bold" textAnchor="middle">React.js</text>

      <rect x="400" y="200" width="200" height="50" fill="#87CEFA" stroke="black" strokeWidth="2" />
      <text x="500" y="230" fontSize="16" fontWeight="bold" textAnchor="middle">Vue.js</text>
      
      {/* Section 3: Tools & Technologies */}
      <rect x="700" y="140" width="200" height="50" fill="#90EE90" stroke="black" strokeWidth="2" />
      <text x="800" y="170" fontSize="16" fontWeight="bold" textAnchor="middle">Version Control (Git)</text>
      
      <rect x="700" y="200" width="200" height="50" fill="#90EE90" stroke="black" strokeWidth="2" />
      <text x="800" y="230" fontSize="16" fontWeight="bold" textAnchor="middle">Package Managers (NPM/Yarn)</text>

      {/* Arrows */}
      <line x1="200" y1="130" x2="200" y2="140" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="300" y1="165" x2="400" y2="165" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="600" y1="165" x2="700" y2="165" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Arrow Definition */}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="black" />
        </marker>
      </defs>
    </svg>
  );
};

export default Flowchart;
