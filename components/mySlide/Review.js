import { useState } from 'react';
import reviewStyle from '../../styles/review.module.scss';
import  { AiOutlineArrowUp, AiOutlineArrowDown }  from 'react-icons/ai';


const Review = ({slideObj}) => {


  const [index, setIndex] = useState(0);
   const mySlide = slideObj?.cards;
  const { id,cardIcon, imgLink } =mySlide[index];

  const checkNumber = (number) => {
    if (number > mySlide.length - 1) {
      return 0;
    }
    if (number < 0) {
      return mySlide.length - 1;
    }
    return number;
  };
  
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div  className={reviewStyle.reviewContainer}>
      <div className={reviewStyle.col1}>
      <div className={reviewStyle.imgContainer}>

       <a href={imgLink} target='_blank' rel="noopener"> <img src={cardIcon} className={reviewStyle.personImg}/></a> 
      </div>
      </div>
      <div className={reviewStyle.col2}>
        <div className={reviewStyle.btnDiv}>
        <button className={reviewStyle.prevBtn} onClick={prevPerson}>
          <AiOutlineArrowUp />
        </button>
        <button className={reviewStyle.nextBtn} onClick={nextPerson}>
          <AiOutlineArrowDown />
        </button>
        </div>
      </div>
    </div>

    
  );
};

export default Review;
