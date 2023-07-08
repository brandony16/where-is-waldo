import React, { useState, useEffect, useRef } from "react";
import "../styles/pageStyles/LevelPage.css";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const LevelPage = ({ levelImg }) => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showDiv, setShowDiv] = useState(false);
  const imageRef = useRef(null);

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
      <img
        className="lvlImg"
        ref={imageRef}
        src={levelImg}
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
