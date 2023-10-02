import React from "react";
import AppRoutes from "./routes";
import './assets/styles/global.scss'
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="light">
      <BrowserRouter>
        <div className="container ">
          <NavBar />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
