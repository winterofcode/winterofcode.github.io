import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "components/Navbar/Navbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import NotFound404 from "utils/NotFound404/NotFound404.jsx";
import Home from "pages/Home/Home.jsx";
import Team from "pages/Team/Team.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/team",
    element: <Team />,
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
      <Navbar />
      <RouterProvider router={router} />
      <Footer /> 
    </App>
  </React.StrictMode>
);
