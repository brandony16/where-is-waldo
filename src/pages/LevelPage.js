import React, { useState, useRef, useCallback } from "react";
import "../styles/pageStyles/LevelPage.css";
import Header from "../components/Header";
import LevelModal from "../components/LevelModal";
import EndModal from "../components/EndModal";
import useLevelCharacters from "../hooks/useLevelCharacters";
import useTimer from "../hooks/useTimer";
import useFoundCharacters from "../hooks/useFoundCharacters";
import { getCoordsForLevel } from "../utils";
import useLeaderboard from "../hooks/useLeaderboard";
import FoundCharacter from "../components/LevelPage/FoundCharacter";
import LevelBody from "../components/LevelPage/LevelBody";

const LevelPage = ({ level, characterData, coords, leaderboardData }) => {
  // Get coods for this specific level
  const levelCoords = getCoordsForLevel(level, coords);

  // State and Hooks
  const [modalVisible, setModalVisible] = useState(true);
  const [endModalVisible, setEndModalVisible] = useState(false);
  const imageRef = useRef(null);

  // Characters to find in the level
  const levelCharacters = useLevelCharacters(level, characterData);
  // Timer hook
  const { time, startTimer, stopTimer, resetTimer } = useTimer();

  const handleEndGame = useCallback(() => {
    stopTimer();
    setEndModalVisible(true);
  }, [stopTimer]);

  const {
    clickPosition,
    showPopup,
    foundCharacters,
    handleClick,
    checkClickPosition,
    resetCharacters,
  } = useFoundCharacters(
    levelCoords,
    imageRef,
    levelCharacters.length,
    handleEndGame
  );

  const { postScore } = useLeaderboard(level.name);

  const handleStartGame = useCallback(() => {
    setModalVisible(false);
    setEndModalVisible(false);

    resetCharacters();

    resetTimer();
    startTimer();
  }, [resetCharacters, resetTimer, startTimer]);

  return (
    <div className="levelPage">
      <Header
        isLevel={true}
        timer={time}
        characters={levelCharacters}
        foundCharacters={foundCharacters}
      />
      {modalVisible && (
        <LevelModal
          levelCharacters={levelCharacters}
          handleStartGame={handleStartGame}
        />
      )}
      <LevelBody
        imageRef={imageRef}
        level={level}
        handleClick={handleClick}
        showPopup={showPopup}
        clickPosition={clickPosition}
        levelCharacters={levelCharacters}
        foundCharacters={foundCharacters}
        checkClickPosition={checkClickPosition}
      />
      {levelCharacters.map((char, index) => (
        <FoundCharacter char={char} key={index} />
      ))}
      {endModalVisible && (
        <EndModal
          time={time}
          handleStartGame={handleStartGame}
          checkLeaderboard={postScore}
          leaderboardData={leaderboardData[level.name] || []}
        />
      )}
    </div>
  );
};

const MemoizedLevelPage = React.memo(LevelPage);
MemoizedLevelPage.displayName = "LevelPage";

export default MemoizedLevelPage;
