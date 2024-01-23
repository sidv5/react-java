import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import PathRouter from "./router";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={PathRouter} />
  </React.StrictMode>
);
