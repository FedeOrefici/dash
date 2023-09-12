import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul style={{display: 'flex', alignItems: 'center', gap: '10px', listStyle: 'none'}}>
        <li>home</li>
        <li>search</li>
        <NavLink to="/login">login</NavLink>
    </ul>
  )
}

export default Navbar
