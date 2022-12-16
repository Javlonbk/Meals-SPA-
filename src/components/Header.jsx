
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
      <h3>Meals</h3>
      <div className="NavItems">
        <NavLink to={'./about'}>About</NavLink>
        <NavLink to={'./contact'}>Contact</NavLink>
        <Outlet/>
      </div>
    </div>
  )
}

export default Header