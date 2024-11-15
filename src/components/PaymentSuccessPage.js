// src/components/PaymentSuccessPage.js
import React, { useEffect, useState } from "react";
import "./PaymentSuccessPage.css";

const PaymentSuccessPage = () => {
  const [isPopped, setIsPopped] = useState(false);
  const [pnrNumber, setPnrNumber] = useState("");

  useEffect(() => {
    // Trigger the popping animation after the component mounts
    setIsPopped(true);

    // Generate a random PNR number
    const generatePnrNumber = () => {
      const randomPnr = Math.random().toString().slice(2, 12); // Generate a 10-digit number
      setPnrNumber(randomPnr);
    };

    generatePnrNumber();
  }, []);

  return (
    <div className="success-container">
      <h1 className={isPopped ? "pop-in" : ""}>Your Booking is Confirmed!</h1>
      <div className="pnr-container">
        <h2>Your PNR Number:</h2>
        <p className="pnr-number">{pnrNumber}</p>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
