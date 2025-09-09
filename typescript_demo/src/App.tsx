import "./App.css";
import React, { useState } from "react";
import ChartComponent from "./components/ChartComponent";
import ChartDemo from "./components/ChartsDemo";
import InputDataTable from "./components/InputDataTable";

type Row = {
  Label: string;
  col2: string;
  col3: string;
  col4: string;
};

const App: React.FC = () => {
  const [inputData, setInputData] = useState<Row[]>([
    { Label: "", col2: "", col3: "", col4: "" },
  ]);

  return (
    <>
      <div className="header">
        <h1>TypeScript Demo</h1>
      </div>
      <div className="mainContent">
        <div className="inputContent">
          {/* InputData table goes here */}
          <InputDataTable rows={inputData} setRows={setInputData} />
        </div>
        <div className="chartContent">
          {/* Charts go here */}
          <div style={{ height: "300px", width: "300px" }}>
            <ChartDemo data={inputData} />
          </div>
          <div style={{ height: "300px", width: "300px" }}>
            <ChartComponent
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "My First Dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                  },
                ],
              }}
              title="My Chart"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
