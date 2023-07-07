import React from "react";
import WelcomePage from "./WelcomePage";
import Header from "../components/Header";
import HomeBody from "../components/HomeBody";

const LevelsPage = ({ hasWelcomeShown, setHasWelcomeShown }) => {
  return (
    <div className="LevelsPage">
      {/* <WelcomePage hasWelcomeShown={hasWelcomeShown} setHasWelcomeShown={setHasWelcomeShown}/> */}
      <Header isLevel={false} />
      <HomeBody levels={["m","n","b"]}/>
    </div>
  );
};

export default LevelsPage;
