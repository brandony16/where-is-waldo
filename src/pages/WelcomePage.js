import React, { useState } from "react";
import waldo from "../assets/waldo.png";
import "../styles/pageStyles/WelcomePage.css";

const WelcomePage = () => {
  const [isWaldoActive, setIsWaldoActive] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true);

  useState(() => {
    setTimeout(() => {
      document.querySelector(".contentWrap").classList.add("contentActive");
    })
  }, [])

  const handleButtonClick = () => {
    document.querySelector(".contentWrap").classList.remove("contentActive");
    setIsContentVisible(false);
  };

  const handleButtonHover = () => {
    setIsWaldoActive(true);
  };

  const handleButtonLeave = () => {
    setIsWaldoActive(false);
  };

  return (
    <div className={`welcomePage ${isContentVisible ? "" : "welcomeInactive"}`}>
      <div className={`contentWrap ${isContentVisible ? "" : "contentInactive"}`}>
        <h1 className="title">
          <span className="wheres">Where's</span>{" "}
          <span className="waldo">Waldo</span>
        </h1>
        <button
          className="playGame"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          onClick={handleButtonClick}
        >
          Play
        </button>
        <img
          src={waldo}
          alt="waldo"
          className={`waldoImg ${isWaldoActive ? "waldoActive" : ""}`}
        />
      </div>
    </div>
  );
};

export default WelcomePage;
