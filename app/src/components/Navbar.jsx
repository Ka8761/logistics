import React, { useState } from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
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
      className="py-2 shadow-sm"
      style={{ 
        backgroundColor: '#000000',
        borderBottom: '1px solid #333333'
      }}
    >
      <Container>
        {/* Logo - LEFT SIDE */}
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          <Image 
            src={logo} 
            alt="CargoExtra" 
            height="40px" 
            className="me-2"
            style={{ borderRadius: '4px' }}
          />
          CargoExtra
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            border: 'none', 
            padding: '8px 12px',
            outline: 'none'
          }}
        />

        {/* Desktop & Mobile Menu */}
        <Navbar.Collapse id="navbar-nav" in={isOpen}>
          <Nav className="ms-auto" style={{ gap: '20px' }}>
            {menuItems.map((item) => (
              <Nav.Link 
                key={item.name}
                as={Link} 
                to={item.path}
                style={{
                  color: '#d1d5db',
                  fontWeight: '500',
                  padding: '8px 16px !important',
                  borderRadius: '8px',
                  margin: '0 2px',
                  transition: 'all 0.2s ease'
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
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
