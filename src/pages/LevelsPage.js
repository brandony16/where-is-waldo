import React from "react";
import { NavLink } from "react-router-dom";

const LevelsPage = () => {
  return (
    <div className="LevelsPage">
      <NavLink to="/levels/1">Level</NavLink>
    </div>
  );
};

export default LevelsPage;
