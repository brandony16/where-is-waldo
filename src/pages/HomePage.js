import React from "react";
import WelcomePage from "./WelcomePage";
import Header from "../components/Header";
import HomeBody from "../components/HomeBody";

const HomePage = ({ hasWelcomeShown, setHasWelcomeShown, levelsData }) => {
  return (
    <div className="LevelsPage">
      {<WelcomePage hasWelcomeShown={hasWelcomeShown} setHasWelcomeShown={setHasWelcomeShown}/>}
      <Header isLevel={false} />
      <HomeBody levelsData={levelsData}/>
    </div>
  );
};

export default HomePage;
