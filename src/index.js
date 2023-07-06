// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import 'leaflet/dist/leaflet.css'
// import App from './App';

import React from 'react';
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals();