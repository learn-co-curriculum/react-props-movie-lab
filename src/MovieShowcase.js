import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return the correct
    console.log("in generateMovieCards");
    console.log("movieData is: ", movieData);
    return movieData.map(movie => {
      return <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster} />
    });
  };

  render() {
    console.log("in MovieShowcase");
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
