import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarComponent = ({ onPageChange }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>GrootAcademy</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={() => onPageChange('display')}>All Courses</Nav.Link>
          <Nav.Link onClick={() => onPageChange('display')}>Online Batches</Nav.Link>
          <Nav.Link onClick={() => onPageChange('display')}>Internship Program</Nav.Link>
          <Nav.Link onClick={() => onPageChange('display')}>Blog</Nav.Link>
          <Nav.Link onClick={() => onPageChange('display')}>About Us</Nav.Link>
          <Nav.Link onClick={() => onPageChange('display')}>*Career Guidance*</Nav.Link>
          <Nav.Link onClick={() => onPageChange('display')}>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
