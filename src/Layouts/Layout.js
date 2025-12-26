import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const InquilinoLayout = () => (
  <>
    <Menu />
      <Outlet />
    <Footer />
  </>
);

export default InquilinoLayout;
