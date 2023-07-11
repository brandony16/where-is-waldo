import React, { useState, useRef, useEffect } from "react";
import "../styles/pageStyles/LevelPage.css";
import Header from "../components/Header";
import LevelModal from "../components/LevelModal";

const LevelPage = ({ level, characterData, coords }) => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showDiv, setShowDiv] = useState(false);
  const [lvlCharacters, setLvlCharacters] = useState([]);
  const [foundCharacters, setFoundCharacters] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
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
    if (foundCharacters.length + 1 === lvlCharacters.length)
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

  const showFoundTxt = (name) => {
    document
      .querySelectorAll(".foundDialouge")
      .forEach((item) => item.classList.remove("txtActive"));
    const charDialouge = document.querySelector(`.found${name}`);
    charDialouge.classList.add("txtActive");
    setTimeout(() => {
      charDialouge.classList.remove("txtActive");
    }, 2000);
  };

  const checkClickPosition = (charName) => {
    const { x, y } = clickPosition;
    const imageWidth = getImageWidth(imageRef);
    const imageHeight = getImageHeight(imageRef);

    coords.forEach((coord) => {
      const { name, ...characters } = coord;
      for (const character in characters) {
        if (character === charName) {
          const { relX, relY } = characters[character];

          const expectedX = relX * imageWidth;
          const expectedY = relY * imageHeight;

          const distance = Math.sqrt(
            Math.pow(x - expectedX, 2) + Math.pow(y - expectedY, 2)
          );

          const threshold = 20;
          if (distance <= threshold) {
            showFoundTxt(character);
            const foundCharacter = { name, character };
            setFoundCharacters((prevFoundCharacters) => [
              ...prevFoundCharacters,
              foundCharacter,
            ]);
            handleEndGame();
          }
        }
      }
    });
    setShowDiv(false);
  };

  return (
    <div className="levelPage">
      <Header
        isLevel={true}
        timer={timer}
        characters={lvlCharacters}
        foundCharacters={foundCharacters}
      />
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
        >
          {lvlCharacters
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
      {lvlCharacters.map((char) => (
        <p className={"foundDialouge found" + char.name} key={char.name}>
          {"YOU FOUND " + char.name.toUpperCase()}
        </p>
      ))}
    </div>
  );
};

export default LevelPage;
