// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome for icons
import NavbarComponent from './components/Navbar';
import BreadcrumbExample from './components/BreadCrumb';
import ContentCard from './components/ContentCard';
import UserForm from './components/UserForm';
// import ButtonExample from './components/button';
import { Container, Row, Col } from 'react-bootstrap'; // Import Grid components
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import Carousal from './components/carosual';
import Footer from './components/Footer';
import OffExample from './components/OffCanvas';

function App() {
  const style = {
    backgroundColor: '#f8f9fa', // Light background color for a professional look
    minHeight: '100vh',
    paddingTop: '2rem', // Consistent top padding for content
  };

  return (
    <Router>
      <div style={style}>
        <NavbarComponent />
        <Container className="mt-4">
          <Carousal />
          <OffExample />

          {/* Breadcrumb is commented out, but can be uncommented for navigation */}
          {/* <BreadcrumbExample /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/form" element={<UserForm />} />
          </Routes>
        </Container>

        {/* Conditionally render ButtonExample if needed */}
        {/* <ButtonExample /> */}

        <Container className="mt-4">
          <Row>
            {[...Array(8)].map((_, index) => (
              <Col md={4} lg={3} className="mb-4" key={index}>
                <ContentCard />
              </Col>
            ))}
          </Row>
        </Container>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
