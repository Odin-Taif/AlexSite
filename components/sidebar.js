import {useEffect, useState} from 'react'
import Link from 'next/link';
import sidebarStyle from '../styles/sidebar.module.scss';
import{FaTimes, FaBars} from 'react-icons/fa';
import {
    sideBarCloesed, 
    sideBarOpen,
}from '../styles/sidebar.module.scss';






const SideBar = ({toggle, isOpen}) => {
    
  return (
        <div className={ isOpen ? sideBarOpen : sideBarCloesed } >
            <div className={sidebarStyle.closeIcon} >
                    {isOpen ? <FaTimes/>: <FaBars/> }
            </div>
        <div className={sidebarStyle.sideBarDiv}   onClick={toggle}>
            <ul className={sidebarStyle.sideBarMenu}>
                <li onClick={toggle}  className={sidebarStyle.sideBarItem}>
                    <Link   href='/' className={sidebarStyle.sideBarLink}>Home</Link>
                </li>
                <li onClick={toggle} className={sidebarStyle.sideBarItem}>
                    <Link   href='/gallery' className={sidebarStyle.sideBarLink}>Gallery</Link>
                </li>
          
            </ul>   
        
        </div>
        </div>
  )
}

export default SideBar;