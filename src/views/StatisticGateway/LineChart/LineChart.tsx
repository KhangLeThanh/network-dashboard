import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StatusLineChart from "./StatusLineChart";
import { HistorySamples } from "../../../utils/types";

type LineChartProps = {
  data: HistorySamples[];
};

// Main Component Rendering All Status Charts
const LineChart = ({ data }: LineChartProps) => {
  return (
    <Grid container spacing={2} padding={2}>
      <Grid size={6}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <StatusLineChart
            data={data}
            statusKey="active"
            label="Active: "
            borderColor="#4caf50"
            backgroundColor="rgba(76, 175, 80, 0.2)"
          />
        </Paper>
      </Grid>
      <Grid size={6}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          {" "}
          <StatusLineChart
            data={data}
            statusKey="inactive"
            label="Inactive: "
            borderColor="#9e9e9e"
            backgroundColor="rgba(158, 158, 158, 0.2)"
          />
        </Paper>
      </Grid>

      <Grid size={6}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          {" "}
          <StatusLineChart
            data={data}
            statusKey="unstable"
            label="Unstable: "
            borderColor="#ffeb3b"
            backgroundColor="rgba(255, 235, 59, 0.2)"
          />
        </Paper>
      </Grid>

      <Grid size={6}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <StatusLineChart
            data={data}
            statusKey="offline"
            label="Offline: "
            borderColor="#f44336"
            backgroundColor=" rgba(244, 67, 54, 0.2)"
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LineChart;
