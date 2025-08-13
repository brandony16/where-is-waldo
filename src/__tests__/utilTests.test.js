import { getCoordsForLevel, sortLevels } from "../utils";

describe("getCoordsForLevel", () => {
  it("should return the correct coordinates for a given level", () => {
    const level = { name: "Level 1" };
    const coords = [
      { name: "Level 1", coordinates: [1, 2] },
      { name: "Level 2", coordinates: [3, 4] }
    ];
    const result = getCoordsForLevel(level, coords);
    expect(result).toEqual({ name: "Level 1", coordinates: [1, 2] });
  });

  it("should throw an error if coordinates for the level are not found", () => {
    const level = { name: "Level 3" };
    const coords = [
      { name: "Level 1", coordinates: [1, 2] },
      { name: "Level 2", coordinates: [3, 4] }
    ];
    expect(() => getCoordsForLevel(level, coords)).toThrow(
      "Coordinates for level Level 3 not found"
    );
  });
})

describe("sortLevels", () => {
  it("should sort levels based on difficulty", () => {
    const levelsData = [
      { name: "Level 1", difficulty: "easy" },
      { name: "Level 2", difficulty: "hard" },
      { name: "Level 3", difficulty: "medium" }
    ];
    const sortedLevels = sortLevels(levelsData);
    expect(sortedLevels).toEqual([
      { name: "Level 1", difficulty: "easy" },
      { name: "Level 3", difficulty: "medium" },
      { name: "Level 2", difficulty: "hard" }
    ]);
  });

  it("should handle empty array", () => {
    const sortedLevels = sortLevels([]);
    expect(sortedLevels).toEqual([]);
  });
});