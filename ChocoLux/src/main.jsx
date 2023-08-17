import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./Layout";
import Offer from "./components/Offer";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Product";
import Testimonial from "./components/Testimonial";

import "./App.css";
import "./index.css";
import "./bootstrap.min.css";
// for making route
import ErrorPage from "./errorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
