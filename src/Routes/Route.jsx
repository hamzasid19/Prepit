import { useRoutes } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import About from "../Pages/About";
import AddToCart from "../Pages/AddToCart";
const Route = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/cart",
          element: <AddToCart />,
        },
      ],
    },
  ]);
};
export default Route;
