// src/components/ConfirmationPage.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmationPage.css";

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { source, destination, travelDate, classType, train } = location.state;

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const price = train.price[classType.toLowerCase()];

  const handleConfirmBooking = () => {
    if (isChecked) {
      navigate("/payment");
    }
  };

  return (
    <div className="confirmation-container">
      <h1>Booking Confirmation</h1>
      <div className="details">
        <p>
          <strong>Source:</strong> {source}
        </p>
        <p>
          <strong>Destination:</strong> {destination}
        </p>
        <p>
          <strong>Travel Date:</strong> {travelDate}
        </p>
        <p>
          <strong>Class Type:</strong> {classType}
        </p>
        <p>
          <strong>Train:</strong> {train.trainName}
        </p>
        <p>
          <strong>Train No:</strong> {train.trainNo}
        </p>
        <p>
          <strong>Arrival Time:</strong> {train.arriveTime}
        </p>
        <p>
          <strong>Departure Time:</strong> {train.departTime}
        </p>
        <p>
          <strong>Price (Selected Class):</strong> ₹{train.price}
        </p>
      </div>

      <div className="checkbox-container">
        <input
          type="checkbox"
          id="confirmBooking"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="confirmBooking">
          I agree to the terms and conditions
        </label>
      </div>

      <button
        className={`confirm-button ${isChecked ? "active" : ""}`}
        disabled={!isChecked}
        onClick={handleConfirmBooking}
      >
        Confirm Booking - ₹{train.price}
      </button>
    </div>
  );
};

export default ConfirmationPage;
