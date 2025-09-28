import "./styles/global/Normalize.css";
import "./styles/global/main.css";

import NavBar from "./components/globalComponents/0-NavBar";
import IntroductionSection from "./components/homeComponents/0-IntroductionSection";
import CollaborationSection from "./components/homeComponents/1-collaborateSection";

function App() {
  return (
    <>
      < NavBar />
      <IntroductionSection />
      <CollaborationSection/>
    </>
  );
}
export default App;
