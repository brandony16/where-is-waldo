import { HashRouter, Route, Routes } from "react-router-dom";
import LevelPage from "./pages/LevelPage";
import HomePage from "./pages/HomePage";
import "./styles/globalStyles.css";
import { useMemo, useState } from "react";

import useGameData from "./hooks/useGameData";
import { sortLevels } from "./utils";

function App() {
  const [hasWelcomeShown, setHasWelcomeShown] = useState(false);

  const {
    levelData,
    characterData,
    coordsData,
    leaderboardData,
    loading,
    error,
  } = useGameData();

  const sortedLevels = useMemo(() => sortLevels(levelData), [levelData]);

  if (loading) {
    return (
      <div className="app-loading" aria-busy="true">
        Loading game data…
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="app-error">
        <h2>Something went wrong</h2>
        <p>
          We couldn't load game data. Please check your connection and try
          again.
        </p>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {String(error?.message ?? error)}
        </pre>
      </div>
    );
  }

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              hasWelcomeShown={hasWelcomeShown}
              setHasWelcomeShown={setHasWelcomeShown}
              sortedLevels={sortedLevels}
            />
          }
        />
        <Route path="/levels">
          {sortedLevels.length > 0 &&
            sortedLevels.map((level, index) => {
              // Use level.id if available, otherwise use index for path
              const pathSegment = level.id ? String(level.id) : String(index);
              const key = level.id ?? `index-${index}`;
              return (  
                <Route
                  key={key}
                  path={pathSegment}
                  element={
                    <LevelPage
                      level={level}
                      characterData={characterData}
                      coords={coordsData}
                      leaderboardData={leaderboardData}
                    />
                  }
                />
              );
            })}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
