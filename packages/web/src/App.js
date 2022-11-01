import NavigationBar from "./components/Navbar";
import EventDesc from "./components/EventDesc";
import Speakers from "./components/Speakers";
import Registration from "./components/Registration";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer.tsx";
import TopBtn from "./components/TopBtn.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    // Check this UI Framework
    // Use for navkbar and other elements
    // https://chakra-ui.com/getting-started
    <div className="website">
      <NavigationBar/>
      <EventDesc/>
      <Speakers/>
      <Registration/>
      <Sponsors/>
      <Footer/>
      <TopBtn/>
    </div>
  );
}

export default App;
