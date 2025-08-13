import { cleanup, renderHook, waitFor } from "@testing-library/react";
import { collection, getDocs } from "firebase/firestore";
import useGameData from "../hooks/useGameData";

jest.mock("firebase/firestore", () => ({
  getDocs: jest.fn(),
  collection: jest.fn(),
}));

jest.mock("../firebase/firebaseConfig", () => ({
  db: {}, // dummy db
}));

function makeSnapshot(items = []) {
  // Snapshot structure that getDocs would return
  return {
    docs: items.map((item, i) => ({
      id: item.id ?? `id-${i}`,
      data: () => item,
    })),
  };
}

describe("useGameData", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  beforeEach(() => {
    collection.mockImplementation((dbArg, collectionName) => collectionName);
  });

  it("should fetch collections and group leaderboard by level", async () => {
    getDocs.mockImplementation(async (colName) => {
      if (colName === "levels")
        return makeSnapshot([
          { id: "l1", difficulty: "easy", name: "Level 1" },
          { id: "l2", difficulty: "hard", name: "Level 2" },
        ]);
      if (colName === "characters")
        return makeSnapshot([{ id: "c1", name: "Hero" }]);
      if (colName === "coords")
        return makeSnapshot([{ id: "co1", x: 0, y: 0 }]);
      if (colName === "leaderboard")
        return makeSnapshot([{ id: "lb1", level: "l1", score: 100 }]);
      return makeSnapshot([]);
    });

    const { result } = renderHook(() => useGameData());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();

    expect(result.current.error).toBeNull();
    expect(result.current.levelData).toHaveLength(2);
    expect(result.current.characterData).toHaveLength(1);
    expect(result.current.coordsData).toHaveLength(1);
    expect(result.current.leaderboardData.score).toBe(100);

    expect(collection).toHaveBeenCalled();
    expect(getDocs).toHaveBeenCalled();
  });
});
