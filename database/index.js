var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/movies');

let movieSchema = mongoose.Schema({
  poster_path: Schema.Types.Mixed,
  adult: Boolean,
  overview: String,
  release_date: String,
  genre_ids: [Number],
  id: Number,
  original_title: String,
  title: String,
  backdrop_path: String,
  popularity: Number,
  vote_count: Number,
  video: Boolean,
  vote_average: Number,
  total_results: Number,
  total_pages: Number
});

let Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;