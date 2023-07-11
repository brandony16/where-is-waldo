import React from "react";
import waldo from "../assets/waveWaldo.png";
import "../styles/componentStyles/Header.css";
import { NavLink } from "react-router-dom";

const Header = ({ isLevel, timer, characters, foundCharacters }) => {
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
    <div className={"header " + (!isLevel ? "home" : "")}>
      <NavLink className="headerTitle" to="/">
        <span className="wheres headerWord">Where's </span>
        <span className="waldo headerWord">Waldo</span>
        <img src={waldo} alt="waldo" className="headerWaldo" />
      </NavLink>
      {isLevel && (
        <div className="extraHeaderInfo">
          <p className="timer">{formatTime(timer)}</p>
          <div className="toFind">
            {characters.map((char) => (
              <div
                className={`headerCharWrap ${foundCharacters.some(
                  (foundChar) => foundChar.character === char.name
                ) ? "found" : ""}` }
                key={char.name}
              >
                <img
                  src={char.img}
                  alt={char.name}
                  className={
                    "headerCharImg " +
                    (char.name === "odlaw"
                      ? "yellow"
                      : char.name === "wizard"
                      ? "blue"
                      : "red")
                  }
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
