import React, { useState, useEffect } from 'react';
import MovieList from './MovieList/MovieList.js'
import './App.css';

const App = () => {
  const url = 'https://developers.themoviedb.org/3/movies/get-popular-movies'
  let [movies, addMovies] = useState([]);
  useEffect(() => {
    fetch(url,{
      method: "GET",
      withCredentials: true,
      headers: {
        "X-Auth-Token": "",
        "Content-Type": "application/json"
      }
    })
      .then((resp) =>  resp.json())
      .then((data)) => {
        addMovies(movies = data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  });



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
