import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LevelPage from "./pages/LevelPage";
import LevelsPage from "./pages/LevelsPage";
import "./styles/globalStyles.css";
import { useState } from "react";
import { Levels } from "./utils/Levels";
function App() {
  const [hasWelcomeShown, setHasWelcomeShown] = useState(false);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LevelsPage hasWelcomeShown={hasWelcomeShown} setHasWelcomeShown={setHasWelcomeShown}/>} />
        <Route path="/levels" >
          <Route path=":id" element={<LevelPage levelImg={Levels[0].img}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
