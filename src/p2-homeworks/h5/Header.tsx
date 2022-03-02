import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routes'

function Header() {
    return (
        <div>
            // add NavLinks
          <NavLink to={PATH.PRE_JUNIOR} >pre-junior</NavLink>
        </div>
    )
}

export default Header
