/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import logo from "../../images/logo.png";
import Facebook from "../../images/facebookcircle.svg";
import phone from "../../images/phone.svg";
import Instagram from "../../images/instagram.svg";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import "./Header.css"; // Import the CSS file for styling

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-img" src={logo} />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="header__nav-item">
            <a href="#services">Services</a>
          </li>
          <li className="header__nav-item">
            <a href="#about">About</a>
          </li>
          <li className="header__nav-item">
            <a href="#gallery">Gallery</a>
          </li>
        </ul>
      </nav>
      <div className="header__contact-info">
        <div className="header__contact-column">
          <button
            className="header__schedule-button"
            onClick={() => setIsModalOpen(true)}
          >
            Request Appointment
          </button>
          <p className="header__contact-line-2">
            <img src={phone} alt="phone" className="header__contact-icon" />
            (386) 275-2180
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=61565379435527&mibextid=LQQJ4d"
            target="_blank"
            className="header__contact-line-3"
            rel="noreferrer"
          >
            <img
              src={Facebook}
              alt="Facebook"
              className="header__facebook-icon"
            />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/red_line_and_blue_pw/"
            target="_blank"
            rel="noopener noreferrer"
            className="header__contact-line-3"
          >
            <img
              src={Instagram}
              alt="Instagram"
              className="header__facebook-icon"
            />
            Instagram
          </a>
        </div>
      </div>
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
}

export default Header;
