import React, { useState } from "react";
import "./genderButtonGroup.css";
import plusIcon from "../../../assets/images/plusIcon.svg";
import orIcon from "../../../assets/images/orIcon.svg";

const GenderButtonGroup = (props) => {
  const [selectedGenderList, setSelectedGenderList] = useState([]);

  let handelGenderClick = (e) => {
    let genderList = [...selectedGenderList];

    if (genderList.includes(e)) {
      const filteredGender = genderList.filter((item) => item !== e);
      setSelectedGenderList(filteredGender);
    } else {
      genderList.push(e);
      setSelectedGenderList(genderList);
    }
  };

  return (
    <div className="button-group-container" style={{ width: props.width }}>
      <div className="gender-group">
        <div
          className={`female-section ${
            selectedGenderList.includes("Female") ? "selected-gender" : ""
          }`}
          onClick={() => handelGenderClick("Female")}
        >
          <p>Female</p>
        </div>
        <div
          className={`male-section  ${
            selectedGenderList.includes("Male") ? "selected-gender" : ""
          }`}
          onClick={() => handelGenderClick("Male")}
        >
          <p>Male</p>
        </div>
        <div
          className={`divers-section  ${
            selectedGenderList.includes("Divers") ? "selected-gender" : ""
          }`}
          onClick={() => handelGenderClick("Divers")}
        >
          <p>Divers</p>
        </div>
        <div className="or-container">
          <div className="or-line">
            <div className="inside-or-line"></div>
            <div className="or-circle">
              <img
                src={
                  selectedGenderList.includes("Female") &&
                  selectedGenderList.includes("Male")
                    ? plusIcon
                    : orIcon
                }
              />
            </div>
          </div>
          <div className="or-line">
            <div className="inside-or-line"></div>
            <div className="or-circle">
              <div className="or-circle">
                <img
                  src={
                    selectedGenderList.includes("Divers") &&
                    selectedGenderList.includes("Male")
                      ? plusIcon
                      : orIcon
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderButtonGroup;
