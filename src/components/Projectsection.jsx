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
    <div className="container mx-auto px-4 py-8 max-w-screen-lg font-poppins">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extralight">
          Explore My Popular <span className="font-extralight text-[#4e4e4e]">Projects</span>
        </h1>
      </div>
      {projectData.map((project, index) => (
        <div
          className={`flex flex-col md:flex-row items-center mb-12 md:mb-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          key={index}
        >
          <img
            alt={project.title}
            src={project.imgSrc}
            className="w-full max-w-sm rounded-lg mb-6 md:mb-0 md:w-1/2"
          />
          <div className="md:w-1/2 px-6 py-8 text-center md:text-left">
            <div className="text-[1.8em] font-[300] text-[#6f6f6f] mb-2">{project.category}</div>
            <h2 className="text-5xl font-light text-[#aaaaaa] mb-3 max-w-full md:max-w-lg">{project.title}</h2>
            <p className="text-[1.2em] text-[#424242fd] mb-4">{project.description}</p>
            <div className="flex justify-center gap-4 md:justify-start">
              <a
                className="flex items-center text-[1.1em] text-[#3d3d3d] hover:text-blue-600 "
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkIcon} alt="View Icon" className="w-7 h-7 mr-2" />
               
              </a>
              <a
                className="flex items-center  text-[#616161]"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-3xl"></i>
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
          className="inline-flex items-center justify-center gap-2 px-8 py-3 text-[#616161] font-light  border border-[#363636] rounded-lg transition-colors hover:bg- hover:text-white hover:shadow-lg"
        >
          View More Projects
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Projects;
