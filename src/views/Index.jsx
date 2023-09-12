import React from 'react'
import { NavLink } from 'react-router-dom'

const Index = () => {
  return (
    <div>
      <div>
        <div style={{display: 'flex'}}>
        <span class="material-symbols-outlined">airplane_ticket</span>
        <p>TRAVEL APP</p>
        </div>
        <p>SOCIAL</p>
      </div>
      <NavLink to='/login'>login</NavLink>
    </div>
  )
}

export default Index
