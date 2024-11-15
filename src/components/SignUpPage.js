// src/components/SignUpPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigate from react-router-dom for redirection
import { motion } from "framer-motion"; // Import Framer Motion for animations
import "./SignUp.css"; // Import your SignUp CSS

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use the navigate hook for redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically save the data to your backend
    // Redirect to the login page after successful sign up
    navigate("/login");
  };

  return (
    <motion.div
      className="signup-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/LoginPage">Login</a>
      </p>
    </motion.div>
  );
};

export default SignUpPage;
