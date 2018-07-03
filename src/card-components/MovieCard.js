import React, { Component } from 'react';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';
import defaultPoster from '../assets/poster-imgs/the-trash-man.png'

export default class MovieCard extends Component {

  render() {
    return (
      <div className="movie-card">
        <CardFront />
        <CardBack />
      </div>
    )
  }
}
