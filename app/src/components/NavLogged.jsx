import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userSlice";
import logo from '../assets/logo.png';

const NavLogged = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: user, token } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  if (!token) return null;

  return (
    <Navbar bg="white" fixed="top" className="shadow-sm">
      <Container fluid className="px-4">
        {/* 🔥 SIDEBAR TOGGLE BUTTON */}
        <div
          onClick={toggleSidebar}  // ← This toggles your sidebar true/false
          style={{
            cursor: "pointer",
            fontSize: "1.5rem",
            marginRight: "1rem",
            padding: "8px",
            borderRadius: "4px",
            transition: "background 0.2s"
          }}
          onMouseEnter={(e) => e.target.style.background = "#f0f0f0"}
          onMouseLeave={(e) => e.target.style.background = "transparent"}
        >
          &#9776; {/* Hamburger ☰ */}
        </div>

        {/* Brand */}
        <Navbar.Brand
          style={{ cursor: "pointer", fontWeight: "600" }}
          onClick={() => navigate("/dashboard")}
        >
          <img 
            src={logo} 
            alt="Logo"
            style={{ 
              height: "50px", 
              width: "auto",
              marginRight: "8px" 
            }}
          />
        </Navbar.Brand>

        {/* User info */}
        <Nav className="ms-auto align-items-center gap-3">
          {/* Profile Picture */}
          <Image
            src={`${process.env.REACT_APP_API_URL}/api/users/${user?._id || user?.id}/profile-pic?t=${Date.now()}`}
            roundedCircle
            width={32}
            height={32}
            className="border"
            onError={(e) => {
              e.target.src = "/default-profile.png"; 
            }}
          />

          {/* User Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle size="sm" variant="light" className="border">
              {user?.firstName || user?.email?.split('@')[0] || 'User'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate("/dashboard/profile/edit-profile")}>
                Edit Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/dashboard/profile/update-password")}>
                Change Password
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className="text-danger fw-bold" onClick={handleLogout}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavLogged;
