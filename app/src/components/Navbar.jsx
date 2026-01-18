import React, { useState } from 'react';
import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';

const Navigationbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Track Shipment', path: '/track' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
  ];

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="md" 
      fixed="top" 
      className="py-2 border-bottom border-secondary shadow-sm"
      style={{ backgroundColor: '#000000 !important' }}
    >
      <Container>
        {/* Logo - LEFT SIDE */}
        <Navbar.Brand as={LinkContainer} to="/">
          <Image 
            src={logo} 
            alt="CargoExtra" 
            height="40px" 
            className="d-inline-block align-top me-2"
          />
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>CargoExtra</span>
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ border: 'none', padding: '8px 12px' }}
        />

        {/* Desktop & Mobile Menu */}
        <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
          <Nav className="ms-auto" style={{ gap: '20px' }}>
            {menuItems.map((item) => (
              <LinkContainer key={item.name} to={item.path}>
                <Nav.Link 
                  style={{
                    color: '#d1d5db',
                    fontWeight: '500',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.backgroundColor = '#1f2937';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#d1d5db';
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  {item.name}
                </Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
