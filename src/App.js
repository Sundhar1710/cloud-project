// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import CheckPNR from "./components/CheckPNR";
import SignUpPage from "./components/SignUpPage";
import PaymentPage from "./components/PaymentPage";
import PaymentSuccessPage from "./components/PaymentSuccessPage";
import ConfirmationPage from "./components/ConfirmationPage";
import BookTicket from "./components/BookTicket";
import TrainDetailsPage from "./components/TrainDetailsPage";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "sundhar" && password === "123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/home" />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/home"
            element={isLoggedIn ? <HomePage /> : <Navigate to="/" />}
          />
          <Route path="/BookTicket" element={<BookTicket />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PaymentPage />} />
          <Route path="/paymentSuccess" element={<PaymentSuccessPage />} />
          <Route path="/TrainDetailsPage" element={<TrainDetailsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/check-pnr" element={<CheckPNR />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route
            path="/ConfirmationPage"
            element={
              isLoggedIn ? <ConfirmationPage /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
