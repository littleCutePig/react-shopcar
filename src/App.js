import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { route, MapRoute } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <MapRoute route={route} />
    </BrowserRouter>
  );
}

export default App;
