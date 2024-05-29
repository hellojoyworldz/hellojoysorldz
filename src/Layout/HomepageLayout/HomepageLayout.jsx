import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const HomepageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HomepageLayout;
