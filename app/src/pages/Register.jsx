// Register.js
import React, { useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import bgimg from "../assets/cargo-bg.png";
import bgsubimg from "../assets/cargocardbg.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import RegisterSecond from "./RegisterSecond";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSecondStep, setShowSecondStep] = useState(false);

  // Step 2 fields
  const [phoneCodes, setPhoneCodes] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [pickupOffice, setPickupOffice] = useState("");

  const [localError, setLocalError] = useState("");

  const handleStepOneSubmit = (e) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !email || !password) {
      setLocalError("Please fill out all required fields.");
      return;
    }
    if (password !== confirmPassword) {
      setLocalError("Passwords do not match.");
      return;
    }
    setLocalError("");
    setShowSecondStep(true);
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center p-0"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <Row
        className="rounded-2 overflow-hidden shadow-lg w-100 mx-3 my-5"
        style={{ maxWidth: "1000px", backgroundColor: "white" }}
      >
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
          <h2>Register!</h2>
          <p>Please complete the form to register. If you are a member, login.</p>
        </Col>

        <Col xs={12} lg={8} className="bg-white p-4">
          {!showSecondStep ? (
            <Form onSubmit={handleStepOneSubmit}>
              <img src={logo} alt="logo" width="150px" className="mb-4" />

              {localError && <p className="text-danger text-center">{localError}</p>}

              <Row>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </Button>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </Button>
                </InputGroup>
              </Form.Group>

              <div className="d-flex flex-wrap gap-3">
                <Button
                  type="submit"
                  style={{ backgroundColor: "#ff8800ff", border: "none" }}
                >
                  Next
                </Button>

                <Button
                  type="button"
                  style={{
                    backgroundColor: "#d7d7d7ff",
                    border: "none",
                    color: "black",
                  }}
                >
                  <Link to="/login">Or Login here</Link>
                </Button>
              </div>
            </Form>
          ) : (
            <RegisterSecond
              firstName={firstName}
              lastName={lastName}
              email={email}
              password={password}
              addressLine1={addressLine1}
              phonenumber={phonenumber}
              phoneCodes={phoneCodes}
              setPhoneCodes={setPhoneCodes}
              setPhoneNumber={setPhoneNumber}
              setAddressLine1={setAddressLine1}
              addressLine2={addressLine2}
              setAddressLine2={setAddressLine2}
              country={country}
              setCountry={setCountry}
              state={state}
              setState={setState}
              city={city}
              setCity={setCity}
              zipCode={zipCode}
              setZipCode={setZipCode}
              pickupOffice={pickupOffice}
              setPickupOffice={setPickupOffice}
              onGoBack={() => setShowSecondStep(false)}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
