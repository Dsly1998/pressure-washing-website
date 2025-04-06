import React, { useState } from "react";
import "./AppointmentModal.css";

function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Request an Appointment</h2>

        <form
          action="https://formsubmit.co/redlineandbluepressurewashing@gmail.com"
          method="POST"
          className="appointment-form"
        >
          {/* Optional: Disable CAPTCHA and set redirect */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://redlineandbluepressurewashing.com/thank-you.html"
          />

          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(123) 456-7890"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Service Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Street address, City, State, Zip"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Preferred Service Date *</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tell us more about your service needs..."
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentModal;
