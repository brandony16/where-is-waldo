export function getCoordsForLevel(level, coords) {
  const lvlName = level.name;
  for (const coordSet of coords) {
    if (coordSet.name === lvlName) {
      return coordSet;
    }
  }
  throw new Error(`Coordinates for level ${lvlName} not found`);
}
