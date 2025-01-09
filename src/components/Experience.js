import React, { useState } from 'react';
import './Experience.css';
import { FaLaptop, FaCertificate, FaTimes } from 'react-icons/fa';

// Import images
import Certificate1 from '../assets/Certificate1.jpg';  // Correct import for the image
import Certificate2 from '../assets/intern_cert.jpg'; // Correct import for the second image

const Experience = () => {
  const [modalImage, setModalImage] = useState(null);

  const experiences = [
    {
      title: "Internship at OASIS INFOBYTE",
      role: "JAVA Developer Intern",
      duration: "Feb 2023 - March 2023",
      mode: "Remote",
      certificateLink: Certificate1, // Use the imported image here
    },
    {
      title: "Internship at UNIFIED MENTOR",
      role: "Fullstack Web Development Intern",
      duration: "Aug 2024 - Sep 2024",
      mode: "Remote",
      certificateLink: Certificate2, // Use the imported image here
    },
  ];

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-row">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3 className="experience-title">{exp.title}</h3>
              <p><strong>Role:</strong> {exp.role}</p>
              <p><strong>Duration:</strong> {exp.duration}</p>
              <p>
                <strong>Mode:</strong>{" "}
                <FaLaptop className="icon-mode" /> {exp.mode}
              </p>
              <button
                className="view-certificate-btn"
                onClick={() => openModal(exp.certificateLink)} // Pass the imported image
              >
                <FaCertificate className="icon-certificate" /> View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div className="certificate-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              <FaTimes />
            </button>
            <img src={modalImage} alt="Certificate" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
