import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import PathRouter from "./common/routing/router";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={PathRouter} />
  </React.StrictMode>
);
