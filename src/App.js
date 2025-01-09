import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Certification from './components/Certification';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      

      <div className="section zigzag left">
        <Education />
      </div>

      <div className="section zigzag right">
        <Skills />
      </div>

      <div className="section zigzag left">
        <Projects />
      </div>

      <div className="section zigzag right">
        <Experience />
      </div>

      <div className="section zigzag left">
        <Certification />
      </div>

      <Footer />
      
      {/* Floating Action Button */}
      <div className="fab-button">
        <i className="fa fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default App;
