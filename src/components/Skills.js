import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css";

const Skills = () => {
  // State to track the visibility of skill details
  const [activeCard, setActiveCard] = useState(null);

  const toggleDetails = (index) => {
    setActiveCard(activeCard === index ? null : index); // Toggle active card
  };

  const skillsData = [
    {
      title: "Programming Languages",
      skills: ["Java", "HTML", "CSS", "JavaScript", "SQL"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "MS-SQL"],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        "Spring Boot",
        "React.js",
        "Postman",
        "MongoDB Atlas",
        "Bootstrap",
        "Git/GitHub",
        "VS Code",
        "Eclipse IDE",
        "IntelliJ IDEA",
        "PyCharm",
      ],
    },
    {
      title: "Other Skills",
      skills: ["Data Structures and Algorithms", "OOPS"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="row">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className={`skill-card ${
              activeCard === index ? "active-card" : ""
            }`}
          >
            <h4 className="skill-category-title">{category.title}</h4>
            <button
              className="toggle-btn"
              onClick={() => toggleDetails(index)}
            >
              {activeCard === index ? "▲" : "▼"}
            </button>
            {activeCard === index && (
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
