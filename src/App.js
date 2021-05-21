import React, { useState, useEffect } from 'react';
import MovieList from './MovieList/MovieList.js'
import './App.css';

const App = () => {
  const url = 'https://developers.themoviedb.org/3/movie/top_rated?api_key=' + process.env.REACT_APP_API_KEY + '&language=en-US&page=1';
  let [movies, addMovies] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((resp) =>  resp.json())
      .then((data) => {
        addMovies(movies = data.results);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  likeClickHandler = (event) => {
    let movie = event.target;

    movie.liked = true;
  }

  dislikeClickHandler = (event) => {
    let movie = event.target;

    movie.liked = false;
  }



  return (
    <div className="App">
      <div className="nav">
        <span className="Home" />
        <span className="Favourites" />
        <span className="Dislikes" />
      </div>
      <div className="body">
        <MovieList movies={movies}/>
      </div>
    </div>
  )


}

export default App;
