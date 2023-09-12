import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/home')
  }


  return (
    <div>
      <form>
        <input type='email' />
        <input type='password' />
        <button onClick={handleLogin}>login</button>
      </form>
    </div>
  )
}

export default Login
