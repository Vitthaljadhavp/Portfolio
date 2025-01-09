import React, { useState } from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);

  const handleButtonClick = (education) => {
    setSelectedEducation(selectedEducation === education ? null : education);
  };

  return (
    <section id="education" className="py-3 education-section">
      <div className="container">
        <h2 className="text-center mb-4">Education</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="education-buttons">
              <button
                className={`education-btn ${selectedEducation === 'graduation' ? 'active' : ''}`}
                onClick={() => handleButtonClick('graduation')}
              >
                Graduation
              </button>
              <button
                className={`education-btn ${selectedEducation === '12th' ? 'active' : ''}`}
                onClick={() => handleButtonClick('12th')}
              >
                12th HSC
              </button>
              <button
                className={`education-btn ${selectedEducation === '10th' ? 'active' : ''}`}
                onClick={() => handleButtonClick('10th')}
              >
                10th SSC
              </button>
            </div>
          </div>
          <div className="col-md-8">
            {selectedEducation === 'graduation' && (
              <div className="education-details">
                <h3>Graduation</h3>
                <p><strong>Branch:</strong> COMPUTER ENGINEERING</p>
                <p><strong>Institute:</strong> INDIRA COLLEGE OF ENGINEERING AND MANAGEMENT</p>
                <p>
                  <strong>Location:</strong> <FaMapMarkerAlt className="me-2 text-secondary" />
                  PUNE, MAHARASHTRA
                </p>
                <p>
                  <strong>Graduation Year:</strong> <FaCalendarAlt className="me-2 text-secondary" />
                  JUNE-2024
                </p>
                <p>
                  <strong>CGPA:</strong> 7.0/10
                </p>
              </div>
            )}
            {selectedEducation === '12th' && (
              <div className="education-details">
                <h3>12th HSC</h3>
                <p><strong>Institute:</strong> N.E.S.SCIENCE COLLEGE</p>
                <p>
                  <strong>Location:</strong> <FaMapMarkerAlt className="me-2 text-secondary" />
                  NANDED, MAHARASHTRA
                </p>
                <p>
                  <strong>Passing Year:</strong> <FaCalendarAlt className="me-2 text-secondary" />
                  2020
                </p>
                <p>
                  <strong>Percentage:</strong> 57.85%
                </p>
              </div>
            )}
            {selectedEducation === '10th' && (
              <div className="education-details">
                <h3>10th SSC</h3>
                <p><strong>Institute:</strong> SHREE GANESH MADHYAMIK VIDYALAYA</p>
                <p>
                  <strong>Location:</strong> <FaMapMarkerAlt className="me-2 text-secondary" />
                  NANDED, MAHARASHTRA
                </p>
                <p>
                  <strong>Passing Year:</strong> <FaCalendarAlt className="me-2 text-secondary" />
                  2018
                </p>
                <p>
                  <strong>Percentage:</strong> 88.20%
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
