import { useEffect, useState } from "react";

export default function useLevelCharacters(level, characterData) {
  const [levelCharacters, setLevelCharacters] = useState([]);

  useEffect(() => {
    const correctCharacters = characterData.filter((char) =>
      level.characters.includes(char.name)
    );
    setLevelCharacters(correctCharacters);
  }, [level, characterData]);

  return levelCharacters;
}
