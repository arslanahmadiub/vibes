import React, { useState } from "react";

import infoLog from "../../../assets/images/VibesInfo.svg";
import closeIcon from "../../../assets/images/delete.svg";
import backIcon from "../../../assets/images/back.svg";
import ThreePhaseButton from "../Components/ThreePhaseButton";
import WorkerProfile from "../Components/WorkerProfile";
import WorkerVideo from "../Components/WorkerVideo";
import RateInput from "../Components/RateInput";
import InfoInput from "../Components/InfoInput";
import OrLine from "../Components/OrLine";
import PostelCode from "../Components/PostelCode";
import BankInput from "../Components/BankInput";
import BankButton from "../Components/BankButton";
import OutCallShare from "../Components/OutCallShare";
import NavigationView from "../Components/NavigationView";
import { useHistory } from "react-router";
import LogoSection from "../Components/LogoSection";
import KeepCareShare from "../Components/KeepCareShare";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const EscortSection = () => {
  let history = useHistory();
  const [workerType, setWorkerType] = useState("Escort");
  const [checkShare, setCheckShare] = useState("");

  let handelEscort = (e) => {
    setWorkerType(e);
    history.push("/escort-section");
  };
  let handelSexworker = (e) => {
    setWorkerType(e);
    history.push("/sexworker-section");
  };

  let handelNext = () => {
    history.push("/bankdetails-section");
  };
  let handelValue = (v) => {
    setCheckShare(v);
  };

  let hanelImageUpload = (e) => {
    let file = e.target.files[0];
    if (file) {
      uploadFile(file);
    }
  };

  let uploadFile = (file) => {
    const storage = getStorage();
    const metadata = {
      contentType: "video/mp4",
    };
    const storageRef = ref(storage, "video/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <div
      className="div-background"
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
    >
      <div className="bank-model">
        {/* logo container */}

        <LogoSection />

        {/* button section */}
        <div>
          <ThreePhaseButton
            left="Escort"
            right="Sexworker"
            clickLeft={() => handelEscort("Escort")}
            clickRight={() => handelSexworker("Sexworker")}
            active={workerType}
          />
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <OutCallShare checkValue={(value) => handelValue(value)} />
        </div>
        <div style={{ display: checkShare === "Yes" ? "flex" : "none" }}>
          <KeepCareShare />
        </div>
        <div className="straight-line"></div>

        <div style={{ marginTop: "2rem" }}>
          <WorkerProfile
            title="Anna [Sex Worker]"
            time="Beginsning 20's"
            rate="20$/Hour, Incall"
            location="02176, Berlin - Incall"
            uploadImage={(e) => hanelImageUpload(e)}
          />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <WorkerVideo />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <p className="rate-head-line">Basic Rate Per Hour:</p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <RateInput />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <p className="rate-head-line">Location</p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <PostelCode />
        </div>

        <div style={{ marginTop: "2rem" }}>
          <BankButton title="Next" onClick={handelNext} />
        </div>
        <div>
          <NavigationView active="3" />
        </div>
      </div>
    </div>
  );
};

export default EscortSection;
