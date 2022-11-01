import Navbar from "./Navbar";
import EventDesc from "./EventDesc";
import Speakers from "./Speakers";
import Registration from "./Registration";
import Sponsors from "./Sponsors";
import Footer from "./Footer.tsx";
import TopBtn from "./TopBtn.js";

function Webpage() {
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
      <TopBtn/>
    </div>
  );
}

export default Webpage