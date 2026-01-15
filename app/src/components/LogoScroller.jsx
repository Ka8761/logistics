import React from 'react'
import img1 from '../assets/catalogue.png';
import img2 from '../assets/circleloos.png';
// import img3 from '../assets/dube.png';
import img4 from '../assets/quotient.png';
import img5 from '../assets/sisy.png';
import AboutUs from './AboutUs';

const LogoScroller = () => {
  const logos = [img1, img2, img4, img5];

  return (
    <>
      <h1
        className='p-5'
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginTop: '3rem',
        }}
      >
        Our Recent Clients and Partners
      </h1>

      <div className='scroll-container'>
        <div className='scroll-track'>
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`logo-${index}`}
              src={logo}
              alt={`partner logo ${index % logos.length + 1}`}
              className='scroll-logo'
            />
          ))}
        </div>

        <style>{`
          .scroll-container {
            height: 160px; /* ↓ reduced */
            width: 100%;
            overflow: hidden;
            position: relative;
          }

          .scroll-track {
            display: flex;
            align-items: center;
            animation: scroller 10s linear infinite;
          }

          .scroll-logo {
            height: 100px;   /* ↓ reduced */
            width: auto;     /* keeps logo proportions */
            margin: 0 1.5rem;
            object-fit: contain;
            filter: brightness(1.1) contrast(1.1);
          }

          @keyframes scroller {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .scroll-container::before,
          .scroll-container::after {
            content: "";
            position: absolute;
            top: 0;
            width: 100px;
            height: 100%;
            z-index: 2;
          }

          .scroll-container::before {
            left: 0;
            background: linear-gradient(to right, white 0%, transparent 100%);
          }

          .scroll-container::after {
            right: 0;
            background: linear-gradient(to left, white 0%, transparent 100%);
          }
        `}</style>
      </div>

      <AboutUs />
    </>
  )
}

export default LogoScroller;
