import React from "react";
import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";

const LevelsPage = ({ hasWelcomeShown, setHasWelcomeShown }) => {
  return (
    <div className="LevelsPage">
      <WelcomePage hasWelcomeShown={hasWelcomeShown} setHasWelcomeShown={setHasWelcomeShown}/>
      <NavLink to="/levels/1">Level</NavLink>
    </div>
  );
};

export default LevelsPage;
