import React from "react";

const LevelModal = ({ levelCharacters, handleStartGame }) => {
  return (
    <div className="lvlModal">
      <div className="modalContent">
        <h2 className="toFindTxt">To Find:</h2>
        <div className="charsToFind">
          {levelCharacters.map((char) => (
            <div className="charToFindWrap" key={char.name}>
              <img
                src={char.img}
                alt={char.name}
                className={
                  "modalChar " +
                  (char.name === "odlaw"
                    ? "yellow"
                    : char.name === "wizard"
                    ? "blue"
                    : "red")
                }
              />
              <div className="charToFindInfo">
                <p className="charName">{char.name.toUpperCase()}</p>
                <p className="charDesc">{char.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="startGame" onClick={handleStartGame}>
          Start
        </button>
      </div>
    </div>
  );
};

const MemoizedLevelModal = React.memo(LevelModal);
MemoizedLevelModal.displayName = "LevelModal";

export default MemoizedLevelModal;
