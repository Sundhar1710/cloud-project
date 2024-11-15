// src/components/TrainDetailsPage.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TrainDetailsPage.css";

const TrainDetailsPage = () => {
  const location = useLocation();
  const { source, destination, travelDate, classType } = location.state;
  const navigate = useNavigate();

  // Sample train details with different prices
  const trainDetails = [
    {
      trainNo: "12345",
      trainName: "Express Train",
      arriveTime: "10:00 AM",
      departTime: "10:30 AM",
      price: 250,
    },
    {
      trainNo: "67890",
      trainName: "Fast Track",
      arriveTime: "11:00 AM",
      departTime: "11:30 AM",
      price: 300,
    },
    {
      trainNo: "11223",
      trainName: "City Link",
      arriveTime: "12:00 PM",
      departTime: "12:30 PM",
      price: 200,
    },
    // Add more trains here as needed with different prices
  ];

  // Handle booking of a specific train
  const handleTrainBooking = (train) => {
    navigate("/ConfirmationPage", {
      state: {
        source,
        destination,
        travelDate,
        classType,
        train: train,
      },
    });
  };

  return (
    <div className="container">
      <h1>Train Details</h1>
      <div className="details">
        <h3>Travel Details</h3>
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
      </div>

      <div className="train-list">
        <h3>Available Trains</h3>
        {trainDetails.map((train, index) => (
          <div key={index} className="train-card">
            <h4>
              {train.trainName} (Train No: {train.trainNo})
            </h4>
            <p>
              <strong>Arrival:</strong> {train.arriveTime}
            </p>
            <p>
              <strong>Departure:</strong> {train.departTime}
            </p>
            <button onClick={() => handleTrainBooking(train)}>
              Book Now - ₹{train.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainDetailsPage;
