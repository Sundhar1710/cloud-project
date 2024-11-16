import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookTicket.css";

const BookTicket = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [classType, setClassType] = useState("");
  const navigate = useNavigate();

  const handleBooking = () => {
    if (source && destination && travelDate && classType) {
      // Pass the data to the TrainDetailsPage via state
      navigate("/TrainDetailsPage", {
        state: { source, destination, travelDate, classType },
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="booking-container">
      {/* Left side: Image */}
      <div className="image-container">
        <img src="/images/bookticket-side-image.png" alt="Train" />
      </div>

      {/* Right side: Content */}
      <div className="content-container">
        <form id="bookingForm" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            id="source"
            placeholder="Source Station"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
          />
          <input
            type="text"
            id="destination"
            placeholder="Destination Station"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
          <input
            type="date"
            id="travelDate"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            required
          />
          <select
            id="classType"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
            required
          >
            <option value="">Select Class</option>
            <option value="Sleeper">Sleeper</option>
            <option value="AC">AC</option>
            <option value="Chair Car">Chair Car</option>
            <option value="Executive Class">Executive Class</option>
          </select>
          <button type="button" onClick={handleBooking}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTicket;
