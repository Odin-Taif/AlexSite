import Review from './Review';
import reviewStyle from '../../styles/review.module.scss';
import {servicesLineOne,servicesLineTwo, servicesLineThree} from '../Gallery/artData';

function SlideReviewApp() {


  const slideDataObj = [servicesLineOne, servicesLineTwo, servicesLineThree];
  return (
  
      <div className={reviewStyle.slidesContainer}>
      

            {
            (slideDataObj || []).map(
              slideObj => {
              return <Review key={slideObj.id} slideObj={slideObj}/> ;
            })
            }
     
      </div>

  );
}

export default SlideReviewApp;
