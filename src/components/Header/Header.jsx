import React, { useState } from "react";
import logo from "../../images/logo.png";
import Facebook from "../../images/facebookcircle.svg";
import phone from "../../images/phone.svg";
import "./Header.css";
import AppointmentModal from '../AppointmentModal/AppointmentModal';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="header">
      {/* ... existing header content ... */}
      <button 
        className="header__appointment-button"
        onClick={() => setIsModalOpen(true)}
      >
        Schedule Service
      </button>
      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  );
}

export default Header; 