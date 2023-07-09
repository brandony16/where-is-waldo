import React, { useState, useRef, useEffect } from "react";
import "../styles/pageStyles/LevelPage.css";
import Header from "../components/Header";

const LevelPage = ({ level, characterData }) => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showDiv, setShowDiv] = useState(false);
  const [lvlCharacters, setLvlCharacters] = useState([]);
  const imageRef = useRef(null);

  useEffect(() => {
    // Find the correct characters for the level
    const findCorrectCharacters = () => {
      const correctCharacters = characterData.filter((char) =>
        level.characters.includes(char.name)
      );
      setLvlCharacters(correctCharacters);
    };

    findCorrectCharacters();
  }, [level, characterData]);


  const handleClick = (event) => {
    const { clientX, clientY, target } = event;

    if (target === imageRef.current) {
      setClickPosition({ x: clientX, y: clientY });
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  };

  return (
    <div className="levelPage">
      <Header />
      <div className="lvlModal">
        <div className="modalContent">
          <h2 className="toFindTxt">To Find:</h2>
          <div className="charsToFind">
            {lvlCharacters.map((char) => (
              <div className="charToFindWrap" key={char.name}>
                <img src={char.img} alt={char.name} className="modalChar" />
              </div>
            ))}
          </div>
          <button className="startGame">Start</button>
        </div>
      </div>
      <img
        className="lvlImg"
        ref={imageRef}
        src={level.img}
        alt="wheres waldo"
        onClick={handleClick}
      />
      {showDiv && (
        <div
          className="placeClicked"
          style={{
            position: "absolute",
            left: `${clickPosition.x}px`,
            top: `${clickPosition.y}px`,
          }}
        ></div>
      )}
    </div>
  );
};

export default LevelPage;
