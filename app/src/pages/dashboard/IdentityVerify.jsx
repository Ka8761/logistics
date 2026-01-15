import React, { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import DashboardFooter from "./DashboardFooter";

const IdentityVerify = () => {
  const [country, setCountry] = useState("");
  const [idType, setIdType] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!country || !idType || !file) {
      alert("Please fill all required fields and attach your ID photo.");
      return;
    }
    alert("Identity Verification submitted successfully!");
    // Here you can handle actual submission to backend
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="p-4">
      <Row>
        {/* Left Side Card */}
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h3 className="fw-bold mb-3">Identity Verification</h3>
            <p>Steps to submit verification for approval:</p>
            <ol>
              <li>Click on the Submit button.</li>
              <li>Select your country.</li>
              <li>Select ID Verification type.</li>
              <li>Provide all required information accurately.</li>
              <li>Attach your most recent passport photograph.</li>
              <li>Wait for the approval.</li>
            </ol>

            <h5 className="mt-4">Additional Requirements (UK, US, Canada):</h5>
            <ul>
              <li>Total image size: 600KB - 10MB</li>
              <li>Ensure image is not tightly cropped; all edges visible</li>
              <li>Face in ID photo must be visible</li>
              <li>Document on flat, non-white surface</li>
              <li>MRZ code must not be covered</li>
              <li>No fingers covering document</li>
              <li>Avoid glare or bright flash</li>
              <li>All text must be readable</li>
            </ul>

              <Button type="submit" style={{ backgroundColor: "#ff9500", border: "none" }}>
                Submit
              </Button>
         
    </Card></Col>

        {/* Right Side Info */}
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h5>ID Document Submitted</h5>
            <p>No Record Found to Display</p>

          </Card>
        </Col>
      </Row>
      <DashboardFooter/>
    </div>
  );
};

export default IdentityVerify;
