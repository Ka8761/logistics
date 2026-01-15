import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

// Helper to extract YouTube video ID
function getYouTubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
  } catch (e) {
    const m = url.match(/([a-zA-Z0-9_-]{11})/);
    return m ? m[1] : null;
  }
  return null;
}

const How = () => {
  const videos = [
    { url: "https://youtu.be/hZ7UACECmBw", title: "How it Works - Intro" },
    {
      url: "https://youtu.be/p8UUKHkymiE",
      title: "Step by Step Process on How to Arrange Pick Up",
    },
    {
      url: "https://youtu.be/kmdY0Kghzfw",
      title: "Third Process Video",
    },
  ];

  return (
    <Container className="my-4 my-md-5 px-3 px-md-0">
      {/* Heading */}
      <div className="mb-3 mb-md-4">
        <h2 className="fw-bold text-center text-md-start">How It Works</h2>
        <hr />
      </div>

      {/* Cards */}
      <Row className="g-3 g-md-4">
        {videos.map((v, idx) => {
          const id = getYouTubeId(v.url);
          const thumbnail = id
            ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
            : null;

          return (
            <Col lg={6} md={6} sm={12} key={idx}>
              <Card
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    cursor: "pointer",
                    background: "#000",
                  }}
                  role="button"
                  onClick={() => window.open(v.url, "_blank")}
                >
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={v.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        display: "block",
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "200px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#f0f0f0",
                        color: "#777",
                      }}
                    >
                      No thumbnail
                    </div>
                  )}

                  {/* Overlay title */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      padding: "8px 12px",
                      background: "rgba(0, 0, 0, 0.6)",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    {v.title}
                  </div>

                  {/* Play icon */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "#ff0000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="26"
                      height="26"
                    >
                      <path fill="#ffffff" d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default How;
