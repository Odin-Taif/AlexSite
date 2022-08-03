import HeaderQr from "../headerQr/headerQr";
import Profile from "../profile/profile";
import Carousel from "../carouselSlider/carousel.tsx";
import style from "./homePage1.module.scss";

export default function HomePage1() {
  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.profileContainer}>
          <Profile />
        </div>
        <HeaderQr />
      </div>
      <Carousel />
      <Carousel />
    </>
  );
}
