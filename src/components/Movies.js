import React from "react";
import { movies } from "../data";

function Movies() {

  const displayMovies = movies.map((movie) => {
    const genreList = movie.genres.map((genre) => <li key={genre}>{genre}</li>)

    return(<div key = {movie.title}>
      <h2>Title: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        {genreList}
      </ul>
    </div>)
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  )
}

export default Movies;
