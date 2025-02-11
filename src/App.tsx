import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";

// Lazy load components
const GatewayTable = lazy(() => import("./views/GatewayTable/GatewayTable"));
const StatisticGateway = lazy(
  () => import("./views/StatisticGateway/StatisticGateway")
);

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<GatewayTable />} />
          <Route path="/statistic/:gatewayId" element={<StatisticGateway />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
