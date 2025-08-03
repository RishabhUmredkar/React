import React from 'react'

const MovieList = ({ moviesarr }) => {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {moviesarr.map(movie => (
          <li key={movie.id}>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieList
