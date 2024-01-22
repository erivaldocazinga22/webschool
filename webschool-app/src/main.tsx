import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import 'react-toastify/dist/ReactToastify.css';


import { RouterProvider } from "react-router-dom";
import { Routers } from "./router";
import ThemeProvider from "./contexts/Theme/themeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={Routers} />
    </ThemeProvider>
  </React.StrictMode>,
)
