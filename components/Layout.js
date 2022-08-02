import { useState } from 'react';
import StateProvider from '../pages/useContextFile';
import Nav from '../components/Nav.js';
import Sidebar from '../components/sidebar.js'
import Footer from '../components/Footer.js';

import layoutStyle from '../styles/layout.module.scss';

const Layout = ({children}) => {
  const [ isOpen , setIsOpen] = useState(false)
 
 
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const showSocialNav  =  ()=>{
    setShowSocial(!showSocial)
}





  return (
    <>
    
    <Nav toggle={toggle} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Sidebar toggle={toggle} isOpen={isOpen}/>

        <div className={layoutStyle.container}>
       
              <main className={layoutStyle.main}>
                    {children}  
              </main>
     
          
        </div>
      
    <Footer/>
    </>
  )
}

export default Layout;