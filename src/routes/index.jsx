import { createBrowserRouter } from "react-router-dom";

import Auth from "../pages/Auth.jsx";
import NotFound from "../pages/NotFound.jsx";

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
]);
