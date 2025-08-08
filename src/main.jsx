// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// IMPORTANT: slick-carousel css imports (after your index.css or before, যেটা পছন্দ)
// নিশ্চিত করো তোমার node_modules এ প্যাকেজ আছে
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
