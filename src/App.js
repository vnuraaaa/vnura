import React from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Client from "./pages/Client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainProvider } from "./context/MainContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/client",
    element: <Client />,
  },
]);
const App = () => {
  return (
    <>
      <MainProvider>
        <RouterProvider router={router} />
      </MainProvider>
    </>
  );
};

export default App;
