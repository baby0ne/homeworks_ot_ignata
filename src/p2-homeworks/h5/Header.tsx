import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routes'
import style from './Header.module.css'

function Header() {
   return (
      <div className={style.navLinks}>
         <NavLink to={PATH.PRE_JUNIOR} >pre-junior</NavLink>
         <NavLink to={PATH.JUNIOR} >junior</NavLink>
         <NavLink to={PATH.JUNIOR_PLUS} >junior-plus</NavLink>
      </div>
   )
}

export default Header;
