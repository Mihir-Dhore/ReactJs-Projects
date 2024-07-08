import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Course from "./pages/Course";
import Blog from "./Blog";
import BlogDetails from "./pages/BlogDetails";
import Error404 from "./Error404";

const root = ReactDOM.createRoot(document.getElementById("root"));
let AllRoutes = createBrowserRouter([
  //Create this Routes for Pages
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about-us",
    element: <About />,
  },
  {
    path: "course",
    element: <Course />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  //dynamic Routing
  {
    path: "blog/:id",
    element: <BlogDetails />,
  },
  // Below is For Error 404
  {
    path: "*",
    element: <Error404 />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={AllRoutes} />{" "}
    {/* Pass that variable in this router */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
