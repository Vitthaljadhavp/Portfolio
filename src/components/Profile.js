import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon from react-icons
import profilePic from '../assets/Profile.jpg';
import './Profile.css';

const Profile = () => {
  return (
    <section id="profile" className="profile-section">
      <div className="profile-container">
        {/* Profile Picture */}
        <div className="profile-picture">
          <div className="border-wrapper ">
            <img src={profilePic} alt="Profile" className="profile-img" />
          </div>
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <h2>VITTHAL RAMRAO JADHAV</h2>
          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} className="me-2 text-primary" />
            <span>9307038189</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />
            <span>vitthaljadhav12369@gmail.com</span>
          </div>
          <div className="info-item">
            <FaLinkedin className="me-2 text-primary" />
            <a
              href="https://www.linkedin.com/in/vitthal-jadhav-3bab20213/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faLocationDot} className="me-2 text-primary" />
            <span>Pune, Maharashtra</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
