import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Redirect logic
if (process.env.NODE_ENV === 'development' && window.location.pathname === '/') {
  window.location.assign('/SnapScout');
}

// most imp code find why this use and how it works ...............

root.render(
  <StrictMode>
    <Router basename="/SnapScout">
      <App/>
    </Router>
  </StrictMode>
);
