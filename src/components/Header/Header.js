import React from "react";
import "./Header.css"; // Import the CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1 className="header__title">
          <span className="header__title--line1">RED LINE & BLUE</span>
          <br />
          <span className="header__title--line2">PRESSURE WASHING</span>
        </h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

