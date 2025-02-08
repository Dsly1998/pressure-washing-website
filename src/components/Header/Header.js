import React from "react";
import logo from "../../images/logo.png";
import Facebook from "../../images/facebookcircle.svg";
import phone from "../../images/phone.svg";
import "./Header.css"; // Import the CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
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
          <p className="header__contact-line-1">Schedule Today</p>
          <p className="header__contact-line-2">
            <img src={phone} alt="phone" className="header__contact-icon" />
            (386) 275-2180
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=61565379435527&mibextid=LQQJ4d"
            target="_blank"
            className="header__contact-line-3"
          >
            <img
              src={Facebook}
              alt="Facebook"
              className="header__facebook-icon"
            />
            Facebook
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
