import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "E-LEARNING HUB",
      date: "07/2023 - 05/2024",
      role: "Frontend Developer, Team Leader",
      description: [
        <p>Designed and implemented a web application aimed at revolutionizing education by providing personalized, engaging and accessible learning experiences.</p>,
        <p>The platform allows users to learn courses from anywhere, at any time, with interactive learning modules designed to enhance knowledge and overcome challenges.</p>,
        <p>Successfully delivered a system that significantly improves users' learning experience by offering interactive and user-friendly educational content.</p>
      ]
    },
    {
      title: "LIBRARY MANAGEMENT SYSTEM",
      date: "07/2022 - 01/2023",
      role: "Data Manager, Documentation Lead",
      description: [
        <p>Developed and implemented a comprehensive system to manage various aspects of a library, including book allocations, availability, and arrangement.</p>,
        <p>Utilized HTML, CSS, JavaScript for the frontend, and MySQL for efficient database management and querying.</p>,
        <p>The system was designed to enhance the operational efficiency of libraries, providing better services to users and improving resource management.</p>
        
      ]
    },
    {
      title: "CONTINUOUS ASSESSMENT SYSTEM",
      date: "12/2021 - 05/2022",
      role: "Frontend Developer, Database Management",
      description: [
        <p>Designed and implemented a system to help students track their academic progress and improve performance. Developed a responsive user interface that enhanced user experience.</p>,
        <p>Successfully delivered a functional system that improved student engagement and academic tracking.</p>
      ]
    },
    {
      title: "PERSONAL PORTFFOLIO",
      date: "JAN 2025",
      role: "",
      description: [
        <p>Designed a website for personal portfolio</p>,
        <p>Technologies used in this project are: React.js , Bootsrtap, HTML5, CSS3, JavaScript</p>  
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="row">
          {projectList.map((project, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="project-card">
                <div className="project-title">{project.title}</div>
                <div className="project-date-role">
                  <span className="date-icon">📅</span> {project.date} |{" "}
                  <span className="role">{project.role}</span>
                </div>
                <ul className="project-description">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="description-point">{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
