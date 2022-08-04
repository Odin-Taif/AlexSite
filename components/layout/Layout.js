import { useEffect, useState } from "react";
import Nav from "../navbar/Nav";
import Sidebar from "../sidebar/sidebar";
import layoutStyle from "./layout.module.scss";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const showSocialNav = () => {
    setShowSocial(!showSocial);
  };

  return (
    <>
      <Nav toggle={toggle} isOpen={isOpen} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <div className={layoutStyle.container}>
        <main className={layoutStyle.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
