import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import customTheme from "./theme/customTheme";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
