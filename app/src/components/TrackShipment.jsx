import React from "react";
import Container from "react-bootstrap/esm/Container";
import { BsCheck } from "react-icons/bs";
import FormShipment from "./FormShipment";

const TrackShipment = () => {
  return (
    <div style={{position:'relative', backgroundColor:'transparent'}}>
      <Container>
        <div className="d-none d-md-block">
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
             position: 'absolute',
            left: '4vw',
            top: '0',
            transform: "rotate(-30deg)",
          }}
        >
          <span
            style={{
              position: "relative",
              display: "inline-block",
              width: "40px",
              height: "40px",
            }}
          >
            <span className="splash-ring" />
            <span
              style={{
                backgroundColor: "green",
                borderRadius: "50%",
                padding: "0.3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "40px",
                height: "40px",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "20px",
                  height: "20px",
                }}
              >
                <BsCheck style={{ color: "green", fontSize: "14px" }} />
              </span>
            </span>
          </span>
          <span style={{ color: "white", fontSize: "1rem" }}>
            Items Delivered
          </span>
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            position: 'absolute',
            left: '9vw',
            top: '20vh',
            transform: "rotate(1deg)",
          }}
        >
          <span
            style={{
              position: "relative",
              display: "inline-block",
              width: "40px",
              height: "40px",
            }}
          >
            <span className="splash-ring" />
            <span
              style={{
                backgroundColor: "green",
                borderRadius: "50%",
                padding: "0.3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "40px",
                height: "40px",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "20px",
                  height: "20px",
                }}
              >
                <BsCheck style={{ color: "green", fontSize: "14px" }} />
              </span>
            </span>
          </span>
          <span style={{ color: "white", fontSize: "1rem" }}>
            Fast and Reliable
          </span>
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            position: 'absolute',
            right: '7vw',
            transform: "rotate(30deg)",
          }}
        >
          <span
            style={{
              position: "relative",
              display: "inline-block",
              width: "40px",
              height: "40px",
            }}
          >
            <span className="splash-ring" />
            <span
              style={{
                backgroundColor: "green",
                borderRadius: "50%",
                padding: "0.3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "40px",
                height: "40px",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "20px",
                  height: "20px",
                }}
              >
                <BsCheck style={{ color: "green", fontSize: "14px" }} />
              </span>
            </span>
          </span>
          <span style={{ color: "white", fontSize: "1rem" }}>
            Items Shipped
          </span>
        </p>
        </div>
        <div style={{width:'33vw', margin: '0 auto'}} className='w-100 w-md-50 mx-auto'>
            <FormShipment/>
        </div>
        </Container>
      <style>
        {`@keyframes splashCircle {
  0% {
    opacity: 0.7;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.35;
    transform: scale(1.6);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
}

.splash-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  background-color: green;
  border-radius: 50%;
  animation: splashCircle 2s ease-out infinite;
  z-index: 0;
}
    `}
      </style>
    </div>
  );
};

export default TrackShipment;
