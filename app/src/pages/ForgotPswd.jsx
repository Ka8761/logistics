import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import bgimg from "../assets/cargo-bg.jpeg";
import bgsubimg from "../assets/cargocardbg.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

   
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center p-0"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <Row
        className="rounded-2 overflow-hidden shadow-lg w-100 mx-3 my-5"
        style={{ maxWidth: "1000px", backgroundColor: "white" }}
      >
        {/* Left Part */}
        <Col
          xs={12}
          lg={4}
          className="text-white d-flex flex-column justify-content-center p-4"
          style={{
            backgroundImage: `url(${bgsubimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "250px",
          }}
        >
          <h2>FORGOT PASSWORD</h2>
          <p>
            Please enter your email to reset your password.
          </p>
        </Col>

        {/* Right Part */}
        <Col xs={12} lg={8} className="bg-white p-4">
          <Form>
            <img src={logo} alt="logo" width="150px" style={{ marginLeft: "-5px" }} className="mb-4"/>

            <Row>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Enter Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            </Row>

            
            <div className="d-flex flex-wrap gap-3">
              <p><Link to="/login">Return to Login</Link></p>
              <Button
                type="submit"
                style={{ backgroundColor: "#ff8800ff", border: "none" }}
              ><Link to="/register">
                Register
                </Link>
              </Button>
              
            </div>
              
          </Form>
        
        </Col>
      </Row>

      {/* Style overrides for orange hover/focus */}
      <style>
        {`
          .form-control:hover {
            border-color: #ff8800 !important;
            box-shadow: none !important;
          }
          .form-control:focus {
            border-color: #ff8800 !important;
            box-shadow: none !important;
          }
        `}
      </style>
    </Container>
  );
};

export default Login;
