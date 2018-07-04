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


describe('<CardBack />', () => {
  
  it("correctly renders the title prop", () => {
    const wrapper = shallow(<MovieCard />);
    expect().to.equal(true);
  })
  
  it("correctly renders the genres prop as comma seperated strings", () => {
    const wrapper = shallow(<MovieCard />)
    expect().to.equal(true)
  })
  
  it("correctly renders the poster prop", () => {
    const wrapper = shallow(<MovieCard />)
    expect().to.equal(true)
  })
  
  it("renders 'No Rating Found' in an <h4> if the IMDBRating prop is null", () => {
    const wrapper = shallow(<MovieCard />)
    expect().to.equal(true)
  })
  
  it("renders the correct star image in an <img> if the IMDBRating prop is valid", () => {
    const wrapper = shallow(<MovieCard />)
    expect().to.equal(true)
  })
  
});
