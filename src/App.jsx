import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Login from "./views/Login"
import Index from "./views/Index"
import Home from "./views/Home"
import Create from "./views/create/Create"

function App() {


 
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  )
}

export default App
