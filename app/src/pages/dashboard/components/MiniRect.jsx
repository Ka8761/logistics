import React from "react";
import { useNavigate } from "react-router-dom";

const SIDEBAR_WIDTH = 80; // must match LeftIcons width

const MiniRect = ({ showMinRect, setShowMinRect }) => {
  const navigate = useNavigate();

  if (!showMinRect) return null;

  const handleNav = (path) => {
    navigate(path);
    setShowMinRect(null);
  };

  return (
    <>
      <div className="mini-rect">
        {/* SHOP */}
        {showMinRect === "shop" && (
          <>
            <MiniItem title="New Procurement" onClick={() => handleNav("/dashboard/procurement-form")} />
            <MiniItem title="My Procurements" onClick={() => handleNav("/dashboard/my-procurements")} />
          </>
        )}

        {/* PICKUP */}
        {showMinRect === "pickup" && (
          <>
            <MiniItem title="New Pickup" onClick={() => handleNav("/dashboard/pickup-form")} />
            <MiniItem title="My Pickups" onClick={() => handleNav("/dashboard/my-pickups")} />
          </>
        )}

        {/* SUPPORT */}
        {showMinRect === "support" && (
          <>
            <MiniItem title="New Ticket" onClick={() => handleNav("/dashboard/new-ticket")} />
            <MiniItem title="My Tickets" onClick={() => handleNav("/dashboard/my-tickets")} />
          </>
        )}

        {/* HOW */}
        {showMinRect === "howitworks" && (
          <>
            <MiniItem title="How It Works" onClick={() => handleNav("/dashboard/how")} />
          </>
        )}

        {/* PROFILE */}
        {showMinRect === "profile" && (
          <>
            <MiniItem title="Edit Profile" onClick={() => handleNav("/dashboard/profile/edit-profile")} />
            <MiniItem title="Change Password" onClick={() => handleNav("/dashboard/profile/update-password")} />
            <MiniItem title="KYC" onClick={() => handleNav("/dashboard/profile/kyc")} />
          </>
        )}
      </div>

      {/* INLINE CSS — AS YOU REQUESTED */}
      <style>{`
        .mini-rect {
          position: fixed;
          top: 70px; /* below navbar */
          left: ${SIDEBAR_WIDTH}px; /* 🔥 THIS IS THE FIX */
          width: 300px;
          height: calc(100vh - 70px);
          background: #ffffff;
          box-shadow: 2px 0 10px rgba(0,0,0,0.08);
          z-index: 1100;
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: slideIn 0.25s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: translateX(-10px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .mini-item {
          padding: 14px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          background: #f8f9fa;
          transition: background 0.2s ease;
        }

        .mini-item:hover {
          background: #ffe8c2;
        }

        @media (max-width: 768px) {
          .mini-rect {
            width: 220px;
          }
        }
      `}</style>
    </>
  );
};

const MiniItem = ({ title, onClick }) => (
  <div className="mini-item" onClick={onClick}>
    {title}
  </div>
);

export default MiniRect;
