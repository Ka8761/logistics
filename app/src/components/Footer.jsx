import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import logoo from '../assets/logo.png'
const Footer = () => {
  return (
    <div
      className="text-light py-5 p-5"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} // Almost black with slight opacity
    >
      <div className="container">
        <div className="row">
          {/* Column 1: Logo + Description + Socials */}
          <div className="col-12 col-md-3 mb-4">
            <img src={logoo} alt='logo' />
            <p style={{ opacity: 0.8 }}>
              Reliable Logistics, Delivered On Time. From local dispatch to global freight — we move your world.
            </p>
            <div className="d-flex gap-3">
              <a href="https://web.facebook.com/CargoXtra?_rdc=1&_rdr" className="text-light fs-5"><FaFacebookF /></a>
              <a href="https://www.instagram.com/cargoxtra/" className="text-light fs-5"><FaInstagram /></a>
              <a href="https://x.com/CargoXtra" className="text-light fs-5"><FaTwitter /></a>
              <a href="https://www.linkedin.com/company/cargoextra/" className="text-light fs-5"><FaLinkedin /></a>
              <a href="https://wa.me/2347000100400" className="text-light fs-5"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Column 2: Lagos & Yaba Warehouses */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold">Lagos Warehouse</h5>
            <p style={{ opacity: 0.7 }}>
              <FaMapMarkerAlt /> 45, Osolo Way, By ITF Building, Ajao Estate, Isolo, Lagos, Nigeria
              <br />
              <FaPhoneAlt /> +234 700 010 0400<br />
              <FaPhoneAlt /> +234 909 0490 683
            </p>

            <h5 className="fw-bold">Yaba Export Centre</h5>
            <p style={{ opacity: 0.7 }}>
              <FaMapMarkerAlt /> 34/36 Ojuelegba Road, opposite Total Filling Station, Yaba, Lagos Nigeria
              <br />
              <FaPhoneAlt /> +234 708 0533 731<br />
              <FaPhoneAlt /> +234 810 7377 716
            </p>
          </div>

          {/* Column 3: US Warehouse + Services */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold">US Warehouse</h5>
            <p style={{ opacity: 0.7 }}>
              <FaMapMarkerAlt /> 4258 Bluebonnet Dr., Stafford, TX. 77477 USA<br />
              <FaPhoneAlt /> +1 281-402-8088
            </p>

            <h5 className="fw-bold mt-4">Our Services</h5>
            <ul className="list-unstyled" style={{ opacity: 0.7 }}>
              <li>Air Shipping</li>
              <li>Shop For Me</li>
              <li>Warehousing</li>
              <li>Auto Shipping</li>
            </ul>
          </div>

          {/* Column 4: Download App */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold">Download Our App</h5>
            <div
              className="p-3 rounded"
              style={{ backgroundColor: '#000', opacity: 0.9 }}
            >
              <p>Get it on:</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                width="130"
                className="mb-2"
              />
              <br />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                width="130"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
