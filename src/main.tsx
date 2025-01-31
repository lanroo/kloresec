import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/themes/dracula.css";
import "./styles/themes/monokai-sublime.css";
import "./styles/themes/atom-one-dark.css";
import "./styles/themes/cyberwave.css";
import "./styles/markdown.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
