import React from 'react';
import MovieList from './MovieList/MovieList.js'
import './App.css';

class App extends React.Component {


  render () {
    return (
      <div className="App">
        <div className="nav">
          <span className="Home" />
          <span className="Favourites" />
          <span className="Dislikes" />
        </div>
        <div className="body">
          <MovieList movies={["asd","asdads"]}/>
        </div>
      </div>
    )
  }
}

export default App;
