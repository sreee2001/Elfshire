import React from "react";
import { Bar, Pie } from "react-chartjs-2";
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
  const Col2Values = data.map((row) => Number(row.col2) || 0);

  const barData = {
    labels,
    datasets: [
      {
        label: "Col2 Values",
        data: Col2Values,
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  const pieData = {
    labels,
    datasets: [
      {
        label: "Col3 Distribution",
        data: data.map((row) => Number(row.col3) || 0),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "2em" }}>
        <div style={{ flex: 1 }}>
          <h3>Bar Chart (Col2)</h3>
          <Bar data={barData} />
        </div>
        <div style={{ flex: 1 }}>
          <h3>Pie Chart (Col3)</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default ChartsDemo;
