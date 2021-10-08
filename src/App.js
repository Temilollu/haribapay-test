import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import HeroSection from "./components/HeroSection";
function App() {
  return (
    <Router>
      <Navbar/>
      <hr />
      <HeroSection/>
      </Router>
  );
}

export default App;
