import { useState } from "react";
import commonStyles from "../../styles/CommonSections.module.css";
import { ChartsDemo, InputDataTable, type Row } from "shared";
import ErrorBoundary from "shared/src/components/ErrorBoundary";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const [inputData, setInputData] = useState<Row[]>([
    { Label: "Apples", col1: "10", col2: "20", col3: "30" },
    { Label: "Books", col1: "3", col2: "25", col3: "35" },
    { Label: "Price of Coffee", col1: "12", col2: "22", col3: "3" },
    { Label: "Cars in Lot", col1: "18", col2: "8", col3: "38" },
  ]);
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    // <div className={commonStyles.container}>
    <div style={{ display: "flex", minHeight: "100vh", flexDirection: "row" }}>
      {/* Navigation Window */}
      <nav className={commonStyles.contentNavigation}>
        <h1 className={commonStyles.headingNavigation}>
          Welcome to TypeScript Demo Page
        </h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <a href="#input-data">Input Data</a>
          </li>
          <li>
            <a href="#charts">Charts</a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
      {/* Main Content Section */}
      <div className={commonStyles.democontent} style={{ flex: 1 }}>
        <p className={commonStyles.intro}>
          I will be using this page to show various features of TypeScript and
          React.
        </p>
        <div className={commonStyles.demosections}>
          {/* Input Section */}
          <div className={commonStyles.demosection} id="input-data">
            <div className={commonStyles.sectionTitle}>Input Data</div>
            <div className={commonStyles.sectionText}>
              <InputDataTable rows={inputData} setRows={setInputData} />
            </div>
          </div>
          <div className={commonStyles.demosection} id="charts">
            {/* Display Charts here */}
            <div className={commonStyles.sectionTitle}>Charts</div>
            <div className={commonStyles.sectionText}>
              <div>
                <ErrorBoundary>
                  <ChartsDemo data={inputData} />
                </ErrorBoundary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
