import React from "react";
import Container from "react-bootstrap/Container"; 
import Button from "react-bootstrap/Button";
import { FaYoutube } from "react-icons/fa";
import Track from "../../Track";
import { useSelector } from "react-redux";
import NavLoggedIn from "./NavLogged";

import bgImage from "../assets/bgg.png"; // background image

const Hero = () => {
  const { token } = useSelector((state) => state.user);

  const backgroundStyle = {
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url(${bgImage})
    `,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
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
    paddingTop: "clamp(60px, 10vw, 100px)",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  };

  return (
    <div style={backgroundStyle}>
      {token && <NavLoggedIn />} {/* only show if logged in */}

      <div style={heroStyle}>
        <Container>
          <h1
            style={{
              maxWidth: "clamp(400px, 50vw, 600px)",
              margin: "0 auto",
              fontSize: "clamp(1.5rem,5vw,3rem)",
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

          <div style={{ paddingTop: "10vh" }}>
            <Container>
              <Track />
            </Container>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
