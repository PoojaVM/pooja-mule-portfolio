import React from 'react';
import { ProfilePicture } from '../assets';
import './Home.css';
import { AboutMe, Projects, WorkExperience } from '../components';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
    return (
      <>
        <div className="social-media-icons position-fixed top-50 start-10 translate-middle-y">
          <a href="https://www.linkedin.com/in/pooja-mule-77421092/" target="_blank" rel="noreferrer" className="d-block mb-2">
            <i className="bi bi-linkedin" style={{ fontSize: '2rem', color: "white" }}></i>
          </a>
          <a href="https://github.com/PoojaVM" target="_blank" rel="noreferrer" className="d-block mb-2">
            <i className="bi bi-github" style={{ fontSize: '2rem', color: "white" }}></i>
          </a>
          <a href="https://stackoverflow.com/users/5939393/pooja-mule" target="_blank" rel="noreferrer" className="d-block mb-2">
            <i className="bi bi-stack-overflow" style={{ fontSize: '2rem', color: "white" }}></i>
          </a>
        </div>
      <div className="home-container">
        <div id="intro" className="intro-container">
          <div className="greeting-section animated-section">
            <h1 className="greeting-header">Hello! Nice to meet you.</h1>
            <p className="greeting-text">I am Pooja. A Graduate student and a full stack developer with over 5 years of work experience.</p>
          </div>
          <div className="profile-picture-section animated-picture">
            <img src={ProfilePicture} alt="Pooja Mule" className="profile-picture" />
          </div>
        </div>
        <div className="about-me-section animated-section" id="about-me">
          <AboutMe />
        </div>
        <div className="work-experience-section animated-section" id="work-experience">
          <WorkExperience />
        </div>
        <div className="projects-section animated-section" id="projects">
          <Projects />
        </div>
      </div>
      </>
    );
  };
  
export default Home;
