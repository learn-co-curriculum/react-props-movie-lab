import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'


export default class CardBack extends Component {

  render() {
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
        <span />
        <img src={five}/>
        <span />
        <h5 className="genres">{this.props.genres.join(", ")}</h5>
      </div>
    )
  }
}
