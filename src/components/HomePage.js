import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [selectedService, setSelectedService] = useState("");
  const navigate = useNavigate();

  const handleServiceSelection = (event) => {
    const service = event.target.value;
    setSelectedService(service);

    // Navigate to the selected service page
    if (service === "bookTicket") {
      navigate("/BookTicket");
    } else if (service === "checkPNR") {
      navigate("/check-pnr");
    } else if (service === "liveTrainStatus") {
      navigate("/live-train-status");
    }
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="navbar">
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/feedback">Feedback</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content Section */}

      <form id="serviceForm">
        <div className="option">
          <input
            type="radio"
            id="bookTicket"
            name="service"
            value="bookTicket"
            checked={selectedService === "bookTicket"}
            onChange={handleServiceSelection}
          />
          <label htmlFor="bookTicket">
            <img
              src={`${process.env.PUBLIC_URL}/images/book_ticket.png`}
              alt="Book Ticket"
              className="icon"
            />
            Book Train Ticket
          </label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="checkPNR"
            name="service"
            value="checkPNR"
            checked={selectedService === "checkPNR"}
            onChange={handleServiceSelection}
          />
          <label htmlFor="checkPNR">
            <img
              src={`${process.env.PUBLIC_URL}/images/check_pnr.png`}
              alt="Check PNR"
              className="icon"
            />
            Check PNR Status
          </label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="liveTrainStatus"
            name="service"
            value="liveTrainStatus"
            checked={selectedService === "liveTrainStatus"}
            onChange={handleServiceSelection}
          />
          <label htmlFor="liveTrainStatus">
            <span className="upcoming-tag">Upcoming</span>
            <img
              src={`${process.env.PUBLIC_URL}/images/live_train_status.png`}
              alt="Live Train Status"
              className="icon"
            />
            Live Train Status
          </label>
        </div>
      </form>
    </>
  );
};

export default HomePage;
