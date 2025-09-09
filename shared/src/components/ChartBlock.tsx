// ChartBlock.tsx
import React from "react";
import { Bar, Pie } from "react-chartjs-2";

type ChartBlockProps = {
  type: "bar" | "pie" | "histogram";
  label: string;
  data: number[];
  chartLabels: string[];
};

const ChartBlock: React.FC<ChartBlockProps> = ({
  type,
  label,
  data,
  chartLabels,
}) => {
  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label,
        data,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  if (type === "bar") return <Bar data={chartData} />;
  if (type === "pie")
    return (
      <Pie
        data={chartData}
        options={{ plugins: { legend: { position: "right" } } }}
      />
    );
  // For histogram, you may need a custom implementation or use Bar with binning logic
  return null;
};

export default ChartBlock;
