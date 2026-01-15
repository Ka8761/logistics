import React, { useState } from "react";
import { Container, InputGroup,Row, Col, Button, Form } from "react-bootstrap";
import bgimg from "../assets/cargo-bg.png";
import bgsubimg from "../assets/cargocardbg.png";
import logo from "../assets/logo.png";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {loginUser} from '../redux/userSlice'


const Login = () => {
   const [password, setPassword] = useState("");
   const navigate = useNavigate()
   const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");

    const dispatch = useDispatch()
    const {loading, error} = useSelector((state)=>state.user)

 async function handleSubmit(e) {
  e.preventDefault();

  try {
    const actionResult = await dispatch(loginUser({ email, password })).unwrap(); 
    console.log("Login success - full response:", actionResult); 
    localStorage.setItem("userInfo", JSON.stringify({
      token: actionResult.token,         
      user: actionResult.user || actionResult, // or whatever field has user data
    }));

    navigate('/dashboard');
  } catch (err) {
    console.error("Login failed:", err);
  }
}

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
          <h2>LOGIN!</h2>
          <p>
            Please use your credentials to login. If you are not a member, please register.
          </p>
        </Col>

        {/* Right Part */}
        <Col xs={12} lg={8} className="bg-white p-4">
          <Form onSubmit={handleSubmit}>
            <img
              src={logo}
              alt="logo"
              width="150px"
              style={{ marginLeft: "-5px" }}
              className="mb-4"
            />
            {/* form input part */}
            <Row>
            <Col xs={12} md={6}>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="Enter email"
               value={email}
              onChange={(e) => setEmail(e.target.value)}
               />
             </Form.Group>

             <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
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

            <p><Link to='/forgot'>Forgot Password</Link></p>
            </Col>

            </Row>

            {/* button down part */}
            <div className="d-flex flex-wrap gap-3">
              <Button
                type="submit"
                style={{ backgroundColor: "#ff8800ff", border: "none" }}
              >
                {loading? 'Logging in....' : 'Login'}
              </Button>

              <Button
                type="button"
                style={{
                  backgroundColor: "#d7d7d7ff",
                  border: "none",
                  color: "black",
                }}
              >
                <Link to='/register'>
                New User? SignUp
                </Link>
              </Button>
              {error && <p style={{color:'red'}}>{error}</p>}
            </div>

            {/* divider + track shipment link */}
            <div style={{ borderTop: '1px solid #a3a3a3', marginTop: '30px', paddingTop: '15px' }}>
             <p style={{ color: '#ff5900', margin: 0, cursor: 'pointer' }}>
              Track Shipment
             </p>
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
