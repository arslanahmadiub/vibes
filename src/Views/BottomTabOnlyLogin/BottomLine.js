import React, { useState } from "react";
import radioFill from "../../assets/images/radio fill.svg";
import radioEmpty from "../../assets/images/radio empty.svg";
import germenFlage from "../../assets/images/flageGermeny.svg";
import englandFlage from "../../assets/images/flageEngland.svg";
import "./bottomTabsOnlyLogin.css";
const BottomLine = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  let handelEnglish = () => {
    setIsEnglish(true);
  };

  let handelGermen = () => {
    setIsEnglish(false);
  };

  return (
    <div className="bottomLine">
      {isEnglish ? (
        <img
          src={radioEmpty}
          alt="empty radio"
          className="empty-radio"
          onClick={handelGermen}
        />
      ) : (
        <img
          src={radioFill}
          alt="fill radio"
          className="fill-radio"
          onClick={handelGermen}
        />
      )}
      <p>Ger</p>

      {isEnglish ? (
        <img src={englandFlage} alt="England Flage" className="country-flage" />
      ) : (
        <img src={germenFlage} alt="Germen Flage" className="country-flage" />
      )}

      {isEnglish ? (
        <img
          src={radioFill}
          alt="fill radio"
          className="fill-radio"
          onClick={handelEnglish}
        />
      ) : (
        <img
          src={radioEmpty}
          alt="empty radio"
          className="empty-radio"
          onClick={handelEnglish}
        />
      )}
      <p>Eng</p>
      <div className="verticle-line"></div>
      <p>Support</p>
      <div className="verticle-line"></div>
      <p>Impressum</p>
      <div className="verticle-line"></div>
      <p>GTC</p>
    </div>
  );
};

export default BottomLine;
