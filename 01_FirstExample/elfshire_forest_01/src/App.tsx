import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationMenu from "./navigation/NavigationMenu";
import menuOptions from "./navigation/menu";
import ArtificialIntelligencePage from "./data/artificialIntelligence/page";
import "./styles/logo.css";
import "./styles/navigation.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="nav-outer">
        {/* Company Logo and Name */}
        <div className="logo-sgsi">
          <a href="https://specglobalsolutions.com/" target="_blank">
            <img
              className="logo-img"
              src="/logo/sgsi_circle_logo_blue.jpg"
              alt="SPEC Global Solutions Inc Logo"
            />
            <span className="logo-text">
              <span>SPEC Global</span>
              <span>Solutions Inc.</span>
            </span>
          </a>
        </div>
        {/* Navigation Menu */}
        <NavigationMenu menu={menuOptions} />
      </div>
      {/* Define Routes for Different Pages */}
      <Routes>
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
