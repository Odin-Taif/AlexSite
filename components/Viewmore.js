import React, { useState,  useContext} from 'react';
import ArtSelctions from './Gallery/ArtSelctions';

import viewmoreStyle from '../styles/viewmore.module.scss';
import ViewmoreSec2 from './ViewmoreSction2';






const Viewmore = ({servicesLineTwo}) => {
 

  const [viewMore, setViewMore] = useState(false);



  return (

 <div className={viewmoreStyle.container}>
         <button className={viewmoreStyle.viewmore_btn}  onClick={() => setViewMore(!viewMore)}>
           {viewMore ? 'View less...' : '  View more...'}
        </button>
  
        <div className={viewmoreStyle.wrapper}>

                     {viewMore ?  <ArtSelctions {...servicesLineTwo}/>   : <div> </div>}
        </div>
                     {viewMore ?  <ViewmoreSec2/>   : <div> </div>}
     
 </div> 
 
  );
};

export default Viewmore;
