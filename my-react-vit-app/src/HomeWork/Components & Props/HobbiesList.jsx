import React from 'react'

const HobbiesList = ({ hobbies }) => {
  return (
    <div>
      <h3>My Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}

export default HobbiesList
