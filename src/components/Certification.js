import React, { useState } from 'react';
import './Certification.css';
import { FaCertificate, FaCalendarAlt, FaTimes } from 'react-icons/fa'; // Added date and close icons

// Import images for certificates
import Certificate1 from '../assets/Udemy_Certificate.jpg';  // Correct import for the certificate image
// Add more certificate images as needed

const Certification = () => {
  const [modalImage, setModalImage] = useState(null);

  const certifications = [
    {
      name: "Full Stack Development with Java, MS SQL, Spring, Hibernate", 
      company: "UDEMY",
      completionDate: "JULY 2024",
      // link: "https://www.udemy.com/certificate/UC-0da861c4-853d-41b7-8ee5-16e2259c751a/",
      certificateLink: Certificate1,  // Using imported certificate image
    },
    // Add more certifications here if needed
  ];

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section id="certification" className="certification-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-wrapper">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="card-content">
                <h5 className="certificate-name">
                  <FaCertificate className="icon-cert" />
                  {cert.name}
                </h5>
                <p className="company"><strong>Provider:</strong> {cert.company}</p>
                <p className="date">
                  <FaCalendarAlt className="icon-date" />{" "}
                  <strong>Completion Date:</strong> {cert.completionDate}
                </p>
                {/* <p>
                  <strong>Certificate Link:</strong>{" "}
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                </p> */}

                {/* View Certificate button */}
                <button
                  className="view-certificate-btn"
                  onClick={() => openModal(cert.certificateLink)} // Open modal on button click
                >
                  <FaCertificate className="icon-certificate" /> View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for certificate image */}
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

export default Certification;
