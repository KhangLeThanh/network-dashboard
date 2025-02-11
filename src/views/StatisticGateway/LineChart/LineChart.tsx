import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StatusLineChart from "./StatusLineChart";
import { HistorySamples } from "../../../utils/types";
import customTheme from "../../../theme/customTheme";
import { PALATTE_ERROR_MAIN_COLOR } from "../../../constant/constantColor";

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
            borderColor={customTheme.palette.primary.main}
            backgroundColor={customTheme.palette.primary.main}
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
            backgroundColor={PALATTE_ERROR_MAIN_COLOR}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LineChart;
