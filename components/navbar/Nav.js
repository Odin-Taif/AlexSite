import Link from "next/link";
import navStyle from "./nav.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";

const Nav = ({ toggle, isOpen }) => {
  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About </Link>
        </li>
      </ul>
      <div onClick={toggle} className={navStyle.mobileIcon}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Nav;
