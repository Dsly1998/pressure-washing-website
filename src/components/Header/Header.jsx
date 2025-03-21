import React, { useState } from "react";
import "./Header.css";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

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
