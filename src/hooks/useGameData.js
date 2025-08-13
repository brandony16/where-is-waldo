import { useEffect, useState } from "react";

import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { COLLECTIONS } from "../constants";

/**
 * Fetches data from a Firestore collection.
 *
 * @param {string} collectionName - Name of the Firestore collection to fetch data from
 * @returns {Promise<Array>} - Returns a promise that resolves to an array of documents
 */
async function fetchCollectionData(collectionName) {
  const collectionRef = collection(db, collectionName);
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

/**
 * Hook to fetch and manage game data from Firestore.
 *
 * @returns {Object} - Returns an object containing game data and loading/error states
 */
export default function useGameData() {
  const [levelData, setLevelData] = useState([]);
  const [characterData, setCharacterData] = useState([]);
  const [coordsData, setCoordsData] = useState([]);
  const [leaderboardData, setLeaderboardData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchAll = async () => {
      setLoading(true);
      setError(null);

      try {
        const [levelsArr, charactersArr, coordsArr, leaderboardArr] =
          await Promise.all([
            fetchCollectionData(COLLECTIONS.LEVELS),
            fetchCollectionData(COLLECTIONS.CHARACTERS),
            fetchCollectionData(COLLECTIONS.COORDS),
            fetchCollectionData(COLLECTIONS.LEADERBOARD),
          ]);

        if (!mounted) return;

        setLevelData(levelsArr);
        setCharacterData(charactersArr);
        setCoordsData(coordsArr);

        // Group entries by level
        const leaderboard = leaderboardArr.reduce((acc, entry) => {
          const key = entry.level ?? "unknown";
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(entry);
          return acc;
        });
        setLeaderboardData(leaderboard);
      } catch (err) {
        if (mounted) {
          setError(err);
          console.error("Error fetching game data:", err);
        }
      } finally {
        // Finish loading
        if (mounted) {
          setLoading(false);
        }
      }
    };

    // Fetch all data
    fetchAll();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    levelData,
    characterData,
    coordsData,
    leaderboardData,
    loading,
    error,
  };
}
