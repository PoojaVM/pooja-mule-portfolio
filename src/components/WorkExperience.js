import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import './WorkExperience.css';
import { WORK_EXPERIENCES } from '../data';
const ExperienceCard = ({ experience }) => {
  return (
    <Card className="mb-4">
      <Card.Header>
        <h5>{experience.organization}</h5>
        <p className="mb-0">{experience.jobTitle}</p>
        <p className="text-muted">{experience.dates}</p>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {experience.responsibilities.map((responsibility, index) => (
            <ListGroup.Item key={index}>{responsibility}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

const WorkExperience = () => {

  return (
    <div className='work-ex-container'>
      <Container className="mt-4">
        <h1 className="work-ex-header">Work Experience</h1>
        {WORK_EXPERIENCES.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
        ))}
        </Container>
    </div>
  );
};

export default WorkExperience;
