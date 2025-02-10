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

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const transformData = (data) => {
  return data.map((entry) => ({
    time: new Date(entry.startTime * 1000).toLocaleTimeString(),
    active: entry.timeInStatusesS.active,
    inactive: entry.timeInStatusesS.inactive,
    unstable: entry.timeInStatusesS.unstable,
    offline: entry.timeInStatusesS.offline,
  }));
};

interface BarChartProps {
  data: any[];
}

const BarChart = ({ data }: BarChartProps) => {
  const chartData = transformData(data);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ${context.raw} seconds`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (HH:MM:SS)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Time in Status (seconds)",
        },
      },
    },
  };

  return (
    <Bar
      data={{
        labels: chartData.map((entry) => entry.time),
        datasets: [
          {
            label: "Active",
            data: chartData.map((entry) => entry.active),
            backgroundColor: "#8884d8",
          },
          {
            label: "Inactive",
            data: chartData.map((entry) => entry.inactive),
            backgroundColor: "#82ca9d",
          },
          {
            label: "Unstable",
            data: chartData.map((entry) => entry.unstable),
            backgroundColor: "#ffc658",
          },
          {
            label: "Offline",
            data: chartData.map((entry) => entry.offline),
            backgroundColor: "#ff7300",
          },
        ],
      }}
      options={chartOptions}
    />
  );
};

export default BarChart;
