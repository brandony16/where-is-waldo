import WelcomePage from "./WelcomePage";
import Header from "../components/Header";
import HomeBody from "../components/HomeBody";

const HomePage = ({ hasWelcomeShown, setHasWelcomeShown, sortedLevels }) => {
  return (
    <div className="LevelsPage">
      <WelcomePage
        hasWelcomeShown={hasWelcomeShown}
        setHasWelcomeShown={setHasWelcomeShown}
      />
      <Header isLevel={false} />
      <HomeBody sortedLevels={sortedLevels} />
    </div>
  );
};

export default HomePage;
