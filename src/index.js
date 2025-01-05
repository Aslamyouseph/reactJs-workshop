import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // This is used to enable routing in react example (http://localhost:3000/page1)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // This code is used to give the router to the app page
  // <Router>
  // <App />
  // </Router>

  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
