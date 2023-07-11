import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/componentStyles/EndModal.css"

const EndModal = ({ time, handleStartGame }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const hundredths = Math.floor(time % 100);
    const formattedTime = `${padZero(minutes)}:${padZero(seconds)}.${padZero(
      hundredths
    )}`;
    return formattedTime;
  };

  const padZero = (num) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="endModal">
      <div className="endModalContent">
        <ol className="leaderboard">
          <li className="leadboardEntry"></li>
          <li className="leadboardEntry"></li>
          <li className="leadboardEntry"></li>
          <li className="leadboardEntry"></li>
          <li className="leadboardEntry"></li>
          <li className="leadboardEntry"></li>
          <li className="leadboardEntry"></li>
          <li className="leadboardEntry"></li>
          <li className="leadboardEntry"></li>
          <li className="leadboardEntry"></li>
        </ol>
        <div className="gameInfo">
          <p className="finishTime">{"Your Time: " + formatTime(time)}</p>
        </div>
        <div className="gameButtons">
          <NavLink className="gameBtn" to="/">Home</NavLink>
          <button className="gameBtn" onClick={handleStartGame}>Play Again</button>
        </div>
      </div>
    </div>
  );
};

export default EndModal;
