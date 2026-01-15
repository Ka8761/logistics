import React, { useState } from "react";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../redux/userSlice";

const ChangePassword = () => {
  const dispatch = useDispatch();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // single message state (SUCCESS + ERROR)
  const [message, setMessage] = useState({ text: "", type: "" });

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // clear previous message
    setMessage({ text: "", type: "" });

    // validation
    if (newPassword !== confirmPassword) {
      setMessage({
        text: "New password and confirm password do not match!",
        type: "error",
      });
      return;
    }

    try {
      await dispatch(updatePassword({ oldPassword, newPassword })).unwrap();

      // SUCCESS
      setMessage({
        text: "Password changed successfully!",
        type: "success",
      });

      // optional: clear inputs
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.log("Error from slice:", err);

      setMessage({
        text: err?.message || "Something went wrong while updating password!",
        type: "error",
      });
    }
  };

  return (
    <div className="p-4">
      <Row className="mb-3">
        <Col>
          <h3>Change Password</h3>
          <p>Home / Profile / Password</p>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Form onSubmit={handleSubmit}>
            {/* Old Password */}
            <Form.Group className="mb-3">
              <Form.Label>Old Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showOld ? "text" : "password"}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="Enter old password"
                  required
                />
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => setShowOld(!showOld)}
                >
                  {showOld ? "Hide" : "Show"}
                </Button>
              </InputGroup>
            </Form.Group>

            {/* New Password */}
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showNew ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                />
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                >
                  {showNew ? "Hide" : "Show"}
                </Button>
              </InputGroup>
            </Form.Group>

            {/* Confirm Password */}
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  required
                />
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? "Hide" : "Show"}
                </Button>
              </InputGroup>
            </Form.Group>

            {/* Message */}
            {message.text && (
              <p
                style={{
                  color: message.type === "success" ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {message.text}
              </p>
            )}

            <Button
              type="submit"
              style={{ backgroundColor: "#ff9500", border: "none" }}
            >
              Update Password
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ChangePassword;
