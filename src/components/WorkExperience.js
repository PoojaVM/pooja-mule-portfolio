import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import './WorkExperience.css';
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
    const experiences = [
        {
          organization: 'West Agile Labs',
          jobTitle: 'Senior Software Developer',
          dates: 'June 2018 - July 2022',
          responsibilities: ['Achievement 1', 'Achievement 2', 'Achievement 3'],
        },
        {
          organization: 'Belzabar Software Design',
          jobTitle: 'Computer Scientist',
          dates: 'January 2020 - Present',
          responsibilities: ['Achievement 1', 'Achievement 2', 'Achievement 3'],
        },
        {
            organization: 'Persistent Systems Ltd',
            jobTitle: 'Undergraduate Intern',
            dates: 'June 2015 - May 2016',
            responsibilities: ['Achievement 1', 'Achievement 2', 'Achievement 3'],
        }
];
  return (
    <Container className="mt-4">
      <h1 className="work-ex-header">Work Experience</h1>
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </Container>
  );
};

export default WorkExperience;
