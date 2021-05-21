import React from 'React';

const Movie = ({entry}) => (
  <div className="movie-entry">
    <div className="movie-body">
      <img className="movie-image" src={entry.poster_path} alt=""/>
      <button className="like"></button>
      <button className="dislike"></button>
    </div>
  </div>
);

export default Movie;