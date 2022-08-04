import Image from "next/image";
import Link from "next/link";
import SocialMedia from "../socialmedia/socialmedia";
import style from "./bussinessCard.module.scss";

const BussinessCard = () => {
  return (
    <div className={style.container}>
      <div className={style.person}>
        <Link href="/">
          <Image
            width="90px"
            height="90px"
            layout="fixed"
            draggable={false}
            src="/Assests/alexAssets/alex-tattos=1.webp"
            className={style.bussinessCardImage}
          />
        </Link>
        <div className={style.profileName}>
          <h2>Artinote</h2>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default BussinessCard;
