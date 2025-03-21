import React from "react";
import logo from "../../images/logo.png";
import phone from "../../images/phone.svg";
import mail from "../../images/mail.svg";
import Facebook from "../../images/facebookcircle.svg";
import Instagram from "../../images/instagram.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <img className="footer__logo-img" src={logo} alt="Red Line & Blue Logo" />
      </div>
      <div className="footer__top">
        <div className="footer__icon-wrapper">
          <img src={phone} alt="Phone" className="footer__icon" />
          <p className="footer__icon-label">(386) 275-2180</p>
        </div>
        <a 
          href="https://www.facebook.com/profile.php?id=61565379435527&mibextid=LQQJ4d" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer__icon-wrapper footer__facebook-wrapper"
        >
          <img src={Facebook} alt="Facebook" className="footer__icon" />
          Facebook
        </a>
        <a 
          href="https://www.instagram.com/red_line_and_blue_pw/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer__icon-wrapper footer__facebook-wrapper"
        >
          <img src={Instagram} alt="Instagram" className="footer__icon" />
          Instagram
        </a>
      </div>
      <div className="footer__icon-wrapper">
        <img src={mail} alt="Email" className="footer__icon" />
        <p className="footer__icon-label">Redlineandbluepressurewashing@gmail.com</p>
      </div>
      <div className="footer__bottom">
        <p className="footer__text">Copyright © 2024 · Red Line & Blue Pressure Washing</p>
      </div>
    </footer>
  );
}

export default Footer;
