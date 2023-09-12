import React from 'react'

const Create = () => {
  return (
    <div>
      <form>
        <div>
            <label>country</label>
            <select>
                <option>brasil</option>
                <option>argentina</option>
                <option>norway</option>
                <option>finland</option>
            </select>
        </div>
        <div>
            <label>description</label>
            <textarea />
        </div>
        <div>
            add a picture
            <input type='file' />
        </div>
        <div>
            <p>rate</p>
            <p>*****</p>
        </div>
      </form>
    </div>
  )
}

export default Create
