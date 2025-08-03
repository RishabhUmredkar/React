import React from 'react'

const ColorList = () => {
  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

  return (
    <div>
      <h2>Color List</h2>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li> // Using the index as the key for each list item
        ))}
      </ul>
    </div>
  )
}

export default ColorList
