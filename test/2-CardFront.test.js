import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import CardFront from '../src/card-components/CardFront'


describe('<CardFront />', () => {

  const genres = [
    "Never gonna give you up",
    "Never gonna let you down",
    "Never gonna run around and desert you"
  ]

  const cardBack = shallow(<CardFront title="Rolling in the Deep" genres={genres} />)
  const text = cardBack.text()

  it("correctly renders the title prop", () => {
    expect(text).to.contain('Rolling in the Deep')
  })

  it("correctly renders the genres prop as comma seperated strings", () => {
    expect(text).to.contain(genres.join(', '))
  })

})
