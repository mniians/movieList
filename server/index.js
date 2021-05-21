const express = require('express');
const Movies = require('../database/index.js');
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors({
  origin: function(origin, next) {
    var allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
      'http://localhost:3003'
    ];
    if (!origin) { return next(null, true); }
    if (allowedOrigins.indexOf(origin) === -1) {
      const message = 'The CORS policy for this site does not \
        allow access from the specified Origin.';
      return next(new Error(message), false);
    }
    return next(null, true);
  }
}));

app.post('/movies', (req, res) => {

})

app.put('/movies/:id', (req, res) => {
  Movies.update({_id: req.params.id}, req.body, (error, movie) => {
    if (error) {
      console.log('Error updating movie with id' + req.params.id + ': ', error)
    }
  })
  Movies.update({liked: req.params.id}, req.body, (error, movie) => {
    if (error) {
      console.log('error updating movie with name' + req.params.id + ': ', error);
    } else {
      res.send();
    }
  })
})

app.get('/movies/liked', (req, res) => {
  Movie.find()
})

app.get('/movies/disliked', (req, res) => {
  Movie.find()
})

