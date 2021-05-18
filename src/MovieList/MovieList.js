import React from 'react';
import Movie from './MovieList.js';

const MovieList = ({movies}) => (
    <div className="movie-list">
      {console.log(movies)}
      {movies.map((movie =>
        <div className="movie-list-entry">
          <Movie entry={movie}/>
        </div>
      ))}
    </div>
);

export default MovieList;
