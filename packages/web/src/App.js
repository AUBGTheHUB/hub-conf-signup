import Navbar from "./components/Navbar";
import EventDesc from "./components/EventDesc";
import Speakers from "./components/Speakers";
import Registration from "./components/Registration";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    // Check this UI Framework
    // Use for navkbar and other elements
    // https://chakra-ui.com/getting-started
    <div className="website">
      <Navbar/>
      <EventDesc/>
      <Speakers/>
      <Registration/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default App;
