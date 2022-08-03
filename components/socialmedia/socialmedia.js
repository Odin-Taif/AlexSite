import Link from "next/link";
import {
  BsWalletFill,
  BsLinkedin,
  BsInstagram,
  BsBehance,
  BsGlobe2,
} from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import style from "./socialMedia.module.scss";
const SocialMedia = () => {
  return (
    <div className={style.container}>
      <a href="/businessCard" alt="Hire me">
        <BsWalletFill /> Hire me
      </a>
      <a
        href="https://www.behance.net/sarakhayat"
        target="_blank"
        rel="noopener"
        alt="Behance"
      >
        <BsBehance />
        hance
      </a>
      <Link href="https://saraportfilio.com/">
        <a>
          <BsGlobe2 />
          Porfilio
        </a>
      </Link>
      <a href="mailto:sarakhayat249@gmail.com" target="_blank" rel="noopener">
        <MdOutlineMailOutline /> Email
      </a>
      <a
        href="https://www.linkedin.com/in/sara-khayat-844233175/"
        target="_blank"
        rel="noopener"
      >
        <BsLinkedin /> LinkedIn
      </a>
      <a
        href="https://www.instagram.com/sarakhayatart"
        target="_blank"
        rel="noopener"
      >
        <BsInstagram /> Instagram
      </a>
    </div>
  );
};

export default SocialMedia;
