// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import NavbarComponent from './components/Navbar';
import BreadcrumbExample from './components/BreadCrumb';
import ContentCard from './components/ContentCard';
import UserForm from './components/UserForm';
import ButtonExample from './components/button';
import { Container, Row, Col } from 'react-bootstrap'; // Import Grid components
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import Carousal from './components/carosual';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer';
// import Footer from './components/footer';

function App() {
  const style = {
    backgroundColor: 'white',
    minHeight: '100vh', 
    // paddingTop: '2rem',
  };

  return (
    <Router>
      <div style={style}>
        <NavbarComponent />
        <Container className="mt-4">
          <Carousal /> {/* This will be visible on all pages */}

          <BreadcrumbExample />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/form" element={<UserForm />} />
          </Routes>
        </Container>

        {/* This will appear only on specific pages */}
        <ButtonExample />
        
        <Row className="mt-4">
          {/* Use Col to create a responsive grid layout */}
          {[...Array(8)].map((_, index) => (
            <Col md={4} lg={3} className="mb-4" key={index}>
              <ContentCard />
            </Col>
          ))}
        </Row>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
  