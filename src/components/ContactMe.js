import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './ContactMe.css';

const ContactMe = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you'd handle the submission of the form to your email.
    // You might need a backend service to handle sending the email.
    console.log(state);
  };

  return (
    <Container className="contact-me-container my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Contact Me</h2>
          <a href="mailto:poojavm1595@gmail.com" className="d-block mb-3">
            <Button variant="primary">Email Me Directly</Button>
          </a>
          {/* <Form onSubmit={handleSubmit}>
            <Form.Group controlId="contactForm.Name">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={state.name} 
                onChange={handleChange} 
                placeholder="Enter your name" 
              />
            </Form.Group>
            <Form.Group controlId="contactForm.Email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={state.email} 
                onChange={handleChange} 
                placeholder="Enter your email" 
              />
            </Form.Group>
            <Form.Group controlId="contactForm.Message">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                name="message" 
                value={state.message} 
                onChange={handleChange} 
                rows={3} 
                placeholder="Your message" 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Send Message
            </Button>
          </Form> */}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
