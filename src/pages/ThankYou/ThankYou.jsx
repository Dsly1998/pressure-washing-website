// src/pages/ThankYou/ThankYou.jsx
import React from "react";
import "./ThankYou.css";
import logo from "../../images/logo.png"; // Import the logo image

function ThankYou() {
  return (
    <div className="thank-you">
      <div className="thank-you__container">
        <div className="thank-you__icon">
          <img
            src={logo}
            alt="Red Line & Blue Pressure Washing Logo"
            className="thank-you__logo"
          />
        </div>
        <h1 className="thank-you__title">
          Thank You for Your Appointment Request!
        </h1>
        <p className="thank-you__message">
          We've received your request and will be in touch with you shortly.
          Please note that an appointment has not been confirmed yet, and is
          subject to change based on availability. We will do our best to
          accommodate your request. Thank you again for choosing Red Line and
          Blue Pressure Washing!
        </p>
        <a href="/" className="thank-you__home-link">
          Return Home
        </a>
      </div>
    </div>
  );
}

export default ThankYou;
