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
    setExpanded(false);
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
        zIndex: 9999,
        width: '100vw',  // keep this
        position: 'fixed',
        left: 0,
        right: 0
      }}
      className="py-2 shadow-sm"
    >
      <Container fluid style={{ paddingLeft: '15px', paddingRight: '15px', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Logo */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          style={{ 
            fontWeight: 'bold', 
            fontSize: '1.1rem',
            color: '#ffffff',
            whiteSpace: 'nowrap',
            flexShrink: 0
          }}
        >
          <Image 
            src={logo} 
            alt="CargoExtra" 
            height="36px" 
            className="me-2"
            style={{ borderRadius: '4px' }}
          />
          CargoExtra
        </Navbar.Brand>

        {/* Toggle - ALWAYS VISIBLE */}
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          style={{ 
            border: 'none', 
            padding: '6px 10px',
            outline: 'none',
            background: 'transparent',
            flexShrink: 0
          }}
        />

        <Navbar.Collapse 
          id="navbar-nav" 
          className="justify-content-end"
        >
          <Nav 
            style={{ 
              gap: '8px',
              // Removed nowrap → allows wrapping if needed
              // On mobile (when collapsed), make it vertical + right-aligned
            }}
            className="flex-column flex-md-row align-items-md-center align-items-end"
          >
            {menuItems.map((item) => (
              <Nav.Link 
                key={item.name}
                as={Link} 
                to={item.path}
                onClick={handleNavClick}
                style={{
                  color: '#d1d5db',
                  fontWeight: 500,
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                  minWidth: 0,
                  flexShrink: 1,
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