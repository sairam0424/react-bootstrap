// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              1234 Main Street<br />
              Anytown, USA<br />
              <a href="mailto:info@example.com" className="text-light">info@example.com</a><br />
              +1 (555) 123-4567
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ListGroup variant="flush">
              <ListGroupItem><Link to="/" className="text-light">Home</Link></ListGroupItem>
              <ListGroupItem><Link to="/about" className="text-light">About</Link></ListGroupItem>
              <ListGroupItem><Link to="/services" className="text-light">Services</Link></ListGroupItem>
              <ListGroupItem><Link to="/contact" className="text-light">Contact</Link></ListGroupItem>
              <ListGroupItem><Link to="/form" className="text-light">Login</Link></ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
