import React, { useRef, useState } from "react";
import LogoSection from "../Components/LogoSection";
import NavigationView from "../Components/NavigationView";
import RecordButtonScheme from "../Components/RecordButtonScheme";
import demoVideo from "../../../assets/videos/demo.mp4";
import playButton from "../../../assets/images/playButton.svg";
import reloadVideo from "../../../assets/images/reloadVideo.svg";
import { useHistory } from "react-router";

const DemoVideoRecording = () => {
  let history = useHistory();

  console.log(process.env.NODE_ENV);

  const videoRef = useRef();
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [reloadNext, setReloadNext] = useState(false);
  let playVideo = () => {
    videoRef.current.play();
    setShowPlayButton(false);
  };

  let myCallback = () => {
    setReloadNext(true);
  };

  let replay = () => {
    videoRef.current.play();
    setReloadNext(false);
  };

  let handelNext = () => {
    history.push("/record-video");
  };

  return (
    <div className="div-background" style={{ height: "100vh" }}>
      <div className="bank-model linear-background">
        <LogoSection padding={false} />

        <div className="demo-video-headline">
          <p>Recording the Video</p>
        </div>
        <div className="video-container">
          <video
            className="videoInsertDemo"
            src={
              process.env.NODE_ENV === "production"
                ? "https://master.d2e4yolnkc1zup.amplifyapp.com" + demoVideo
                : demoVideo
            }
            type="video/mp4"
            ref={videoRef}
            onEnded={() => myCallback()}
          ></video>

          {/* play button section */}

          <div
            className="controle-button-section"
            style={{ display: showPlayButton ? "" : "none" }}
          >
            <img src={playButton} alt="Play Button" onClick={playVideo} />
          </div>

          <div
            className="reload-record-container"
            style={{ display: reloadNext ? "" : "none" }}
          >
            <div className="reload-icon" onClick={replay}>
              <img src={reloadVideo} alt="Reload" />
            </div>
            <div className="record-icon" onClick={handelNext}>
              <p>Record</p>
            </div>
          </div>

          <div className="record-scheme-container">
            <RecordButtonScheme title="Red" background="white" />
            <RecordButtonScheme title="Green" background="white" />
            <RecordButtonScheme title="Blue" background="white" />
            <RecordButtonScheme title="Orange" background="white" />
          </div>
        </div>
        <div
          style={{
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            boxSizing: "border-box",
          }}
        >
          <NavigationView active="3" />
        </div>
      </div>
    </div>
  );
};

export default DemoVideoRecording;
