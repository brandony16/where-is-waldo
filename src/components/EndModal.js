import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/componentStyles/EndModal.css";

const EndModal = ({
  time,
  handleStartGame,
  checkLeaderboard,
  leaderboardData,
}) => {
  const [username, setUsername] = useState("");
  const [timeSubmitted, setTimeSubmitted] = useState(false);

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
          {leaderboardData.map((entry, index) => (
            <li className="leadboardEntry" key={index}>
              {entry.name} - {formatTime(entry.timer)}
            </li>
          ))}
        </ol>
        <div className="gameInfo">
          <div className="timeWrap">
            <p className="finishTime">Your Time:</p>
            <p className="finishTime">{formatTime(time)}</p>
          </div>
          <input
            type="text"
            className="username"
            placeholder="Enter your name..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="gameButtons">
          <NavLink className="gameBtn" to="/">
            Home
          </NavLink>
          <button className="gameBtn" onClick={handleStartGame}>
            Play Again
          </button>
          {!timeSubmitted && <button className="gameBtn" onClick={() => {checkLeaderboard(username); setTimeSubmitted(true)}}>
            Submit Time
          </button>}
        </div>
      </div>
    </div>
  );
};

export default EndModal;
