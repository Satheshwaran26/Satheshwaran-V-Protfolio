import React from 'react';
import './Projectsection.css';
import linkIcon from '../assets/link-icon.png'; // Adjust the path as necessary

const Projects = () => {
  const projectData = [
    {
      imgSrc: "https://storage.googleapis.com/a1aa/image/LWx7YK9aXa6sEx7glKSkeS8QmXnZbAKXUqJ7fdAkYUMGCxCUA.jpg",
      category: "Product Design",
      title: "Mobile Application Design",
      description: "Build a mobile application with a clean and modern user interface.",
      link: "https://example.com/project1", // Replace with a valid URL
      githubLink: "https://github.com/example/repo1",
    },
    {
      imgSrc: "https://storage.googleapis.com/a1aa/image/uzabivi0YsalHJph5CiFHme9I9PhEXtv4rzaIhkn0qLBhYBKA.jpg",
      category: "Product Design",
      title: "Website Makeup Design",
      description: "Redesign a website with a fresh and modern look.",
      link: "https://example.com/project2", // Replace with a valid URL
      githubLink: "https://github.com/example/repo2",
    },
    {
      imgSrc: "https://storage.googleapis.com/a1aa/image/BeMJE6NRNZxxKS5lp3FIlkPLgmdm0EUgADGfufbCAWaOEiFoA.jpg",
      category: "Product Design",
      title: "Brand Identity and Motion Design",
      description: "Create a unique brand identity and motion graphics.",
      link: "https://example.com/project3", // Replace with a valid URL
      githubLink: "https://github.com/example/repo3",
    },
    {
      imgSrc: "https://storage.googleapis.com/a1aa/image/5NheQdIqePi4fIFfD4GagLH0xWdapUAcFSOMY5plPHKRIELQB.jpg",
      category: "Product Design",
      title: "Mobile Application Development",
      description: "Develop a mobile application with excellent performance.",
      link: "https://example.com/project4", // Replace with a valid URL
      githubLink: "https://github.com/example/repo4",
    },
  ];

  return (
    <div className="container">
      <div className="header">
        <h1>
          Explore My Popular <span>Projects</span>
        </h1>
      </div>
      {projectData.map((project, index) => (
        <div
          className={`project ${index % 2 !== 0 ? 'reverse' : ''}`}
          key={index}
        >
          <img alt={project.title} src={project.imgSrc} />
          <div className="project-content">
            <div className="category">{project.category}</div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="links">
              <a className="view-more" href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={linkIcon}
                  alt="View Icon"
                  className="view-icon"
                />
                    </a>
              <a className="github-link" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> 
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="view-more-projects">
        <a href="https://example.com/projects" target="_blank" rel="noopener noreferrer">
          View More Projects <i class="fa-solid fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Projects;