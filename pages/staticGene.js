
import { useState, createContext } from "react";
import {servicesLineOne,servicesLineTwo,servicesLineThree, liberatedT} from '../components/Gallery/artData';



// we are importing the userContext to ba able to mount some data to other nested compos. 


export const UserContext = createContext()


const StaticGene = (props) => {


  const [user, setUser] = useState('am the user');


  return (
    <UserContext.Provider value={user}>
                 <div>
                                       
                 </div>
    </UserContext.Provider>
  )
}

export async function getStaticProps(){
    return {
      props: {
        liberatedT:liberatedT,
        servicesLineOne:servicesLineOne,  
        servicesLineTwo:servicesLineTwo,
        servicesLineThree:servicesLineThree, 
      }
    }
}


export default StaticGene