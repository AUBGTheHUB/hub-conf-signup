import Navbar from "./components/Navbar";

import EventDesc from "./components/EventDesc";
import Speakers from "./components/Speakers";

function App() {
  return (
    // Check this UI Framework
    // Use for navkbar and other elements
    // https://chakra-ui.com/getting-started
    <div className="website">
      <Navbar/>
      <EventDesc/>
      <Speakers/>
    </div>
  );
}

export default App;
