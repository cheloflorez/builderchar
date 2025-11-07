import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Build from "./routes/build";
import CustomCursor from "./components/CustomCursor"; // 👈 Importa el cursor

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/build/:buildId",
    element: <Build />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="cursor-none"> {/* 👈 Wrapper con cursor-none */}
    <CustomCursor /> {/* 👈 Cursor global */}
    <RouterProvider router={router} />
  </div>
);