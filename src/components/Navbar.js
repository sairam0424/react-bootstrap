// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DropDownEx from './DropDown';
import ModalEx from './Modal';

function NavbarComponent() {
  return (
    <div className='Navbar'>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">MyWebsite</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link  as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/Services">Services</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>  
          <Nav.Link as={Link} to="/form">Login</Nav.Link>
          <DropDownEx/>
          <ModalEx/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default NavbarComponent;
