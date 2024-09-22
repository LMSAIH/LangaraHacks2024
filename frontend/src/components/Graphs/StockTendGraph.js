import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StockTrend = ({ stock }) => {
  const open = stock.open;
  const close = stock.close;
  const color = () => {
    if (open > close) {
      return "rgba(255,0,0,0.9)";
    } else {
      return "rgba(0,255,0,0.9)";
    }
  };

  const data = {
    labels: ["Today"],
    datasets: [
      {
        label: "Open",
        data: [open],
        backgroundColor: color, // Color for Dataset 1
      },
      {
        label: "Close",
        data: [close],
        backgroundColor: color, // Color for Dataset 2
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Place legend at the top
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StockTrend;
