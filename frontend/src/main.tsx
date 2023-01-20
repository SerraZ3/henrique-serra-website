import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./index.css";
import ReactGA from "react-ga";
const TRACKING_ID = "G-1MR622K5WL"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
