import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

interface LineChartProps {
  data: any[];
}

const LineChart = ({ data }: LineChartProps) => {
  const chartData = transformData(data);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // This allows the chart to take up the full container size
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
    <Line
      data={{
        labels: chartData.map((entry) => entry.time),
        datasets: [
          {
            label: "Active",
            data: chartData.map((entry) => entry.active),
            borderColor: "#8884d8",
            backgroundColor: "rgba(136, 132, 216, 0.2)",
            fill: true,
          },
          {
            label: "Inactive",
            data: chartData.map((entry) => entry.inactive),
            borderColor: "#82ca9d",
            backgroundColor: "rgba(130, 202, 157, 0.2)",
            fill: true,
          },
          {
            label: "Unstable",
            data: chartData.map((entry) => entry.unstable),
            borderColor: "#ffc658",
            backgroundColor: "rgba(255, 198, 88, 0.2)",
            fill: true,
          },
          {
            label: "Offline",
            data: chartData.map((entry) => entry.offline),
            borderColor: "#ff7300",
            backgroundColor: "rgba(255, 115, 0, 0.2)",
            fill: true,
          },
        ],
      }}
      options={chartOptions}
    />
  );
};

export default LineChart;
