import React from 'React';
import Movie from './MovieList.js';

const MovieList = (movies) => {
  //map each movie with the like and dislike function passed down
  <div className="movie-list">
    {movies.map((movie) => {
      <Movie  />
    })}
  </div>
};

export default MovieList;
