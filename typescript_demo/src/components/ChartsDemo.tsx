import React from "react";
import ChartBlock from "./ChartBlock";

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import type { Row } from "./Row";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

type ChartsDemoProps = {
  data: Row[];
};

const ChartsDemo: React.FC<ChartsDemoProps> = ({ data }) => {
  // Example: Use col2 as values for Bar chart
  const labels = data.map((row) => row.Label);

  const columns: { key: keyof Row; label: string }[] = [
    { key: "col1", label: "Col1" },
    { key: "col2", label: "Col2" },
    { key: "col3", label: "Col3" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "2em" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: "2em" }}>
        {columns.map((col) => {
          const values = data.map(
            (row) => Number(row[col.key as keyof Row]) || 0
          );
          return (
            <div key={col.key} style={{ marginBottom: "0" }}>
              <div style={{ display: "flex", gap: "2em" }}>
                <ChartBlock
                  type="bar"
                  label={`${col.label} Bar`}
                  data={values}
                  chartLabels={labels}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: "2em" }}>
        {columns.map((col) => {
          const values = data.map(
            (row) => Number(row[col.key as keyof Row]) || 0
          );
          return (
            <div key={col.key} style={{ marginBottom: "0" }}>
              <div style={{ display: "flex", gap: "2em" }}>
                {
                  <ChartBlock
                    type="pie"
                    label={`${col.label} Pie`}
                    data={values}
                    chartLabels={labels}
                  />
                }
                {/* For histogram, you would need to bin the data and pass bin labels and counts */}
                {/* <ChartBlock type="histogram" ... /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChartsDemo;
