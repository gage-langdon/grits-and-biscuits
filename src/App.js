import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Views from "./views";

function App() {
  return (
    <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
      <Router>
        <Views />
      </Router>
    </div>
  );
}

export default App;
