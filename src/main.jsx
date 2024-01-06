import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound404 from "utils/NotFound404/NotFound404.jsx";
import Home from "pages/Home/Home.jsx";
import Team from "pages/Team/Team.jsx";
import Organisation from "pages/Organisation/Organisation.jsx";
import MainLayout from "components/Layout/MainLayout.jsx";

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
        path: "/:id/projects",
        element: <Organisation />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
