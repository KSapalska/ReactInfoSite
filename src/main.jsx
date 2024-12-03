
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <main>
    <img src="src/assets/react-logo.png" alt="React logo"/>
    <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thausands of enterprise apps, including mobile apps</li>
        </ul>
    
    </main>
  
) 

/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'import
 import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */

/* 
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

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <h1>Hello from React!</h1>
) */


//ReactDOM.createRoot(document.getElementById("root")).render(navbar);