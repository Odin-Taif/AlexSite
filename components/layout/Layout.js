import { useState } from "react";
import Nav from "../navbar/Nav";
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/Footer";

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
      <Nav toggle={toggle} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <div className={layoutStyle.container}>
        <main className={layoutStyle.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
