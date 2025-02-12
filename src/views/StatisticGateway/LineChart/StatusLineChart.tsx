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
  ChartOptions,
  TooltipItem,
  Filler,
} from "chart.js";
import { HistorySamples } from "../../../utils/types";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type StatusLineChartProps = {
  data: HistorySamples[];
  statusKey: keyof HistorySamples["timeInStatusesS"];
  label: string;
  borderColor: string;
  backgroundColor: string;
};

// Transform data to be chart-friendly
const transformData = (
  data: HistorySamples[],
  statusKey: keyof HistorySamples["timeInStatusesS"]
) => {
  return data.map((entry) => ({
    time: new Date(entry.startTime * 1000).toLocaleTimeString(),
    value: entry.timeInStatusesS[statusKey],
  }));
};

// Chart Component for a Single Status
const StatusLineChart: React.FC<StatusLineChartProps> = ({
  data,
  statusKey,
  label,
  borderColor,
  backgroundColor,
}) => {
  const chartData = transformData(data, statusKey);

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"line">) => {
            const value = context.raw as number;
            return `${context.dataset.label}: ${value} seconds`;
          },
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
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: 300, marginBottom: 20 }}>
      <h3>{label}</h3>
      <Line
        data={{
          labels: chartData.map((entry) => entry.time),
          datasets: [
            {
              label,
              data: chartData.map((entry) => entry.value),
              borderColor,
              backgroundColor,
              borderWidth: 2,
              fill: true,
            },
          ],
        }}
        options={chartOptions}
      />
    </div>
  );
};

export default StatusLineChart;
