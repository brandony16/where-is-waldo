import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/componentStyles/HomeBody.css";

const HomeBody = ({ levelsData }) => {

  const sortedLevels = levelsData.sort((a, b) => {
    const difficultiesOrder = ["easy", "medium", "hard", "extreme"];
    return difficultiesOrder.indexOf(a.difficulty) - difficultiesOrder.indexOf(b.difficulty);
  });

  return (
    <div className="homeBody">
      <h2 className="levelsTitle">Levels</h2>
      <div className="levelsWrap"> 
        {sortedLevels.map((level) => (
          <NavLink
            to={"/levels/" + levelsData.indexOf(level)}
            className="levelCard"
            key={sortedLevels.indexOf(level)}
            id={"lvl" + sortedLevels.indexOf(level)}
          >
            <img src={level.img} alt={level.name} className="lvlImg" />
            <div className="lvlInfo">
              <h3 className="lvlName">{level.name}</h3>
              <div className="difficultyWrap">
                <p className={"lvlDifficulty " + level.difficulty}>
                  {level.difficulty.toUpperCase()}
                </p>
                <div className="difficultyBars">
                  {level.difficulty === "easy" && (
                    <>
                      <div className="diffBar"></div>
                      <div className="diffBar"></div>
                      <div className="diffBar green"></div>
                    </>
                  )}
                  {level.difficulty === "medium" && (
                    <>
                      <div className="diffBar"></div>
                      <div className="diffBar yellow"></div>
                      <div className="diffBar yellow"></div>
                    </>
                  )}
                  {level.difficulty === "hard" && (
                    <>
                      <div className="diffBar red"></div>
                      <div className="diffBar red"></div>
                      <div className="diffBar red"></div>
                    </>
                  )}
                  {level.difficulty === "extreme" && (
                    <>
                      <div className="diffBar blood"></div>
                      <div className="diffBar blood"></div>
                      <div className="diffBar blood"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HomeBody;
