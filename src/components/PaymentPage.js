// src/components/PaymentPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
  const navigate = useNavigate();

  // Handle payment selection
  const handlePayment = (paymentMethod) => {
    alert(`Payment through ${paymentMethod} selected!`);
    // Navigate to the payment success page
    navigate("/paymentSuccess");
  };

  return (
    <div className="payment-container">
      <h1>Select Payment Method</h1>
      <div className="payment-options">
        <button onClick={() => handlePayment("Credit Card")}>
          Credit Card
        </button>
        <button onClick={() => handlePayment("Debit Card")}>Debit Card</button>
        <button onClick={() => handlePayment("UPI")}>UPI</button>
        <button onClick={() => handlePayment("Net Banking")}>
          Net Banking
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
