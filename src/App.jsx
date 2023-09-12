import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Login from "./views/Login"
import Index from "./views/Index"
import Home from "./views/Home"

function App() {

  const [isLogged, setIsLogged] = useState(false)
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
