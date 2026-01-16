import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { updateUser } from "../../../my-app/src/redux/userSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const profilepicRef = useRef();
  const { data } = useSelector((state) => state.user);

  const [email, setEmail] = useState(data?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(data?.phoneNumber || "");
  const [phoneCodes, setPhoneCodes] = useState(data?.phoneCodes || "");
  const [paymentCurrency, setPaymentCurrency] = useState(data?.paymentCurrency || "");
  const [timeZone, setTimeZone] = useState(data?.timeZone || "");
  const [localError, setLocalError] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [imageKey, setImageKey] = useState(Date.now());
  const [showUpload, setShowUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const timeZones = Intl.supportedValuesOf("timeZone");

  // Refresh profile picture URL when user data changes (cache busting)
  // useEffect(() => {
  //   if (data?._id) {
  //     const cacheBuster = Date.now();
  //     const url = `http://localhost:5000/api/update/${data._id}/profile-pic?t=${cacheBuster}`;
  //     setImagePreview(url);
  //     setImageKey(cacheBuster);
  //   }
  // }, [data?._id, data?.updatedAt]);

  useEffect(() => {
  if (data?._id) {
    const cacheBuster = Date.now();
    const url = `${process.env.REACT_APP_API_URL}/api/update/${data._id}/profile-pic?t=${cacheBuster}`;

    const loadProtectedImage = async () => {
      try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const token = userInfo?.token;

        const res = await fetch(url, {
          headers: {
            autheader: `Bearer ${token}`,  // or 'authheader' if backend uses that
          },
        });

        if (!res.ok) throw new Error("Failed");

        const blob = await res.blob();
        const blobUrl = URL.createObjectURL(blob);
        setImagePreview(blobUrl);
        setImageKey(cacheBuster);

        // Cleanup on unmount or next load
        return () => URL.revokeObjectURL(blobUrl);
      } catch (err) {
        console.error("Protected image load failed:", err);
        setImagePreview("/default-profile.png");
      }
    };

    loadProtectedImage();
  }
}, [data?._id, data?.updatedAt]);

  // Handle file selection → show local preview immediately
  const handleProfilepicChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const acceptedTypes = ["image/jpeg", "image/png", "image/jpg"];

    if (!acceptedTypes.includes(file.type)) {
      setLocalError("File type not accepted. Please use JPG or PNG");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setLocalError("File size greater than 5MB");
      return;
    }

    setLocalError("");

    // Clean up previous local blob URL
    if (imagePreview && imagePreview.startsWith("blob:")) {
      URL.revokeObjectURL(imagePreview);
    }

    setSelectedFile(file);
    const blobUrl = URL.createObjectURL(file);
    setImagePreview(blobUrl);
    setImageKey(Date.now());
    setShowUpload(false);
  };

 const updateProfile = async (e) => {
  e.preventDefault();
  setLocalError("");
  setIsUpdating(true);

  const formData = new FormData();
  formData.append("email", email);
  formData.append("phoneCodes", phoneCodes);
  formData.append("phoneNumber", phoneNumber);
  formData.append("paymentCurrency", paymentCurrency);
  formData.append("timeZone", timeZone);

  if (selectedFile) {
    console.log("Uploading file:", selectedFile.name, selectedFile.size);
    formData.append("profileImage", selectedFile);
  }
try {
  const updatedUser = await dispatch(updateUser(formData)).unwrap();
  console.log("Updated user:", updatedUser);
    if (updatedUser?._id) {
      if (imagePreview && imagePreview.startsWith("blob:")) {
        URL.revokeObjectURL(imagePreview);
      }
      setSelectedFile(null);
      // 3. Update profile pic URL with cache buster
      const cacheBuster = Date.now();
      const freshUrl = `${process.env.REACT_APP_API_URL}/api/update/${updatedUser._id}/profile-pic?t=${cacheBuster}`;
      setImagePreview(freshUrl);
      setImageKey(cacheBuster);

      // 4. Extra safety refresh after small delay (helps with slow disk/fs sync in dev)
      setTimeout(() => {
        const finalBuster = Date.now();
        const finalUrl = `${process.env.REACT_APP_API_URL}/api/update/${updatedUser._id}/profile-pic?t=${finalBuster}`;
        setImagePreview(finalUrl);
        setImageKey(finalBuster);
      }, 400);
    }
    
  } catch (err) {
    console.error("❌ Update FAILED:", err);

    let errorMsg = "Update failed. Please try again.";

    // Improve user-facing messages based on common errors
    if (err.message?.includes("Network") || err.message?.includes("ECONNREFUSED")) {
      errorMsg = "Cannot reach the server — is the backend running on port 5000?";
    } else if (err.message?.includes("User ID not found")) {
      errorMsg = "Session issue — please log in again.";
    } else if (err?.response?.status === 400) {
      errorMsg = "Invalid input — check your fields or file type/size.";
    } else if (err?.response?.status === 404) {
      errorMsg = "User not found on server.";
    } else if (err?.response?.data?.message) {
      errorMsg = err.response.data.message;
    } else if (err?.response?.data?.errors) {
      // If backend sent validation errors
      const firstError = err.response.data.errors[0]?.msg || "Validation failed";
      errorMsg = firstError;
    }

    setLocalError(errorMsg);
  } finally {
    // Always stop loading spinner
    setIsUpdating(false);
  }
};

  return (
    <div className="p-4" style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
      {/* Top Breadcrumb */}
      <div className="mb-4 d-flex" style={{ height: "50px" }}>
        <h3 className="me-3">Edit Profile</h3>
        <p style={{ color: "#c94d00ff" }}>Home / Profile / Edit</p>
      </div>

      <Row>
        {/* Left Column - Profile Picture */}
        <Col md={6} sm={12} className="mb-4" style={{ position: "relative" }}>
          <Card className="text-center p-3" style={{ backgroundColor: "#ffffff" }}>
            <div className="mb-3">
              <img
                key={imageKey}
                src={imagePreview || "/default-profile.png"}
                alt="Profile"
                className="rounded-circle"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                onClick={() => setShowUpload((prev) => !prev)}
                onError={(e) => {
                  console.error("Image failed to load:", imagePreview);
                  e.target.src = "/default-profile.png";
                }}
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />
            </div>
            <h5>DN</h5>
          </Card>
        </Col>

        {/* Upload popup overlay */}
        {showUpload && (
          <Card
            style={{
              position: "absolute",
              left: "23vw",
              bottom: "0vh",
              width: "500px",
              zIndex: "10",
            }}
          >
            <Card.Header style={{ backgroundColor: "#c4c2c2ff" }}>
              <p style={{ fontSize: "20px", margin: 0 }}>Change Profile Picture</p>
            </Card.Header>
            <Card.Body>
              <h3>Upload Picture Below to Update:</h3>
              <div
                style={{
                  border: "1px dotted grey",
                  padding: "40px 20px",
                  cursor: "pointer",
                  textAlign: "center",
                }}
                onClick={() => profilepicRef.current.click()}
              >
                <p>Tap here to Upload Picture. Drag and drop if you're on PC</p>
                <p style={{ fontSize: "12px", color: "#666" }}>Accepted: JPG, PNG (Max 5MB)</p>
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  ref={profilepicRef}
                  onChange={handleProfilepicChange}
                  style={{ display: "none" }}
                />
                {localError && <p style={{ color: "red", marginTop: "10px" }}>{localError}</p>}
              </div>
            </Card.Body>
          </Card>
        )}

        {/* Right Column - Form */}
        <Col md={6} sm={12} style={{ position: "relative" }}>
          <Card className="p-4" style={{ backgroundColor: "#ffffff" }}>
            <Form onSubmit={updateProfile}>
              {/* Support note */}
              <Form.Group
                className="mb-3 p-3"
                style={{
                  backgroundColor: "#ffe6e6",
                  color: "#8b0000",
                  borderRadius: "5px",
                }}
              >
                <Form.Control
                  as="textarea"
                  value="Please kindly send a request to support@cargoextra.com to change your first name and last name."
                  readOnly
                  style={{
                    backgroundColor: "transparent",
                    color: "#8b0000",
                    border: "none",
                    resize: "none",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={data?.firstName || ""} disabled />
                <hr />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={data?.lastName || ""} disabled />
                <hr />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>E-mail Address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <hr />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Country Code</Form.Label>
                <Row>
                  <Col xs={4}>
                    <Form.Control
                      value={phoneCodes}
                      onChange={(e) => setPhoneCodes(e.target.value)}
                    />
                  </Col>
                </Row>
                <hr />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Row>
                  <Col xs={8}>
                    <Form.Control
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Col>
                </Row>
                <hr />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Payment Currency</Form.Label>
                <Form.Select
                  value={paymentCurrency}
                  onChange={(e) => setPaymentCurrency(e.target.value)}
                >
                  <option>USD ($)</option>
                  <option>NGN (₦)</option>
                  <option>EUR (€)</option>
                </Form.Select>
                <hr />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Time Zone</Form.Label>
                <Form.Select
                  value={timeZone}
                  onChange={(e) => setTimeZone(e.target.value)}
                >
                  <option value="">Select Time Zone</option>
                  {timeZones.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz}
                    </option>
                  ))}
                </Form.Select>
                <hr />
              </Form.Group>

              <Button
                type="submit"
                disabled={isUpdating}
                style={{ backgroundColor: "#ff9500", border: "none" }}
              >
                {isUpdating ? "Updating..." : "Update Profile"}
              </Button>

              {localError && (
                <p style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}>
                  {localError}
                </p>
              )}
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditProfile;