// src/components/CheckPNR.js
import React, { useState } from "react";
import "./CheckPNR.css";

const CheckPNR = () => {
  const [pnrNumber, setPnrNumber] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePNRSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Mock fetch function to simulate API call
    setTimeout(() => {
      // Simulate response data
      const mockResponse = {
        pnr: pnrNumber,
        status: "Confirmed",
        train: "12345 - Express Train",
        from: "Mumbai",
        to: "Delhi",
        journeyDate: "2024-12-01",
        coach: "S2",
        seat: "45",
      };
      setStatus(mockResponse);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="check-pnr-container">
      <h2>Check PNR Status</h2>
      <form onSubmit={handlePNRSubmit} className="pnr-form">
        <input
          type="text"
          placeholder="Enter PNR Number"
          value={pnrNumber}
          onChange={(e) => setPnrNumber(e.target.value)}
          maxLength="10"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Checking..." : "Check PNR"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {status && (
        <div className="pnr-status">
          <h3>PNR Status</h3>
          <p>
            <strong>Train:</strong> {status.train}
          </p>
          <p>
            <strong>From:</strong> {status.from}
          </p>
          <p>
            <strong>To:</strong> {status.to}
          </p>
          <p>
            <strong>Journey Date:</strong> {status.journeyDate}
          </p>
          <p>
            <strong>Coach:</strong> {status.coach}
          </p>
          <p>
            <strong>Seat:</strong> {status.seat}
          </p>
          <p>
            <strong>Status:</strong> {status.status}
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckPNR;
