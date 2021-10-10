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
      <hr />
      <div style={{margin : '1.5rem 0'}}></div>
      <Navbar/>
    
      </Router>
  );
}

export default App;
