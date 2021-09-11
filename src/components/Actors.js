import React from "react";
import { actors } from "../data";

function Actors() {

  const displayActors = actors.map((actor) => {
    const moviesList = actor.movies.map((movie) => <li key = {movie}>{movie}</li>)

    return(
      <div key = {actor.name}>
        <h2>{actor.name}</h2>
        <ul>{moviesList}</ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors}
    </div>
  );
}

export default Actors;
