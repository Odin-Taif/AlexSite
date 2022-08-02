
import {createContext} from "react";
import {useContext}  from "react";
import  {useState}   from "react";
import {servicesLineOne,servicesLineTwo,servicesLineThree, liberatedT} from '../components/Gallery/artData';


export const StaticPropsContext = createContext();



export  function useUser(){
  return useContext(StaticPropsContext)
}

//
export default function StateProvider(){

  const[user, setUser] = useState('lalla')

  return (
        <StaticPropsContext.Provider value={user}>
        
        </StaticPropsContext.Provider>
  )
}
 


// export const useStateValue = () => useContext(StateContext);

// export async function getStaticProps(){
//   return {
//     props: {
//       liberatedT:liberatedT,
//       servicesLineOne:servicesLineOne,  
//       servicesLineTwo:servicesLineTwo,
//       servicesLineThree:servicesLineThree, 
//     }
//   }
// }