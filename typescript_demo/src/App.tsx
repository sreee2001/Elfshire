import "./App.css";
import React, { useState } from "react";
import { ChartComponent, ChartsDemo, InputDataTable, type Row } from "shared";

const App: React.FC = () => {
  const [inputData, setInputData] = useState<Row[]>([
    { Label: "Apples", col1: "10", col2: "20", col3: "30" },
    { Label: "Books", col1: "3", col2: "25", col3: "35" },
    { Label: "Price of Coffee", col1: "12", col2: "22", col3: "3" },
    { Label: "Cars in Lot", col1: "18", col2: "8", col3: "38" },
  ]);

  return (
    <>
      <div className="header">
        <h2>TypeScript Charts Demo</h2>
      </div>
      <div className="mainContent">
        <div className="inputContent">
          {/* InputData table goes here */}
          <InputDataTable rows={inputData} setRows={setInputData} />
          <div style={{ height: "300px", width: "300px" }}>
            <ChartsDemo data={inputData} />
            {/* <ChartsDemo /> */}
          </div>
        </div>
        <div className="chartContent">
          {/* Charts go here */}
          <div style={{ height: "200px", width: "400px" }}>
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
