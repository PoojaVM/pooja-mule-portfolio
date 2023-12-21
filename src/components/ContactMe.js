import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './ContactMe.css';
import database from '../config/firebaseConfig';
import { ref, push } from 'firebase/database';

const ContactMe = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    try {
        setError(null);
        const { name, email, subject, message } = state;
        const messagesRef = ref(database, 'messages');
        push(messagesRef, {
          username: name,
          email: email,
          subject: subject,
          message: message
        });
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 10000);  // Hide the message after 5 seconds
    } catch (error) {
        setError('Could not send message at the moment. You can email me directly using the top button');
    }
  };

  return (
    <div className='contactme-container'>
    <h1 className="contactme-header">Contact Me</h1>
    <Container className="contact-me-container my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <a href="mailto:poojavm1595@gmail.com" className="d-block mb-3">
            <Button variant="primary">Email Me Directly</Button>
          </a>
          <Form onSubmit={handleSubmit}>
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
            <Form.Group controlId="contactForm.Subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control 
                type="text" 
                name="subject" 
                value={state.subject} 
                onChange={handleChange} 
                placeholder="Subject" 
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
            <Button variant="primary" type="submit" className="mt-3"
            disabled={!state.name || !state.email || !state.subject || !state.message}
            >
              Send Message
            </Button>
            {
            showSuccessMessage && (
            <p className="success-message" style={{color: "#B76E79"}}>
                Your message has been sent successfully!
            </p>
            )}
            {
                error && <p className="text-danger mt-3">{error}</p>
            }
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ContactMe;
