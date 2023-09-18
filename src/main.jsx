import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Build from "./routes/build";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/:char",
    element: <Build />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
