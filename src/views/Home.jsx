import React from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { del } from '../../redux/reducer'

const Home = () => {

  const data = useSelector((state) => state.reviews)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(del(id))
    console.log(id)
  }

  
  return (
    <div>
        <Navbar />
        {data.reviews?.map((dt) => (
          <div key={dt.id}>
            <p>{dt.country}</p>
            <p>{dt.description}</p>
            <img src={dt.picture} />
            <p>{dt.rate}</p>
            <button onClick={() => handleDelete(dt.id)}>delete</button>
            <button>edit</button>
          </div>
        ))}
    </div>
  )
}

export default Home
