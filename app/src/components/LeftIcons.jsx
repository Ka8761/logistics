import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import { FaUserCircle, FaQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LeftIcons = ({ setShowMinRect, showMinRect }) => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const handleIconClick = (key, route = null) => {
    setActive(key);

    if (route) {
      navigate(route);
      setShowMinRect(null);
    } else {
      setShowMinRect(key);
    }
  };

  return (
    <>
      <div className="left-icons-container">
        <div className="left-icons-scroll">
          <IconBlock
            active={active === "home"}
            label="Home"
            onClick={() => handleIconClick("home", "/dashboard")}
          >
            <IoHomeOutline />
          </IconBlock>

          <IconBlock
            active={active === "box"}
            label="Shipments"
            onClick={() => handleIconClick("box", "/dashboard/shipment")}
          >
            <BsBoxSeam />
          </IconBlock>

          <IconBlock
            active={active === "shop"}
            label="Shop For Me"
            onClick={() => handleIconClick("shop")}
          >
            <FiShoppingCart />
          </IconBlock>

          <IconBlock
            active={active === "pickup"}
            label="Pickups"
            onClick={() => handleIconClick("pickup")}
          >
            <LiaTruckPickupSolid />
          </IconBlock>

          <IconBlock
            active={active === "support"}
            label="Support"
            onClick={() => handleIconClick("support")}
          >
            <MdSupportAgent />
          </IconBlock>

          <IconBlock
            active={active === "docs"}
            label="Documents"
            onClick={() => handleIconClick("docs")}
          >
            <CiFileOn />
          </IconBlock>

          {/* EXTRA ICONS THAT WERE HIDDEN BEFORE */}
          <IconBlock
            active={active === "howitworks"}
            label="How It Works"
            onClick={() => handleIconClick("howitworks")}
          >
            <FaQuestionCircle />
          </IconBlock>

          <IconBlock
            active={active === "profile"}
            label="Profile"
            onClick={() => handleIconClick("profile", "/dashboard/profile")}
          >
            <FaUserCircle />
          </IconBlock>
        </div>
      </div>

      {/* INLINE CSS — SAME FILE AS REQUESTED */}
      <style>{`
        .left-icons-container {
          width: 80px;
          height: 100%;
          background: #ffffff;
          position: relative;
          z-index: 1200;
          overflow: hidden; /* IMPORTANT */
        }

        .left-icons-scroll {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 40px;
          overflow-y: auto; /* ✅ THIS FIXES MISSING ICONS */
          scrollbar-width: none;
        }

        .left-icons-scroll::-webkit-scrollbar {
          display: none;
        }

        .icon-block {
          width: 100%;
          text-align: center;
          padding: 16px 0;
          cursor: pointer;
          position: relative;
          flex-shrink: 0;
        }

        .icon-block svg {
          font-size: 24px;
          color: #666;
          transition: color 0.2s ease;
        }

        .icon-block:hover svg,
        .icon-block.active svg {
          color: orange;
        }

        .icon-block.active::before {
          content: "";
          position: absolute;
          left: 0;
          top: 15%;
          width: 4px;
          height: 70%;
          background: orange;
          border-radius: 4px;
        }

        .icon-label {
          font-size: 11px;
          margin-top: 4px;
          color: #444;
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .left-icons-container {
            width: 60px;
          }

          .icon-label {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

const IconBlock = ({ children, label, active, onClick }) => {
  return (
    <div className={`icon-block ${active ? "active" : ""}`} onClick={onClick}>
      {children}
      <div className="icon-label">{label}</div>
    </div>
  );
};

export default LeftIcons;
