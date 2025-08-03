import React from 'react'

const FavoriteColor = ({ color = "red" }) => {
  return (
    <div>
      <h2>Favorite Color</h2>
      <p>{`Your favorite color is ${color}.`}</p>
    </div>
  )
}

export default FavoriteColor
