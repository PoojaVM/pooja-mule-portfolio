import React from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { PROJECTS } from '../data';
import './Projects.css';

const ProjectCard = ({ project }) => {
    return (
        <Card style={{ width: '18rem' }} className="mb-4">
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                    {project.description}
                </Card.Text>
                {/* {project.link && 
                    <Button variant="primary" href={project.link} target="_blank">Visit Site</Button>} */}
                {project.github && 
                    <Button href={project.github} target="_blank" className="ml-2">GitHub</Button>}
            </Card.Body>
            <ListGroup className="list-group-flush">
                {project.technologies.map((tech, index) => (
                    <ListGroupItem key={index}>{tech}</ListGroupItem>
                ))}
            </ListGroup>
        </Card>
    );
};

const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-header">Projects</h1>
            <div className="d-flex flex-wrap justify-content-around">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};


export default Projects;
