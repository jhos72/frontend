import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Menu />
      <Outlet />
    <Footer />
  </>
);

export default Layout;
