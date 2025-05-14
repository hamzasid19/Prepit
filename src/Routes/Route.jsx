import { useRoutes } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import About from "../Pages/About";
import AddToCart from "../Pages/Cart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import CheckOut from "../Pages/CheckOut";
const Route = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },

        {
          path: "about",
          element: <About />,
        },
        {
          path: "menu",
          element: <Menu />,
        },
        {
          path: "cart",
          element: <AddToCart />,
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <CheckOut />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "login",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      path: "register",
      element: (
        <PublicRoute>
          <Register />
        </PublicRoute>
      ),
    },
  ]);
};
export default Route;
