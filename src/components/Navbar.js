import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          My Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link smooth-scroll" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link smooth-scroll" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link smooth-scroll" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link smooth-scroll" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link smooth-scroll" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link smooth-scroll" href="#certification">
                Certification
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;