import React from "react";
import Container from "react-bootstrap/Container"; 
import Button from "react-bootstrap/Button";
import { FaYoutube } from "react-icons/fa";
import TrackShipment from "./TrackShipment";
import NavLogged from "./NavLogged";
import bgImage from "../assets/bgg.png";

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",  // ✅ FIX: Changed from 100% to cover
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100vw",           // ✅ FIX: Full viewport width
    maxWidth: "100vw",        // ✅ FIX: Prevent overflow
    overflowX: "hidden",      // ✅ FIX: Hide horizontal scroll
    display: "flex",
    flexDirection: "column",
    position: "relative",
    margin: 0,
    padding: 0
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.35)",
    zIndex: 0,
  };

  const heroStyle = {
    position: "relative",
    zIndex: 1,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    paddingTop: "80px", // ✅ FIX: Fixed value for navbar height
    paddingLeft: "1rem",
    paddingRight: "1rem",
    width: "100%",
    maxWidth: "100%",
    overflowX: "hidden"  // ✅ FIX: No horizontal overflow
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div>
      <NavLogged />
      <div style={heroStyle}>
        <Container fluid style={{ maxWidth: "1400px", paddingLeft: "15px", paddingRight: "15px" }}>
          <h1
            style={{
              maxWidth: "clamp(400px, 50vw, 600px)",
              margin: "0 auto",
              fontSize: "clamp(1.5rem,5vw,3rem)",
              lineHeight: 1.3
            }}
          >
            Delivering{" "}
            <span style={{ color: "orange" }}>Trusted logistic solutions</span>{" "}
            <span
              style={{
                display: "inline-block",
                animation: "slideUp 4s ease-out forwards",
              }}
            >
              the best
            </span>
          </h1>

          <p
            style={{
              maxWidth: "clamp(400px, 50vw, 600px)",
              margin: "1rem auto",
              fontSize: "clamp(0.4rem, 2vw, 1rem)",
            }}
          >
            We provide fast, reliable, and affordable global shipping services.
            From import to export, we help individuals and businesses move goods
            seamlessly and stress-free.
          </p>

          <Button
            href="https://youtu.be/PQXcp_orgV4?si=209vKygea8xnoADE"
            target="_blank"
            rel="noreferrer noopener"
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "30px",
              display: "flex",
              margin: "1.2rem auto",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <FaYoutube style={{ color: "orange", fontSize: "1.2rem" }} />
            How it works
          </Button>

          <div style={{ paddingTop: "10vh", width: "100%" }}>
            <Container fluid style={{ maxWidth: "1400px" }}>
              <TrackShipment />
            </Container>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
