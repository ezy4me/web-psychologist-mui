import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material";
import { blue, indigo } from "@mui/material/colors";
import router from "./router";
import { ruRU } from "@mui/x-data-grid";
const theme = createTheme(
  {
    palette: {
      primary: blue,
      secondary: indigo,
    },
  },
  ruRU
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
