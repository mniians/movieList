import React from 'react';
import Movie from './MovieList.js';

const MovieList = ({movies, likeClickHandler, dislikeClickHandler}) => (
    <div className="movie-list">
      {console.log(movies)}
      {movies.map((movie =>
        <div className="movie-list-entry">
          <Movie
            entry={movie}
            key={movie.id}
            likeClick={likeClickHandler}
            dislikeClick={dislikeClickHandler}
            />
        </div>
      ))}
    </div>
);

export default MovieList;
