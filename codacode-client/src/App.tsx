import "./styles/global/normalize.css";
import "./styles/global/main.css";

import NavBar from "./components/globalComponents/0-NavBar";
import IntroductionSection from "./components/homeComponents/0-IntroductionSection";
import CollaborationSection from "./components/homeComponents/1-collaborateSection";
import AutomatedPortfolio from "./components/homeComponents/2-automatedPortfolioSection";

function App() {
  return (
    <>
      < NavBar />
      <IntroductionSection />
      <CollaborationSection/>
      <AutomatedPortfolio/>
    </>
  );
}
export default App;
