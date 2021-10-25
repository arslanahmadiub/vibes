import React, { useState, useRef, useEffect } from "react";
import NavigationView from "../Components/NavigationView";
import RecordButton from "../Components/RecordButton";
import RecordButtonScheme from "../Components/RecordButtonScheme";
import { useHistory } from "react-router";
import LogoSection from "../Components/LogoSection";

const VideoRecording = () => {
  const videoRef = useRef();
  let history = useHistory();
  const [startRecording, setstartRecording] = useState(false);

  const [firstTime, setFirstTime] = useState(true);

  const [timer, setTimer] = useState(15);

  var timerInterval;

  useEffect(() => {
    let time = 15;
    timerInterval = setInterval(() => {
      if (startRecording) {
        time = time - 1;

        setTimer(time);
      }
      if (!startRecording) {
        clearInterval(timerInterval);

        setTimer(15);
      }
      if (time < 1) {
        handelStop();
        setTimer(15);

        clearInterval(timerInterval);
        history.push("/escort-section");
      }
    }, 1000);
  }, [startRecording]);

  let handelRecording = () => {
    setstartRecording(true);
  };

  let getVideo = async () => {
    try {
      let stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      let video = videoRef.current;

      video.srcObject = stream;
      video.play();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  let handelStop = () => {
    let video = videoRef.current;

    const stream = video.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(function (track) {
        track.stop();
      });

      video.srcObject = null;
    }
  };

  return (
    <div className="div-background" style={{ height: "100vh" }}>
      <div
        className="bank-model"
        style={{ height: "80vh", position: "relative", padding: "0" }}
      >
        <LogoSection padding={true} closeCamera={handelStop} />

        <div className="record-video-heading">
          <p>You can record a video up to 15 seconds</p>
        </div>
        {/* recording frame */}
        <div className="video-container">
          <video ref={videoRef} className="videoInsert"></video>
          <div className="record-button-position">
            <RecordButton
              onClick={handelRecording}
              recordStatus={startRecording}
            />
          </div>
          <div className="record-scheme-container">
            <RecordButtonScheme
              title="Red"
              color={startRecording ? "#FF0000" : ""}
            />
            <RecordButtonScheme
              title="Green"
              color={startRecording ? "green" : ""}
            />
            <RecordButtonScheme
              title="Blue"
              color={startRecording ? "blue" : ""}
            />
            <RecordButtonScheme
              title="Orange"
              color={startRecording ? "orange" : ""}
            />
          </div>
          <div
            className="look-camera-text"
            style={{ display: startRecording ? "none" : "" }}
          >
            <p>Look in the camera</p>
            <p>Push Button for Record</p>
            <p>Read the color</p>
          </div>
          <div className={startRecording ? "" : "transperent-background"}></div>
          <div className={startRecording ? "recording-timer" : "recording-off"}>
            <p>00:{timer}</p>
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

export default VideoRecording;
