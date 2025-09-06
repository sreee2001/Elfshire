import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./home/Home";
import NavigationMenu from "./navigation/NavigationMenu";
import menuOptions from "./navigation/menu";
import ArtificialIntelligencePage from "./data/artificialIntelligence/ArtificialIntelligence";
import navstyles from "./navigation/NavigationMenu.module.css";
import logostyles from "./navigation/NavigationMenuLogo.module.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className={navstyles.navOuter}>
        {/* Company Logo and Name */}
        <div className={logostyles.logoSgsi}>
          {/* <a href="https://specglobalsolutions.com/" target="_blank"> */}
          <Link to="/">
            <img
              className={logostyles.logoImg}
              src="/logo/sgsi_circle_logo_blue.jpg"
              alt="SPEC Global Solutions Inc Logo"
            />
            <span className={logostyles.logoText}>
              <span>SPEC Global</span>
              <span>Solutions Inc.</span>
            </span>
          </Link>
        </div>
        {/* Navigation Menu */}
        <NavigationMenu menu={menuOptions} />
      </div>
      {/* Define Routes for Different Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Home />} />
        {/* Route for the Artificial Intelligence page */}
        <Route
          path="services/artificialintelligence"
          element={<ArtificialIntelligencePage />}
        />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
