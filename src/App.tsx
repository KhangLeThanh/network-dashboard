import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GatewayTable from "./views/GatewayTable/GatewayTable";
import StatisticGateway from "./views/StatisticGateway/StatisticGateway";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GatewayTable />} />
        <Route path="/details" element={<StatisticGateway />} />
      </Routes>
    </Router>
  );
};

export default App;
