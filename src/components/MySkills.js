import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    DiAws,
    DiCss3,
    DiJira,
    DiReact,
    DiHtml5, 
    DiPython,
    DiNodejs,
    DiGithub,
    DiPostgresql,
    DiJavascript1,
    DiAngularSimple,
} from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import './MySkills.css';

const skills = [
  { name: 'Javascript', icon: <DiJavascript1 /> },
  { name: 'Python', icon: <DiPython /> },
  { name: 'ReactJS', icon: <DiReact /> },
  { name: 'React Native', icon: <FaReact /> },
  { name: 'AngularJS', icon: <DiAngularSimple /> },
  { name: 'NodeJS', icon: <DiNodejs /> },
  { name: 'Postgres', icon: <DiPostgresql /> },
  { name: 'HTML', icon: <DiHtml5 /> },
  { name: 'CSS', icon: <DiCss3 /> },
  { name: 'AWS', icon: <DiAws /> },
  { name: 'Github', icon: <DiGithub /> },
  { name: 'Jira', icon: <DiJira /> },
];

const MySkills = () => {
  return (
    <Container className="my-skills-container text-center">
      <h2>Skills</h2>
      <Row>
        {skills.map((skill, idx) => (
          <Col key={idx} xs={6} md={4} lg={3} className="my-2">
            <div className={`skill-icon skill-${idx}`}>
              {skill.icon}
            </div>
            <p style={{color:"white"}}>{skill.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MySkills;
