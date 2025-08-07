import React, { useCallback } from "react";

const LevelHeaderInfo = ({ timer, characters, foundCharacters }) => {
  const formatTime = useCallback((time) => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const hundredths = Math.floor(time % 100);
    const formattedTime = `${padZero(minutes)}:${padZero(seconds)}.${padZero(
      hundredths
    )}`;
    return formattedTime;
  }, []);

  const padZero = (num) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="extraHeaderInfo">
      <p className="timer">{formatTime(timer)}</p>
      <div className="toFind">
        {characters.map((char) => (
          <div
            className={`headerCharWrap ${
              foundCharacters.some(
                (foundChar) => foundChar.character === char.name
              )
                ? "found"
                : ""
            }`}
            key={char.name}
          >
            <img
              src={char.img}
              alt={char.name}
              className={
                "headerCharImg " +
                (char.name === "odlaw"
                  ? "yellow"
                  : char.name === "wizard"
                  ? "blue"
                  : "red")
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MemoizedLevelHeaderInfo = React.memo(LevelHeaderInfo);
MemoizedLevelHeaderInfo.displayName = "LevelHeaderInfo";

export default MemoizedLevelHeaderInfo;
