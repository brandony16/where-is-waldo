import React from "react";

const LevelBody = ({
  imageRef,
  level,
  handleClick,
  showPopup,
  clickPosition,
  levelCharacters,
  foundCharacters,
  checkClickPosition,
}) => {
  return (
    <>
      <img
        className="lvlImg"
        ref={imageRef}
        src={level.img}
        alt="wheres waldo"
        onClick={handleClick}
      />
      {showPopup && (
        <div
          className="placeClicked"
          style={{
            position: "absolute",
            left: `${clickPosition.x}px`,
            top: `${clickPosition.y}px`,
          }}
        >
          {levelCharacters
            .filter(
              (char) =>
                !foundCharacters.some(
                  (foundChar) => foundChar.character === char.name
                )
            )
            .map((char) => (
              <button
                className="charBtn"
                key={char.name}
                onClick={() => checkClickPosition(char.name)}
              >
                {char.name.toUpperCase()}
              </button>
            ))}
        </div>
      )}
    </>
  );
};

const MemoizedLevelBody = React.memo(LevelBody);
MemoizedLevelBody.displayName = "LevelBody";

export default MemoizedLevelBody;
