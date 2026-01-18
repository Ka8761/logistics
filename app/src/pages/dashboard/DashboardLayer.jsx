import { Outlet } from "react-router-dom";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import NavLogged from "../../components/NavLogged";
import Navigationbar from "../../components/Navbar";
import LeftIcons from "./components/LeftIcons";
import MiniRect from "./components/MiniRect";

const DashboardLayout = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [showMinRect, setShowMinRect] = useState(null);
  const refContainer = useRef(null);

 const { isLoggedIn } = useSelector((state) => state.user);

  const handleOutsideClick = (e) => {
    if (refContainer.current && !refContainer.current.contains(e.target)) {
      setShowMinRect(null);
    }
  };

  return (
    <>
      {/* SHOW CORRECT NAVBAR */}
      {isLoggedIn ? (
        <NavLogged
          showSidebar={showSideBar}
          setShowSidebar={setShowSideBar}
        />
      ) : (
        <Navigationbar />
      )}

      <div className="dashboard-wrapper">
        {/* LEFT SIDEBAR */}
        <aside
          className={`sidebar ${showSideBar ? "open" : "closed"}`}
        >
          <LeftIcons
            setShowMinRect={setShowMinRect}
            showMinRect={showMinRect}
          />
        </aside>

        {/* MINI RECT */}
        {showMinRect && (
          <div ref={refContainer} className="mini-rect-wrapper">
            <MiniRect
              setShowMinRect={setShowMinRect}
              showMinRect={showMinRect}
            />
          </div>
        )}

        {/* MAIN CONTENT */}
        <main
          className={`main-content ${
            showSideBar ? "with-sidebar" : ""
          }`}
          onClick={handleOutsideClick}
        >
          <Outlet />
        </main>
      </div>

      {/* INLINE CSS (AS YOU REQUESTED) */}
      <style>{`
        .dashboard-wrapper {
          display: flex;
          width: 100%;
          min-height: 100vh;
        }

        .sidebar {
          position: fixed;
          top: 70px;
          left: 0;
          width: 80px;
          height: calc(100vh - 70px);
          background: #fff;
          box-shadow: 2px 0 8px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
          z-index: 1000;
          overflow-y: auto;
        }

        .sidebar.closed {
          transform: translateX(-100%);
        }

        .sidebar.open {
          transform: translateX(0);
        }

        .mini-rect-wrapper {
          position: fixed;
          top: 70px;
          left: 80px;
          height: calc(100vh - 70px);
          z-index: 1100;
        }

        .main-content {
          margin-top: 70px;
          padding: 2rem;
          flex-grow: 1;
          transition: margin-left 0.3s ease;
          overflow-y: auto;
        }

        .main-content.with-sidebar {
          margin-left: 80px;
        }

        @media (max-width: 768px) {
          .main-content.with-sidebar {
            margin-left: 0;
          }

          .mini-rect-wrapper {
            left: 60px;
          }
        }
      `}</style>
    </>
  );
};

export default DashboardLayout;
