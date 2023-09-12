import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <ul style={{display: 'flex', alignItems: 'center', gap: '10px', listStyle: 'none'}}>
        <NavLink>home</NavLink>
        <SearchBar /> 
        <NavLink to="/login">Log out</NavLink>
    </ul>
  )
}

export default Navbar
