import React, { useState } from 'react';
import ArtSelctions from './Gallery/ArtSelctions';
import { servicesLineThree} from './Gallery/artData';
import viewmoreStyle from '../styles/viewmore.module.scss';
import ViewmoreSec3 from './ViewmoreSction3';


const ViewmoreSec2 = () => {
  const [viewMore, setViewMore] = useState(false);
  return (
 <div className={viewmoreStyle.container}>
         <button className={viewmoreStyle.viewmore_btn}  onClick={() => setViewMore(!viewMore)}>
           {viewMore ? 'View less...' : '  View more...'}
        </button>
  
        <div className={viewmoreStyle.wrapper}>

                         {viewMore ? <ArtSelctions {...servicesLineThree}/> : <div> </div>}
        </div>
        {viewMore ?  <ViewmoreSec3/>   : <div> </div>}
     
 </div> 
 
  );
};

export default ViewmoreSec2;
