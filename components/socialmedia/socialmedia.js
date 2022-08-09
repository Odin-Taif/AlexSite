import Link from "next/link";
import { BsInstagram, BsGlobe2, BsFacebook } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import style from "./socialMedia.module.scss";
const SocialMedia = () => {
  return (
    <div className={style.container}>
      <a
        href="mailto:"
        target="_blank"
        rel="noopener"
        className={style.socialMediaLink}
      >
        <span>
          <MdOutlineMailOutline />
        </span>
        <span> Email</span>
      </a>
      <a
        href="/"
        target="_blank"
        rel="noopener"
        className={style.socialMediaLink}
      >
        <BsFacebook />
        <span>Facebook</span>
      </a>
      <a
        href="https://www.instagram.com/artinote/?hl=en"
        target="_blank"
        rel="noopener"
        className={style.socialMediaLink}
      >
        <BsInstagram />
        <span>Instagram</span>
      </a>
    </div>
  );
};

export default SocialMedia;
