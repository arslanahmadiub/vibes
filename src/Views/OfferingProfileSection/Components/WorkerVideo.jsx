import React from "react";
import model2 from "../../../assets/images/model2.jpg";
import "./bankComponents.css";

const WorkerVideo = () => {
  return (
    <div className="profile-video-container">
      <div className="profile-video">
        <img src={model2} alt="Image" />
      </div>
      <div className="profile-brief">
        <p>
          Nothing can dim the light that shines within you, so keep radiating,
          the world needs.
        </p>
      </div>
    </div>
  );
};

export default WorkerVideo;
