import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BudgetsProvider } from "./pages/expenses/contexts/BudgetsContext"; // This path should exactly match the file and folder names
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BudgetsProvider>
        <App />
      </BudgetsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
