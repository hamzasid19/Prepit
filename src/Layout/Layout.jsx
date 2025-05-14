import Header from "../Components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
