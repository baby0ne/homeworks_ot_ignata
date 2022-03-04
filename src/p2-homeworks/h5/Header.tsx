import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routes'
import style from './Header.module.css'

function Header() {
   return (
      <div>
         <input type="checkbox" id="hmt" className={style.hiddenMenuTicker} />

         <label className={style.btnMenu} htmlFor="hmt">
            <span className={style.first}></span>
            <span className={style.second}></span>
            <span className={style.third}></span>
         </label>

         <ul className={style.hiddenMenu}>
            <li><NavLink to={PATH.PRE_JUNIOR} className={({ isActive }) => (isActive ? style.active : style.navStyle)}>pre-junior</NavLink></li>
            <li><NavLink to={PATH.JUNIOR} className={({ isActive }) => (isActive ? style.active : style.navStyle)}>junior</NavLink></li>
            <li><NavLink to={PATH.JUNIOR_PLUS} className={({ isActive }) => (isActive ? style.active : style.navStyle)}>junior-plus</NavLink></li>
         </ul>

         <br /><br />
      </div>
   )
}

export default Header;
