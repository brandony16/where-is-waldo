import React from "react";
import waldo from "../assets/waldo.png";
import "../styles/componentStyles/Header.css";

const Header = ({ isLevel }) => {
  return (
    <div className="header">
      <h1 className="headerTitle">
        <span className="wheres headerWord">Where's </span>
        <span className="waldo headerWord">Waldo</span>
        <img src={waldo} alt="waldo" className="headerWaldo" />
      </h1>
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
