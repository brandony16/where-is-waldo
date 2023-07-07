import React from "react";

const HomeBody = ({ levels }) => {
  return (
    <div className="homeBody">
        <h2 className="levelsTitle">Levels</h2>
        <div className="levelsWrap">
          {levels.map((i)=> (
            <div className="levelCard" key={levels.indexOf(i)}>Level {i}</div>
          ))}
        </div>
    </div>
  )
}

export default HomeBody;