import { BrowserRouter, Route, Routes } from "react-router-dom";
import LevelPage from "./pages/LevelPage";
import HomePage from "./pages/HomePage";
import "./styles/globalStyles.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
// import { populateLevelInfo } from "./firebase/populateLevelInfo";
// import { Levels } from "./utils/Levels";
// import populateCharacterInfo from "./firebase/populateCharacterInfo";
// import characters from "./utils/Characters";

function App() {
  const [hasWelcomeShown, setHasWelcomeShown] = useState(false);
  const [levelsData, setLevelsData] = useState([]);
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    // populateLevelInfo(Levels);
    // populateCharacterInfo(characters);
    const sortLevels = (levelsData) => {return levelsData.sort((a, b) => {
      const difficultiesOrder = ["easy", "medium", "hard", "extreme"];
      return difficultiesOrder.indexOf(a.difficulty) - difficultiesOrder.indexOf(b.difficulty);
    })};
    // Fetch the level data from Firestore
    const fetchLevelsData = async () => {
      try {
        const levelsCollectionRef = collection(db, 'levels');
        const snapshot = await getDocs(levelsCollectionRef);

        const levels = snapshot.docs.map(doc => doc.data());
        setLevelsData(sortLevels(levels));
      } catch (error) {
        console.error('Error fetching level data:', error);
      }
    };
    const fetchCharacterData = async () => {
      try {
        const characterCollectionRef = collection(db, 'characters');
        const snapshot = await getDocs(characterCollectionRef);

        const characters = snapshot.docs.map(doc => doc.data());
        setCharacterData(characters);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    }

    fetchLevelsData();
    fetchCharacterData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              hasWelcomeShown={hasWelcomeShown}
              setHasWelcomeShown={setHasWelcomeShown}
              levelsData={levelsData}
            />
          }
        />
        <Route path="/levels">
        {levelsData.length > 0 && (
            <>
              <Route path="0" element={<LevelPage level={levelsData[0] } characterData={characterData} />} />
              <Route path="1" element={<LevelPage level={levelsData[1] } characterData={characterData} />} />
              <Route path="2" element={<LevelPage level={levelsData[2] } characterData={characterData} />} />
              <Route path="3" element={<LevelPage level={levelsData[3] } characterData={characterData} />} />
              <Route path="4" element={<LevelPage level={levelsData[4] } characterData={characterData} />} />
              <Route path="5" element={<LevelPage level={levelsData[5] } characterData={characterData} />} />
              <Route path="6" element={<LevelPage level={levelsData[6] } characterData={characterData} />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
