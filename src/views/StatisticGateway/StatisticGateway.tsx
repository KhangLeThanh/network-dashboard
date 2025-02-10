import LineChart from "./LineChart";
import BarChart from "./BarChart";
import gatewayData from "../../data/single_gateway_stats.json";

const StatisticGateway = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* Line chart */}
      <div style={{ height: "50%", marginBottom: "20px" }}>
        <LineChart data={gatewayData.historySamples} />
      </div>

      {/* Bar chart */}
      <div style={{ height: "50%" }}>
        <BarChart data={gatewayData.historySamples} />
      </div>
    </div>
  );
};

export default StatisticGateway;
