import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-2">© 2025 My Portfolio. All rights reserved.</p>
        <div className="d-flex justify-content-center">
          <a
            href="https://github.com/Vitthaljadhavp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3"
          >
            <FaGithub className="me-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/username/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3"
          >
            <FaLinkedin className="me-2" />
            LinkedIn
          </a>
          {/* Gmail */}
          <a
            href="vitthaljadhav12369@gmail.com"
            className="text-light mx-3"
          >
            <FaEnvelope className="me-2" />
            Gmail
          </a>

          {/* Phone */}
          <a
            href="tel:+919307038189"
            className="text-light mx-3"
          >
            <FaPhoneAlt className="me-2" />
            Phone
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
