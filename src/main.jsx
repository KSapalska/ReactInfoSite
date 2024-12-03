import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const root = createRoot(document.getElementById("root"));

function Header() {
  return (
    <header>
      <img src="src/assets/react-logo.png" alt="React logo" />
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thausands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

function Footer() {
  <footer>
    <small>© 2024 Sapalska development. All rights reserved.</small>
  </footer>;
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />);

