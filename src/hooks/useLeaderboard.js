import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useCallback } from "react";
import { db } from "../firebase/firebaseConfig";

export default function useLeaderboard(levelName) {
  const postScore = useCallback(
    async (time, username) => {
      const leaderboardRef = collection(db, "leaderboard");
      const leaderboardQuerySnapshot = await getDocs(
        query(
          leaderboardRef,
          where("level", "==", levelName),
          orderBy("timer"),
          limit(10)
        )
      );

      const leaderboardDocs = leaderboardQuerySnapshot.docs;

      if (
        leaderboardDocs.length < 10 ||
        time < leaderboardDocs[leaderboardDocs.length - 1].data().time
      ) {
        const newEntry = {
          level: levelName,
          timer: time,
          name: username,
        };

        await addDoc(leaderboardRef, newEntry);
      }
    },
    [levelName]
  );

  return { postScore };
}
