import React, { useState } from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo.png';

const Navigationbar = () => {
  const [expanded, setExpanded] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Track Shipment', path: '/track' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
  ];

  const handleNavClick = () => {
    setExpanded(false); // ✅ CLOSES MENU ON CLICK
  };

  return (
    <Navbar 
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      bg="dark" 
      variant="dark" 
      expand="md" 
      fixed="top"
      style={{ 
        backgroundColor: '#000000',
        borderBottom: '1px solid #333333',
        zIndex: 9999
      }}
      className="py-2 shadow-sm"
    >
      <Container>
        {/* Logo - LEFT SIDE */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          style={{ 
            fontWeight: 'bold', 
            fontSize: '1.2rem',
            color: '#ffffff',
            whiteSpace: 'nowrap'
          }}
        >
          <Image 
            src={logo} 
            alt="CargoExtra" 
            height="40px" 
            className="me-2"
            style={{ borderRadius: '4px' }}
          />
          CargoExtra
        </Navbar.Brand>

        {/* Toggle button - ALWAYS VISIBLE */}
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          style={{ 
            border: 'none', 
            padding: '8px 12px',
            outline: 'none',
            background: 'transparent'
          }}
        />

        {/* Menu Items */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto" style={{ gap: '10px' }}>
            {menuItems.map((item) => (
              <Nav.Link 
                key={item.name}
                as={Link} 
                to={item.path}
                onClick={handleNavClick}
                style={{
                  color: '#d1d5db',
                  fontWeight: '500',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  fontSize: '0.95rem',
                  maxWidth: '140px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
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
