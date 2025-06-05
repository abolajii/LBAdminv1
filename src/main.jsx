/* eslint-disable react-refresh/only-export-components */
import "./index.css";
import "react-phone-input-2/lib/style.css";
import "react-calendar/dist/Calendar.css";

import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
