import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LeftIcons = ({ showMinRect, setShowMinRect }) => {
  const navigate = useNavigate();

  const handleClick = (key, route) => {
    if (route) {
      navigate(route);
      setShowMinRect(null);
    } else {
      setShowMinRect(key);
    }
  };

  return (
    <>
      <div className="left-icons shadow">
        <IconBlock label="Home" onClick={() => handleClick("home", "/dashboard")}>
          <IoHomeOutline />
        </IconBlock>

        <IconBlock label="Shipments" onClick={() => handleClick("shipment", "/dashboard/shipment")}>
          <BsBoxSeam />
        </IconBlock>

        <IconBlock label="Shop" onClick={() => handleClick("shop")}>
          <FiShoppingCart />
        </IconBlock>

        <IconBlock label="Pickups" onClick={() => handleClick("pickup")}>
          <LiaTruckPickupSolid />
        </IconBlock>

        <IconBlock label="Support" onClick={() => handleClick("support")}>
          <MdSupportAgent />
        </IconBlock>

        <IconBlock label="How" onClick={() => handleClick("howitworks")}>
          <AiOutlineInfoCircle />
        </IconBlock>

        <IconBlock label="Profile" onClick={() => handleClick("profile")}>
          <FaUserCircle />
        </IconBlock>
      </div>

      <style>{`
        .left-icons {
          width: 80px;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 80px;
          overflow-y: auto; 
          z-index: 1000;
        }

        .icon-block {
          width: 100%;
          text-align: center;
          padding: 18px 0;
          cursor: pointer;
        }

        .icon-block svg {
          font-size: 26px;
          color: #333;
        }

        .icon-label {
          font-size: 11px;
          margin-top: 4px;
        }

        .icon-block:hover svg {
          color: orange;
        }

        @media (max-width: 768px) {
          .left-icons {
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

const IconBlock = ({ children, label, onClick }) => (
  <div className="icon-block" onClick={onClick}>
    {children}
    <div className="icon-label">{label}</div>
  </div>
);

export default LeftIcons;
