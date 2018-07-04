import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import MovieShowcase from '../src/MovieShowcase';
import MovieCard from '../src/card-components/MovieCard'
import CardFront from '../src/card-components/CardFront'
import CardBack from '../src/card-components/CardBack'


describe('<MovieCard />', () => {
  
  it("assigns a default prop of 'Unknown' for the title prop", () => {
    const wrapper = shallow(<MovieCard />);
    expect().to.equal(true);
  })

  
  it("assigns a default prop of false for the IMDBRating prop", () => {
    const wrapper = shallow(<MovieCard />)
    expect().to.equal(true)
  })
  
  it("assigns a default prop of ['No Genre(s) Found'] for the genres prop", () => {
    const wrapper = shallow(<MovieCard />)
    expect().to.equal(true)
  })
  
  it("assigns a default prop of 'default' for the poster prop", () => {
    const wrapper = shallow(<MovieCard />)
    expect().to.equal(true)
  })
  
})
