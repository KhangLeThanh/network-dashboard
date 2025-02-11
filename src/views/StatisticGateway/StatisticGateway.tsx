import { Link, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import LineChart from "./LineChart/LineChart";
import gatewayData from "../../data/single_gateway_stats.json";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const StatisticGateway = () => {
  const { gatewayId } = useParams<{ gatewayId: string }>();
  const breadcrumbs = [
    <Link to="/">Home</Link>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      Statistic {gatewayId}
    </Typography>,
  ];
  return (
    <>
      <Box sx={{ padding: "2rem 1rem" }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <Box sx={{ height: "33%", marginBottom: "20px" }}>
          <LineChart data={gatewayData.historySamples} />
        </Box>
      </Box>
    </>
  );
};

export default StatisticGateway;
