/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */


import React from "react";
import ReactDOM from "react-dom/client";
  const navbar = (
    <nav>
        <h1>Brand name</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.createRoot(document.getElementById("root")).render(navbar);