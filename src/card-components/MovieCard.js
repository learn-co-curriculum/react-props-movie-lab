import React, { Component } from 'react';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';
import defaultPoster from '../assets/the-trash-man.png'

export default class MovieCard extends Component {

  render() {
    return (
      <div className="movie-card">
        <CardFront posterURL={this.props.posterURL} />
        <CardBack title={this.props.title} IMDBRating={this.props.IMDBRating} genres={this.props.genres} />
      </div>
    )
  }
}

MovieCard.defaultProps = {
  title: "Poop",
  IMDBRating: 'No Rating Found',
  genres: ['No Genre(s) Found'],
  posterURL: defaultPoster
}
