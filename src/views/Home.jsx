import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'

const Home = () => {

  const data = useSelector((state) => state.reviews)
  
  return (
    <div>
        <Navbar />
        {data.reviews?.map(dt => (
          <div>
            <p>{dt.country}</p>
            <p>{dt.description}</p>
            <img src={dt.picture} />
            <p>{dt.rate}</p>
          </div>
        ))}
    </div>
  )
}

export default Home
