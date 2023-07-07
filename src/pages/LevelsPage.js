import React from "react";
import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";

const LevelsPage = () => {
  return (
    <div className="LevelsPage">
      <WelcomePage />
      <NavLink to="/levels/1">Level</NavLink>
    </div>
  );
};

export default LevelsPage;
