import { useEffect, useState } from "react";
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

  // const closeSideBar = () => {
  //   if (window.scrollY > 0 || isOpen === true) {
  //     setIsOpen(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", closeSideBar);
  // }, []);

  return (
    <>
      <Nav toggle={toggle} isOpen={isOpen} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <div className={layoutStyle.container}>
        <main className={layoutStyle.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
