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



describe('<CardFront />', () => {
  
  it('uses the poster prop as a background image', () => {
    const wrapper = shallow(<CardFront />);
    expect().to.equal(true);
  });

});
