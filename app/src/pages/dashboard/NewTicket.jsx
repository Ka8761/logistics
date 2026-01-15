import React, { useRef, useState } from "react";
import DashboardFooter from "./DashboardFooter";
import { Row, Col, Form, Button } from "react-bootstrap";

const NewTicket = () => {
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [error, setError] = useState("");
  const [attachments, setAttachments] = useState([]);
  const boxRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFiles = (files) => {
    setError("");
    const thisFiles = Array.from(files);

    const acceptedFiles = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    for (let file of thisFiles) {
      if (!acceptedFiles.includes(file.type)) {
        setError("File type not accepted");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError(`${file.name} file size is too large`);
        return;
      }
    }

    if (attachments.length + thisFiles.length > 5) {
      setError("Only 5 files allowed");
      return;
    }

    setAttachments([...attachments, ...thisFiles]);
  };

  const handleFileChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  return (
    <div>
      <Row>
        <Col md={12} sm={12} className="mb-5">
          <div className="d-flex align-items-center gap-3 mb-2">
            <h3 className="fw-bold">New Ticket</h3>
            <div className="d-flex gap-2">
              <p style={{ color: "#c94d00ff" }}>Home</p>
              <p style={{ color: "#c94d00ff" }}>Support</p>
              <p>New</p>
            </div>
          </div>
          <hr />
        </Col>

        <Col md={12} sm={12}>
          <Form>
            {/* Subject */}
            <Form.Group className="mb-3">
              <Form.Label>
                Subject <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Subject" required />
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
                  (Up to 5. In jpeg, png, pdf, doc or docx format. Max 5MB)
                </span>
              </Form.Label>

              {/* Drag & Drop Box */}
              <div onClick={(e) => e.stopPropagation()}>
              <div
                className="p-5 mb-2 text-center"
                style={{
                  border: "2px dashed #fc7202ff",
                  cursor: "pointer",
                  backgroundColor: dragOver ? "#ffe6cc" : "transparent",
                }}
                onClick={(e) => boxRef.current && boxRef.current.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                {dragOver
                  ? "Release to upload files"
                  : "Tap or drag files here to upload"}
              </div>
              </div>

              {/* Hidden File Input */}
              <input
                type="file"
                multiple
                ref={boxRef}
                accept=".jpeg,.jpg,.png,.pdf,.doc,.docx"
                style={{ display: "none" }}
                onChange={(e)=>handleFileChange(e)}
              />

              {/* Error */}
              <p style={{ color: "red" }}>{error}</p>

              {/* Selected Files */}
              {attachments.map((file, index) => (
                <p key={index}>
                  {file.name}{" "}
                  <span
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() =>
                      setAttachments(attachments.filter((_, i) => i !== index))
                    }
                  >
                    x
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

          {/* Footer */}
          <DashboardFooter />
        </Col>
      </Row>
    </div>
  );
};

export default NewTicket;
