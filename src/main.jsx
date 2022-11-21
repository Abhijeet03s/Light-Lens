import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./context/Context";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>
);
