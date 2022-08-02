import React, { useState } from 'react';
import ArtSelctions from './Gallery/ArtSelctions';
import { servicesLineFour} from './Gallery/artData';
import viewmoreStyle from '../styles/viewmore.module.scss';
import ViewmoreSec4 from './ViewmoreSction4';


const ViewmoreSec3 = () => {
  const [viewMore, setViewMore] = useState(false);
  return (
 <div className={viewmoreStyle.container}>
         <button className={viewmoreStyle.viewmore_btn}  onClick={() => setViewMore(!viewMore)}>
           {viewMore ? 'View less...' : '  View more...'}
        </button>
  
        <div className={viewmoreStyle.wrapper}>

                         {viewMore ? <ArtSelctions {...servicesLineFour}/> : <div> </div>}
        </div>
        {viewMore ?  <ViewmoreSec4/>   : <div> </div>}
     
 </div> 
 
  );
};

export default ViewmoreSec3;
