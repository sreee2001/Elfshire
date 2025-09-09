import { useState } from "react";
import commonStyles from "../../styles/CommonSections.module.css";
import { ChartsDemo, InputDataTable, type Row } from "shared";
import ErrorBoundary from "shared/src/components/ErrorBoundary";

export default function HomePage() {
  const [inputData, setInputData] = useState<Row[]>([
    { Label: "Apples", col1: "10", col2: "20", col3: "30" },
    { Label: "Books", col1: "3", col2: "25", col3: "35" },
    { Label: "Price of Coffee", col1: "12", col2: "22", col3: "3" },
    { Label: "Cars in Lot", col1: "18", col2: "8", col3: "38" },
  ]);

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
            <a href="#/demo#input-data">Input Data</a>
          </li>
          <li>
            <a href="#/demo#charts">Charts</a>
          </li>
          <li>
            <a href="#/demo">Demo</a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
      {/* Main Content Section */}
      <div className={commonStyles.content} style={{ flex: 1 }}>
        <p className={commonStyles.intro}>
          I will be using this page to show various features of TypeScript and
          React.
        </p>
        <div className={commonStyles.sections}>
          {/* Input Section */}
          <div className={commonStyles.section} id="input-data">
            <div className={commonStyles.sectionTitle}>Input Data</div>
            {
              <div className={commonStyles.sectionText}>
                <InputDataTable rows={inputData} setRows={setInputData} />
              </div>
            }
          </div>
          <div className={commonStyles.section} id="charts">
            {/* Display Charts here */}
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
