import React from 'react';
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
    <div className="container mx-auto px-4 py-8 max-w-screen-lg">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light">
          Explore My Popular <span className="font-medium text-gray-800">Projects</span>
        </h1>
      </div>
      {projectData.map((project, index) => (
        <div
          className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          key={index}
        >
          <img alt={project.title} src={project.imgSrc} className="w-full max-w-sm rounded-lg mb-6 md:mb-0 md:w-1/2" />
          <div className="md:w-1/2 px-6 py-8 text-center md:text-left">
            <div className="text-lg font-semibold text-gray-700 mb-2">{project.category}</div>
            <h2 className="text-2xl font-light text-gray-900 mb-3">{project.title}</h2>
            <p className="text-xl text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-center gap-4 md:justify-start">
              <a
                className="flex items-center text-gray-700 hover:text-blue-600"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkIcon} alt="View Icon" className="w-6 h-6 mr-2" />
                View Project
              </a>
              <a
                className="flex items-center text-gray-700 hover:text-gray-500"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="text-center mt-12">
        <a
          href="https://example.com/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 text-gray-800 font-medium border-2 border-gray-800 rounded-lg transition-colors hover:bg-gray-800 hover:text-white"
        >
          View More Projects
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Projects;
