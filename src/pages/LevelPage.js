import React, { useState, useEffect, useRef } from "react";
import "../styles/pageStyles/LevelPage.css";
import { NavLink } from "react-router-dom";

const LevelPage = ({ levelImg }) => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showDiv, setShowDiv] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const { clientX, clientY, target } = event;

      if (target === imageRef.current) {
        setClickPosition({ x: clientX, y: clientY });
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="levelPage">
      <NavLink className="backBtn" to="/levels">
        Back
      </NavLink>
      <img
        className="mockImg"
        ref={imageRef}
        src={levelImg}
        alt="wheres waldo"
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
