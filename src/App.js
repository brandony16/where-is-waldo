import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LevelPage from "./pages/LevelPage";
import LevelsPage from "./pages/LevelsPage";
import winter from "./assets/winter.jpg";
import track from "./assets/track.jpg"
import "./styles/globalStyles.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/levels" >
          <Route index element={<LevelsPage />} />
          <Route path=":id" element={<LevelPage levelImg={winter}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
