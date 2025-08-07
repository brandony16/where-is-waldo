import React from "react";
import LevelHeaderInfo from "./LevelHeaderInfo";

import "../styles/componentStyles/Header.css";
import HeaderLink from "./HeaderLink";

const Header = ({ isLevel, timer, characters, foundCharacters }) => {
  return (
    <div className={"header " + (!isLevel ? "home" : "")}>
      <HeaderLink />
      {isLevel && (
        <LevelHeaderInfo
          timer={timer}
          characters={characters}
          foundCharacters={foundCharacters}
        />
      )}
    </div>
  );
};

const MemoizedHeader = React.memo(Header);
MemoizedHeader.displayName = "Header";

export default MemoizedHeader;
