import { DIFFICULTY_ORDER } from "./constants";

/**
 * Gets the coordinates for a specific level.
 *
 * @param {Object} level - the level object
 * @param {Object} coords - the coordinates data
 * @returns - the coord set for the given level
 */
export function getCoordsForLevel(level, coords) {
  const lvlName = level.name;
  for (const coordSet of coords) {
    if (coordSet.name === lvlName) {
      return coordSet;
    }
  }
  throw new Error(`Coordinates for level ${lvlName} not found`);
}

/**
 * Sorts levels data based on difficulty.
 *
 * @param {Array} levelsData - the array of level data to sort
 * @returns {Array} - the sorted array of levels data
 */
export function sortLevels(levelsData) {
  return [...levelsData].sort((a, b) => {
    const aIdx = DIFFICULTY_ORDER.indexOf(a.difficulty);
    const bIdx = DIFFICULTY_ORDER.indexOf(b.difficulty);
    return aIdx - bIdx;
  });
}
