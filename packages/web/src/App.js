import { Routes, Route } from 'react-router-dom'
import Verified from "./components/Verified";
import Webpage from './components/Webpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Webpage />} />
      <Route path="/verify" element={<Verified />} />
    </Routes>
  );
}

export default App;
