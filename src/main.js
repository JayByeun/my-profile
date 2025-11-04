import { jsx as _jsx } from "react/jsx-runtime";
import App from "./App";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(App, {}) }));
