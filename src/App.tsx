import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GatewayTable from "./views/GatewayTable/GatewayTable";
import StatisticGateway from "./views/StatisticGateway/StatisticGateway";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GatewayTable />} />
        <Route path="/statistic/:gatewayId" element={<StatisticGateway />} />
      </Routes>
    </Router>
  );
};

export default App;
