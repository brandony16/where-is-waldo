import React from "react";
import "../styles/componentStyles/Header.css"

const Header = ({ isLevel }) => {
  return (
    <div className="header">
      <p className="headerTitle">
        <span className="wheres header">Where's </span>
        <span className="waldo header">Waldo</span>
      </p>
      {isLevel && (
        <div className="extraHeaderInfo">
          <p className="timer"></p>
          <div className="toFind"></div>
        </div>
      )}
    </div>
  );
};

export default Header;