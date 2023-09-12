import { Routes, Route, NavLink } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./views/Login"

function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
