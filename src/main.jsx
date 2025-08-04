import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import CoffeeDetails from "./components/CoffeeDetails";
import ViewDetails from "./components/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: () => fetch("http://localhost:5000/coffees"),
  },
  {
    path: "addCoffees",
    element: <AddCoffee />,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
  },
  {
    path: "coffees/:id",
    element: <CoffeeDetails />,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
  },
  {
    path: "viewCoffee/:id",
    element: <ViewDetails />,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
