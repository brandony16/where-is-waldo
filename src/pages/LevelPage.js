import React, { useState, useRef, useEffect } from "react";
import "../styles/pageStyles/LevelPage.css";
import Header from "../components/Header";
import LevelModal from "../components/LevelModal";

const LevelPage = ({ level, characterData, coords }) => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showDiv, setShowDiv] = useState(false);
  const [lvlCharacters, setLvlCharacters] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
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
    const { pageX, pageY, target } = event;
    if (target === imageRef.current) {
      setClickPosition({ x: pageX, y: pageY });
      setShowDiv(true);
      handleEndGame();
    } else {
      setShowDiv(false);
    }
  };

  const handleStartGame = () => {
    setModalVisible(false);
    setTimer(0);
    const startTime = Date.now();
    const id = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const formattedTime = (elapsedTime / 10).toFixed(0);
      setTimer(formattedTime);
    }, 10);

    setIntervalId(id);
  };

  const handleEndGame = () => {
    clearInterval(intervalId);
  };

  const getImageWidth = (imageRef) => {
    if (imageRef && imageRef.current) {
      return imageRef.current.clientWidth;
    }
    return 0;
  };
  const getImageHeight = (imageRef) => {
    if (imageRef && imageRef.current) {
      return imageRef.current.clientHeight;
    }
    return 0;
  };

  return (
    <div className="levelPage">
      <Header isLevel={true} timer={timer} />
      {modalVisible && (
        <LevelModal
          lvlCharacters={lvlCharacters}
          handleStartGame={handleStartGame}
        />
      )}
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
