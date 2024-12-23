import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";

//import "./index.css";

const root = createRoot(document.getElementById("root"));

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
