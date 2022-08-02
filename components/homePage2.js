
import SlideReviewApp from './mySlide/SlideReviewApp';
import SideSection from './sideSection.js';
import HomePage2Style from '../styles/homePage2.module.scss';

export default function HomePage2() {
  return (
 
    <div className={HomePage2Style.homeContainer}>
      <div className={HomePage2Style.profileContainer}>
        <SideSection/>
      </div>
        <div className={HomePage2Style.slidesContainer} >
        <SlideReviewApp/>
        </div>
    </div>

 
  )
}
