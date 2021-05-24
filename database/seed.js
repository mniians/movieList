const Movies = require('../index.js');
const express = require('express');
const app = express();
const url = 'https://developers.themoviedb.org/3/movie/top_rated?api_key=' + process.env.REACT_APP_KEY + '&language=en-US&page=1';

let movieList = [];
const movies = new Movies();
app.get(url, (req, res) => {
  res.send(200)
   .then((data) => {
     movieList = data.results;
   })
   .catch((err) => {
     console.log(err)
   });
});

movieList.forEach(movie => {
  movies.save(movie);
});
