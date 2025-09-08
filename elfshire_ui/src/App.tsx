import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./data/home/Home";
import AboutUs from "./data/aboutus/AboutUs";
import NavigationMenu from "./navigation/NavigationMenu";
import Demo from "./data/demo/Demo";
import NavigationMenuOptions from "./navigation/NavigationMenu.content";
import ArtificialIntelligencePage from "./data/artificialIntelligence/ArtificialIntelligence";
import navstyles from "./navigation/NavigationMenu.module.css";
import logostyles from "./navigation/NavigationMenuLogo.module.css";
import "./App.css";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className={navstyles.navOuter}>
        {/* Company Logo and Name */}
        <div className={logostyles.logoContainer}>
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
        </div>
        {/* Navigation Menu */}
        <div className={navstyles.menuContainer}>
          <NavigationMenu menu={NavigationMenuOptions} />
        </div>
      </div>
      {/* Define Routes for Different Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="services/artificialintelligence"
          element={<ArtificialIntelligencePage />}
        />
        <Route path="/demo" element={<Demo />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
