import React, { useState } from 'react'
import { add } from '../../../redux/reducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'


const Create = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const generateId = v4()


  const [data, setData] = useState({
    id: generateId,
    country: '',
    description: '',
    picture: '',
    rate: ''
  })


  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(add(data))
    setData({
      id: generateId,
      country: '',
      description: '',
      picture: '',
      rate: '',
    })
    navigate('/home')
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>country</label>
            <select value={data.country} name='country' onChange={handleChange}>
                <option>brasil</option>
                <option>argentina</option>
                <option>norway</option>
                <option>finland</option>
            </select>
        </div>
        <div>
            <label>description</label>
            <textarea onChange={handleChange} value={data.description} name='description' />
        </div>
        <div>
            add a picture
            <input onChange={handleChange} value={data.picture} type='file' name='picture' />
        </div>
        <div>
            <p>rate</p>
            <input onChange={handleChange} type='number' value={data.rate} min={1} max={5} name='rate' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default Create
