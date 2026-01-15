// RegisterSecond.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { registerUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const RegisterSecond = ({
  firstName,
  lastName,
  email,
  password,
  phoneCodes,
  setPhoneCodes,
  phonenumber,
  setPhoneNumber,
  addressLine1,
  setAddressLine1,
  addressLine2,
  setAddressLine2,
  country,
  setCountry,
  state,
  setState,
  city,
  setCity,
  zipCode,
  setZipCode,
  pickupOffice,
  setPickupOffice,
  onGoBack,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, fieldErrors, data } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    console.log("Redux user state: ", { loading, error, fieldErrors, data });
  }, [loading, error, fieldErrors, data]);

  const [countries, setCountries] = useState([]);
  const [callCodes, setCallCodes] = useState([]);
  const [states, setStates] = useState([]);
  const [myAddress, setMyAddress] = useState(true);

  // Offices list
  const officeLocations = [
    { id: "1", name: "Hamilton West, DA" },
    { id: "2", name: "Washington DC" },
    { id: "3", name: "New Orleans, District" },
  ];

  // Load countries and codes
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/states")
      .then((response) => {
        const countryNames = response.data.data.map((item) => item.name);
        setCountries(countryNames);
      });

    axios
      .get("https://countriesnow.space/api/v0.1/countries/codes")
      .then((response) => {
        const codes = response.data.data.map((c) => c.dial_code);
        setCallCodes(codes);
      });
  }, []);

  // Load states when country changes
  useEffect(() => {
    if (!country) return;
    axios
      .post("https://countriesnow.space/api/v0.1/countries/states", { country })
      .then((response) => {
        if (!response.data.error) {
          const myStates = response.data.data.states.map((s) => s.name);
          setStates(myStates);
        }
      });
  }, [country]);

  // Redirect after successful registration
  useEffect(() => {
    if (data) {
      navigate("/login");
    }
  }, [data, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const signupDetails = {
      firstName,
      lastName,
      email,
      password,
      phonenumber,
      phoneCodes,
      country,
      state,
      city,
      zipCode,
    };

    if (myAddress) {
      signupDetails.addressLine1 = addressLine1;
      if (addressLine2) signupDetails.addressLine2 = addressLine2; // optionaladress to fill in
    } else {
      signupDetails.pickupOffice = pickupOffice;
    }

   dispatch(registerUser(signupDetails));
  };

  return (
    <Container fluid>
      <Form onSubmit={handleSubmit}>
        {/* Phone number */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Code</Form.Label>
              <Form.Select
                className="w-25 d-inline-block"
                value={phoneCodes}
                onChange={(e) => setPhoneCodes(e.target.value)}
              >
                {callCodes
                  .map((c) => c.replace("+", "")) // remove "+" if present
                  .map((c) => parseInt(c)) // convert to number
                  .filter((num) => !isNaN(num)) // keep only valid numbers
                  .sort((a, b) => a - b) // sort ascending
                  .map((numcode, index) => (
                    <option key={index} value={numcode}>{`+${numcode}`}</option>
                  ))}
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                {fieldErrors?.phoneCodes}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                isInvalid={!!fieldErrors?.phonenumber}
              />
              <Form.Control.Feedback type="invalid">
                {fieldErrors?.phonenumber}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Address Line 1 */}
        {myAddress && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                isInvalid={!!fieldErrors?.addressLine1}
                required
              />
              <Form.Control.Feedback type="invalid">
                {fieldErrors?.addressLine1}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Address Line 2 (optional) */}
            <Form.Group className="mb-3">
              <Form.Label>Address Line 2 (optional)</Form.Label>
              <Form.Control
                type="text"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
                isInvalid={!!fieldErrors?.addressLine2}
              />
              <Form.Control.Feedback type="invalid">
                {fieldErrors?.addressLine2}
              </Form.Control.Feedback>
            </Form.Group>
          </>
        )}

        {/* Country / State */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                isInvalid={!!fieldErrors?.country}
              >
                <option value="">Select country</option>
                {countries.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {fieldErrors?.country}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Select
                value={state}
                onChange={(e) => setState(e.target.value)}
                isInvalid={!!fieldErrors?.state}
              >
                <option value="">Select state</option>
                {states.map((s, i) => (
                  <option key={i} value={s}>
                    {s}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {fieldErrors?.state}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* City / Zip */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                isInvalid={!!fieldErrors?.city}
              />
              <Form.Control.Feedback type="invalid">
                {fieldErrors?.city}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                isInvalid={!!fieldErrors?.zipCode}
              />
              <Form.Control.Feedback type="invalid">
                {fieldErrors?.zipCode}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Toggle between My Address / Pickup Office */}
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Use my address instead of pickup office"
            checked={myAddress}
            onChange={(e) => {
              setMyAddress(e.target.checked);
              if (e.target.checked) {
                setPickupOffice("");
              } else {
                setPickupOffice(e.target.value);
              }
            }}
          />
        </Form.Group>

        {/* If not using my address → show office dropdown */}
        {!myAddress && (
          <Form.Group className="mb-3">
            <Form.Label>Select Pickup Office</Form.Label>
            <Form.Select
              value={pickupOffice}
              onChange={(e) => setPickupOffice(e.target.value)}
              isInvalid={!!fieldErrors?.pickupOffice}
            >
              <option value="">Select Office</option>
              {officeLocations.map((office) => (
                <option key={office.id} value={office.name}>
                  {office.name}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {fieldErrors?.pickupOffice}
            </Form.Control.Feedback>
          </Form.Group>
        )}

        {/* Error and Buttons */}
        {error && <div className="text-danger text-center mt-2">{error}</div>}

        <div className="d-flex gap-3 mt-3">
          <Button
            type="submit"
            disabled={loading}
            style={{ backgroundColor: "#ff6a00ff", border: "none" }}
          >
            {loading ? "Registering..." : "Register"}
          </Button>

          <Button
            type="button"
            style={{ backgroundColor: "#f9e3d3ff", border: "none" }}
            onClick={onGoBack}
          >
            Go Back
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterSecond;
