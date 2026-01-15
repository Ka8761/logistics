import React from "react";
import { Navbar, Nav, Container, Dropdown, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userSlice";

const NavLogged = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: user, token } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  // If not logged in, do not render
  if (!token) return null;

  return (
    <Navbar bg="white" fixed="top" className="shadow-sm">
      <Container fluid className="px-4">
        {/* Sidebar toggle button */}
        <div
          onClick={toggleSidebar}
          style={{
            cursor: "pointer",
            fontSize: "1.5rem",
            marginRight: "1rem",
          }}
        >
          &#9776; {/* Hamburger icon */}
        </div>

        {/* Brand */}
        <Navbar.Brand
          style={{ cursor: "pointer", fontWeight: "600" }}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </Navbar.Brand>

        {/* User info */}
        <Nav className="ms-auto align-items-center gap-3">
          <Image
            src={
              user?._id
                ? `http://localhost:5000/api/update/${user._id}/profile-pic?t=${Date.now()}`
                : "https://via.placeholder.com/32"
            }
            roundedCircle
            width={32}
            height={32}
          />

          <Dropdown align="end">
            <Dropdown.Toggle size="sm" variant="light">
              {user?.firstName || user?.email}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => navigate("/dashboard/profile/edit-profile")}
              >
                Edit Profile
              </Dropdown.Item>

              <Dropdown.Item
                onClick={() => navigate("/dashboard/profile/update-password")}
              >
                Change Password
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item
                className="text-danger fw-bold"
                onClick={handleLogout}
              >
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
