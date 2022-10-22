import Navbar from "./components/Navbar";
import Motherboard from "./components/Motherboard";

import EventDesc from "./components/EventDesc";

function App() {
  return (
    // Check this UI Framework
    // Use for navkbar and other elements
    // https://chakra-ui.com/getting-started
    <div className="website">
      <Navbar/>
      <Motherboard/>
      <EventDesc/>
    </div>
  );
  
}

export default App;
