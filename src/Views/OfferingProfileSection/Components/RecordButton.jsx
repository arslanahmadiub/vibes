import React from "react";

const RecordButton = (props) => {
  return (
    <div className="record-container" onClick={props.onClick && props.onClick}>
      <div
        className={`record-button ${
          props.recordStatus ? "record-button-start" : ""
        }`}
      ></div>
    </div>
  );
};

export default RecordButton;
