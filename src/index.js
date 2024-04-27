import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Analytics } from '@vercel/analytics/react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Analytics />
  </>
);
