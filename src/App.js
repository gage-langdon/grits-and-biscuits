import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga";

import "./App.css";
import Views from "./views";

function App() {
  ReactGA.initialize("UA-91976948-4");
  return (
    <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
      <Router>
        <Views />
      </Router>
    </div>
  );
}

export default App;
