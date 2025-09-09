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
    <div className={commonStyles.container}>
      <div className={commonStyles.content}>
        <h1 className={commonStyles.heading}>
          Welcome to TypeScript Demo Page
        </h1>
        <p className={commonStyles.intro}>
          I will be using this page to show various features of TypeScript and
          React.
        </p>
        <div className={commonStyles.sections}>
          <div className={commonStyles.section}>
            <div className={commonStyles.sectionTitle}>Charts</div>
            {
              <div className={commonStyles.sectionText}>
                <InputDataTable rows={inputData} setRows={setInputData} />
                <div style={{ height: "300px", width: "300px" }}>
                  <ErrorBoundary>
                    <ChartsDemo data={inputData} />
                  </ErrorBoundary>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
