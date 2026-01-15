import React, { useRef, useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import DashboardFooter from "./DashboardFooter";

const NewTicket = () => {
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [error, setError] = useState("");
  const [attachments, setAttachments] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setError("");

    const thisFiles = Array.from(e.target.files);

    const acceptedFiles = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    for (let thisFile of thisFiles) {
      if (!acceptedFiles.includes(thisFile.type)) {
        setError("File type not accepted");
        return;
      }

      if (thisFile.size > 5 * 1024 * 1024) {
        setError(`${thisFile.name} file size is too large`);
        return;
      }
    }

    if (attachments.length + thisFiles.length > 5) {
      setError("Only 5 files are allowed!");
      return;
    }

    setAttachments([...attachments, ...thisFiles]);

    // Reset the input so user can re-upload the same file after removal
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRemoveFile = (index) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message || !department || !warehouse) {
      setError("Please fill all required fields.");
      return;
    }

    console.log("Submitting Ticket...");
    console.log("Department:", department);
    console.log("Warehouse:", warehouse);
    console.log("Message:", message);
    console.log("Attachments:", attachments);

    // You can replace this with API call logic
    alert("Ticket submitted successfully!");
  };

  // Debugging log for updated attachments
  useEffect(() => {
    console.log("Updated attachments:", attachments);
  }, [attachments]);

  return (
    <div>
      <Row>
        <Col md={9} sm={12}>
          <div className="d-flex align-items-center gap-3 ">
            <div>
              <h3 className="fw-bold">New Ticket</h3>
            </div>
            <div className="d-flex">
              <p style={{ color: "#c94d00ff" }}>Home</p>
              <p style={{ color: "#c94d00ff" }}>Support</p>
              <p>New</p>
            </div>
          </div>
        </Col>
        <Col md={9} sm={12}>
          <div>
            <Form onSubmit={handleSubmit}>
              {/* Subject */}
              <Form.Group className="mb-3">
                <Form.Label>
                  Subject <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Subject"
                  required
                />
              </Form.Group>

              {/* Department */}
              <Form.Group className="mb-3">
                <Form.Label>
                  Department <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                >
                  <option value="">Select Department</option>
                  <option>Technical</option>
                  <option>Sales/Billing</option>
                  <option>Customer Service</option>
                </Form.Select>
              </Form.Group>

              {/* Warehouse */}
              <Form.Group className="mb-3">
                <Form.Label>
                  Warehouse <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select
                  value={warehouse}
                  onChange={(e) => setWarehouse(e.target.value)}
                  required
                >
                  <option value="">Select Warehouse</option>
                  <option>TX (Stanford Texas, USA)</option>
                  <option>UK-L (London, UK)</option>
                  <option>LOS (Isolo Lagos)</option>
                  <option>China (CN)</option>
                  <option>SKR (Gimpo- South Africa)</option>
                  <option>OJU (Ojuaelegba Lagos)</option>
                </Form.Select>
              </Form.Group>

              {/* Message */}
              <Form.Group className="mb-3">
                <Form.Label>
                  Message <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  className="p-5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Attachments */}
              <Form.Group className="mb-3">
                <Form.Label>
                  Attachments
                  <span className="fw-light" style={{ fontSize: "14px" }}>
                    (Up to 5. In jpeg, png, pdf, doc or docx format - Max Size:
                    5mb)
                  </span>
                </Form.Label>
                <div
                  className="p-5"
                  style={{ border: "2px dashed #fc7202ff" }}
                >
                  <p>Tap here to upload attachment. Drag and drop if on PC</p>
                  <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    accept=".jpeg,.jpg,.png,.pdf,.doc,.docx"
                    style={{ display: "block" }}
                    onChange={handleFileChange}
                  />
                </div>
                <p style={{ color: "red" }}>{error}</p>

                {/* File List */}
                {attachments.map((file, index) => (
                  <p key={index}>
                    {file.name}
                    <span
                      style={{ cursor: "pointer", color: "red", marginLeft: 8 }}
                      onClick={() => handleRemoveFile(index)}
                    >
                      ❌
                    </span>
                  </p>
                ))}
              </Form.Group>

              {/* Submit */}
              <div className="col-12">
                <Button
                  type="submit"
                  style={{ backgroundColor: "#ff9500", border: "none" }}
                >
                  Submit Ticket
                </Button>
              </div>
            </Form>

            <DashboardFooter />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewTicket;
