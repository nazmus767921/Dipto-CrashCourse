import "@/styles/global.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

