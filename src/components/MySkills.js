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
import './MySkills.css';

const skills = [
  { name: 'Javascript', icon: <DiJavascript1 /> },
  { name: 'Python', icon: <DiPython /> },
  { name: 'ReactJS', icon: <DiReact /> },
  { name: 'React Native', icon: <DiReact /> },
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
    <div className='skills-container'>
    <h1 className="skills-header">Skills</h1>
    <Container className="my-skills-container text-center">
      <Row>
        {skills.map((skill, idx) => (
          <Col key={idx} xs={6} md={4} lg={3} className="my-2">
            <div className={`skill-icon skill-${idx}`}>
              {skill.icon}
              <p className={`skill-name skill-name-${idx}`}>{skill.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default MySkills;
