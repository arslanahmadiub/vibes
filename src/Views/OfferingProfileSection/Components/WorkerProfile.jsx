import React from "react";
import "./bankComponents.css";
import model1 from "../../../assets/images/model1.jpg";

const WorkerProfile = ({ title, time, rate, location, ...props }) => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={model1} alt="Image" />
      </div>
      <div className="profile-info">
        <p className="profile-title">{title && title}</p>
        <p className="profile-timing">{time && time}</p>
        <p className="profile-rate">{rate && rate}</p>
        <p className="profile-location">{location && location}</p>
      </div>
    </div>
  );
};

export default WorkerProfile;
