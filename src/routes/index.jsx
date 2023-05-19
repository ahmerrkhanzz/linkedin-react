import { createBrowserRouter } from "react-router-dom";

import Auth from "../pages/Auth.jsx";
import NotFound from "../pages/NotFound.jsx";
import Register from "../components/Register.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NotFound></NotFound>,
  },
  {
    path: "*/*",
    element: <NotFound></NotFound>,
  },
  {
    path: "/login",
    element: <Auth></Auth>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
