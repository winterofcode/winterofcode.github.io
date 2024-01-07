import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import NotFound404 from "utils/NotFound404/NotFound404.jsx";
import Home from "pages/Home/Home.jsx";
import Team from "pages/Team/Team.jsx";
import MainLayout from "components/Layout/MainLayout.jsx";
import Coc from "pages/Coc/Coc.jsx";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/coc",
        element: <Coc />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
];

const router = createHashRouter(routes);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </App>
  </React.StrictMode>
);
