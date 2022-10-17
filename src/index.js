import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { SavedContextProvider } from "./context/SavedContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <SavedContextProvider>
        <App />
      </SavedContextProvider>
    </Router>
  </React.StrictMode>
);
