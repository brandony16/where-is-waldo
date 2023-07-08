import { BrowserRouter, Route, Routes } from "react-router-dom";
import LevelPage from "./pages/LevelPage";
import HomePage from "./pages/HomePage";
import "./styles/globalStyles.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
import { populateLevelInfo } from "./firebase/populateLevelInfo";
import { Levels } from "./utils/Levels";

function App() {
  const [hasWelcomeShown, setHasWelcomeShown] = useState(false);
  const [levelsData, setLevelsData] = useState([]);

  useEffect(() => {
    // Fetch the level data from Firestore
    const fetchLevelsData = async () => {
      try {
        const levelsCollectionRef = collection(db, 'levels');
        const snapshot = await getDocs(levelsCollectionRef);

        const levels = snapshot.docs.map(doc => doc.data());
        setLevelsData(levels);
      } catch (error) {
        console.error('Error fetching level data:', error);
      }
    };

    fetchLevelsData();
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
              <Route path="0" element={<LevelPage levelImg={levelsData[0].img} />} />
              <Route path="1" element={<LevelPage levelImg={levelsData[1].img} />} />
              <Route path="2" element={<LevelPage levelImg={levelsData[2].img} />} />
              <Route path="3" element={<LevelPage levelImg={levelsData[3].img} />} />
              <Route path="4" element={<LevelPage levelImg={levelsData[4].img} />} />
              <Route path="5" element={<LevelPage levelImg={levelsData[5].img} />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
