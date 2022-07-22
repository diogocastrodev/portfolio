import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PastContextProvider } from "./context/PastContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PastContextProvider>
      <App />
    </PastContextProvider>
  </React.StrictMode>
);
