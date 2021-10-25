import React, { useState } from "react";
import "./escortButtonGroup.css";
import plusIcon from "../../../assets/images/plusIcon.svg";
import orIcon from "../../../assets/images/orIcon.svg";

const EscortButtonGroup = (props) => {
  const [selectedWorkerList, setSelectedWorkerList] = useState([]);

  let handelGenderClick = (e) => {
    let workerList = [...selectedWorkerList];

    if (selectedWorkerList.includes(e)) {
      const filteredWorker = workerList.filter((item) => item !== e);
      setSelectedWorkerList(filteredWorker);
    } else {
      workerList.push(e);
      setSelectedWorkerList(workerList);
    }
  };

  return (
    <div
      className="escort-button-group-container"
      style={{ width: props.width }}
    >
      <div className="escort-group">
        <div
          className={`sexworker-section  ${
            selectedWorkerList.includes("SexWorker") ? "selected-sexworker" : ""
          }`}
          onClick={() => handelGenderClick("SexWorker")}
        >
          <p>SexWorker</p>
        </div>

        <div
          className={`escort-section ${
            selectedWorkerList.includes("Escort") ? "selected-escort" : ""
          }`}
          onClick={() => handelGenderClick("Escort")}
        >
          <p>Escort</p>
        </div>

        <div className="or-container">
          <div className="or-line">
            <div className="inside-or-line"></div>

            <div className="or-circle">
              <img
                src={
                  selectedWorkerList.includes("Escort") &&
                  selectedWorkerList.includes("SexWorker")
                    ? plusIcon
                    : orIcon
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortButtonGroup;
