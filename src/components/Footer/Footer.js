import React from "react";
import phone from "../../images/phone.svg";
import mail from "../../images/mail.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__text">Copyright © 2024 · Red Line & Blue Pressure Washing</p>
      </div>
      <div className="footer__right">
          <div className="footer__icon-wrapper">
            <img src={phone} alt="LinkedIn" className="footer__icon" />
            <p className="footer__icon-label">(386) 275-2180</p>
          </div>
          <div className="footer__icon-wrapper">
            <img src={mail} alt="LinkedIn" className="footer__icon" />
            <p className="footer__icon-label">email@email.com</p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
