import { useEffect, useState } from "react";
import Link from "next/link";
import style from "./sidebar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import { sideBarCloesed, sideBarOpen } from "./sidebar.module.scss";

const SideBar = ({ toggle, isOpen }) => {
  return (
    <div className={isOpen ? sideBarOpen : sideBarCloesed}>
      <div className={style.closeIcon}>{isOpen ? <FaTimes /> : <FaBars />}</div>
      <div className={style.sideBarDiv} onClick={toggle}>
        <ul className={style.sideBarMenu}>
          <li onClick={toggle} className={style.sideBarItem}>
            <Link href="/" className={style.sideBarLink}>
              Home
            </Link>
          </li>
          <li onClick={toggle} className={style.sideBarItem}>
            <Link href="/gallery" className={style.sideBarLink}>
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
