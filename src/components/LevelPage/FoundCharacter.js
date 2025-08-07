import React from "react";

const FoundCharacter = ({ char }) => {
  return (
    <p className={"foundDialouge found" + char.name} key={char.name}>
      {"YOU FOUND " + char.name.toUpperCase()}
    </p>
  );
};

const MemoizedFoundCharacter = React.memo(FoundCharacter);
MemoizedFoundCharacter.displayName = "FoundCharacter";

export default MemoizedFoundCharacter;
