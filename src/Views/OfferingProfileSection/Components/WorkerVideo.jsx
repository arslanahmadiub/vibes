import React from "react";
import model2 from "../../../assets/images/model2.jpg";
import "./bankComponents.css";
import uploadIcon from "../../../assets/images/uploadPlusIcon.svg";

const WorkerVideo = ({ uploadImage }) => {
  return (
    <div className="profile-video-container">
      <div className="profile-video">
        <img src={model2} alt="Image" />

        <div className="input-video">
          <label for="file-input">
            <img src={uploadIcon} alt="upload" className="upload-model-video" />
          </label>
          <input id="file-input" type="file" onChange={uploadImage} />
        </div>
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
