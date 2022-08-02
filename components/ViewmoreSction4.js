import React, { useState } from 'react';
import ArtSelctions from './Gallery/ArtSelctions';
import { servicesLineFive} from './Gallery/artData';
import viewmoreStyle from '../styles/viewmore.module.scss';



const ViewmoreSec4 = () => {
  const [viewMore, setViewMore] = useState(false);
  return (
 <div className={viewmoreStyle.container}>
         <button className={viewmoreStyle.viewmore_btn}  onClick={() => setViewMore(!viewMore)}>
           {viewMore ? 'View less...' : '  View more...'}
        </button>
  
        <div className={viewmoreStyle.wrapper}>

                         {viewMore ? <ArtSelctions {...servicesLineFive}/> : <div> </div>}
        </div>

 </div> 
 
  );
};

export default ViewmoreSec4;
