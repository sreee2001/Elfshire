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

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

type Row = {
  Label: string;
  col2: string;
  col3: string;
  col4: string;
};

type ChartsDemoProps = {
  data: Row[];
};

const ChartsDemo: React.FC<ChartsDemoProps> = ({ data }) => {
  // Example: Use col2 as values for Bar chart
  const labels = data.map((row) => row.Label);
  const values = data.map((row) => Number(row.col2) || 0);

  const barData = {
    labels,
    datasets: [
      {
        label: "Col2 Values",
        data: values,
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
      <h3>Bar Chart (Col2)</h3>
      <Bar data={barData} />
      <h3>Pie Chart (Col3)</h3>
      <Pie data={pieData} />
    </div>
  );
};

export default ChartsDemo;
