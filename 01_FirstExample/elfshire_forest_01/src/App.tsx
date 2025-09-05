import "./App.css";
import NavigationMenu from "./navigation/NavigationMenu";
import menuOptions from "./navigation/menu";

function App() {
  return (
    <>
      <div className="nav-outer">
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
        <NavigationMenu menu={menuOptions} />
      </div>
      <h1>SPEC Global Solutions Inc.</h1>
    </>
  );
}

export default App;
