import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GatewayTable from "./views/GatewayTable/GatewayTable";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GatewayTable />} />
      </Routes>
    </Router>
  );
};

export default App;
