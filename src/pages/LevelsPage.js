import React from "react";
import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import Header from "../components/Header";

const LevelsPage = ({ hasWelcomeShown, setHasWelcomeShown }) => {
  return (
    <div className="LevelsPage">
      {/* <WelcomePage hasWelcomeShown={hasWelcomeShown} setHasWelcomeShown={setHasWelcomeShown}/> */}
      <Header isLevel={false} />
      <NavLink to="/levels/1">Level</NavLink>
    </div>
  );
};

export default LevelsPage;
