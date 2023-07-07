import React, { useState } from "react";
import waldo from "../assets/waldo.png";
import "../styles/pageStyles/WelcomePage.css";

const WelcomePage = ({ hasWelcomeShown, setHasWelcomeShown }) => {
  const [isWaldoActive, setIsWaldoActive] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true);

  useState(() => {
    if (!hasWelcomeShown) {
      setTimeout(() => {
        document.querySelector(".contentWrap").classList.add("contentActive");
      });
    }
  }, []);

  const handleButtonClick = () => {
    document.querySelector(".contentWrap").classList.remove("contentActive");
    setIsContentVisible(false);
    setTimeout(() => {
      setHasWelcomeShown(true);
    }, 1000);
  };

  const handleButtonHover = () => {
    setIsWaldoActive(true);
  };

  const handleButtonLeave = () => {
    setIsWaldoActive(false);
  };

  if (hasWelcomeShown) {
    return;
  }

  return (
    <div className={`welcomePage ${isContentVisible ? "" : "welcomeInactive"}`}>
      <div
        className={`contentWrap ${isContentVisible ? "" : "contentInactive"}`}
      >
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
