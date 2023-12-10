import React from 'react';
import { ProfilePicture } from '../assets';
import './Home.css';
import { AboutMe } from '../components';

const Home = () => {
    return (
      <div className="home-container">
        <div className="greeting-section animated-section">
          <h1 className="greeting-header">Hello! Nice to meet you.</h1>
          <p className="greeting-text">I am Pooja. A Graduate student and a full stack developer with over 5 years of work experience.</p>
        </div>
        <div className="profile-picture-section animated-picture">
          <img src={ProfilePicture} alt="Pooja Mule" className="profile-picture" />
        </div>
        <div className="about-me-section animated-section" id="about-me">
          <AboutMe />
        </div>
      </div>
    );
  };
  
export default Home;
