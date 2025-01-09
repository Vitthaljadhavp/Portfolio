import React from 'react';
import './About.css'; // Import the updated CSS for About section

const About = () => {
  return (
    <section id="about" className="py-5 about-section">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row about-para" >
          <div className="col-md-12">
            <p className="text-justify about-text">
              Hi! I'm <strong>VITTHAL JADHAV</strong>, a motivated and technically proficient Computer Engineering graduate,
              possessing strong skills in Java, SQL, Data Structures and Algorithms, SpringBoot,
              HTML5, CSS3, and JavaScript, etc... I demonstrate the ability to handle multiple projects
              effectively, showcasing robust problem-solving capabilities and a keen interest
              in software development.
            </p>
            <p className="text-justify about-text">
              Eager to leverage academic knowledge and project experience in a dynamic and
              growth-oriented environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
