import HeaderQr from "./headerQr";
import Header from "./Header/header.tsx";
import Profile from "./profile";
import Carousel from "./carouselSlider/carousel.tsx";
import style from "../styles/homePage1.module.scss";
import Image from "next/image";

export default function HomePage2() {
  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.profileContainer}>
          <Profile />
        </div>
        <HeaderQr />
      </div>
      <Carousel />
    </>
  );
}
