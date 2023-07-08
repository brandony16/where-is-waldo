import React from "react";
import waldo from "../assets/waldo.png";
import "../styles/componentStyles/Header.css";
import { NavLink } from "react-router-dom";

const Header = ({ isLevel }) => {
  return (
    <div className="header">
      <NavLink className="headerTitle" to="/">
        <span className="wheres headerWord">Where's </span>
        <span className="waldo headerWord">Waldo</span>
        <img src={waldo} alt="waldo" className="headerWaldo" />
      </NavLink>
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
