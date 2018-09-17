# React Props Movie Lab


## Objectives

1. Practice passing props from parent components to children
2. Practice using default props
3. Practice jumping into and improving existing code 


## Introduction

This is a barebones React application used to showcase the nine greatest movies
of all time. Your job is to update it so that it passes props from parent to
children components correctly. In addition, you will implement default props so
that 'bad/missing data' is properly handled - preventing our user interface from
blowing up our visitors' computers

Following is the component tree. When fully rendered, there are **9**
`MovieCards` rendered by `MovieShowcase`:

```
└── MovieShowcase
    │
    ├── MovieCard
    │   ├── CardFront
    │   └── CardBack
    │    
    └── MovieCard
        ├── CardFront
        └── CardBack
```

`MovieShowcase` is the component that will house all of the 'raw' data
associated with the movies we want to display. This data is located in
`src/data.js` and is already being imported.

`MovieCard` components (which showcase a single movie) receive their individual
movie information from `MovieShowcase` as four props: `title`, `IMDBRating`,
`genres`, and `poster`. Following, the props are passed again to either
`CardFront` or `CardBack`.

In our movie data set, we occasionally have missing data. This is where
`defaultProps` come in and really pull our buns out of the fire. We will be
handling all of our `defaultProp`'ing in `MovieCard` before they are passed down
the chain to the front and back components.


## Deliverables

###### `MovieShowcase`
1. `.map` over the imported movie data array and render `MovieCard`s for each element. (see [documentation)][lists-and-keys]
2. Don't forget to pass _all 4_ props

###### `MovieCard`
1. `defaultProps` should be assigned in `MovieCard` for all four of the props:
  - `title` receives an 'Unknown' string
  - `IMDBRating` simply gets assigned to null
  - `genres` should receive a value that will work with our `CardBack` component's rendering method for genres. The screen should read: 'No Genre(s) Found'
  - `poster` should get the string `default`
2. pass the correct props to the correct back/front components
(**Note:** the `posterMap` already takes care of converting a string into the appropriate poster asset)

###### `CardFront`
1. the prop should be used to apply a background image. This can be done inline via: 
```js
style={{backgroundImage: `url(${prop})`}}
```

###### `CardBack`
1. render the genres (as comma separated) strings
2. render the title value
3. Finish writing the method `generateRatingElement`, which should do the following:
  - if the IMDBRating prop is null, return an `<h4>` with the contents 'No Rating Found'
  - otherwise, return `<img src={imgMapper[prop]} alt="" />` (using the correct prop)


#### Once Finished

`npm start` and make sure everything is functioning how you would like!


## Resources
- [React Default Prop Values](https://reactjs.org/docs/components-and-props.html#default-prop-values)

<p class='util--hide'>View <a href='https://learn.co/lessons/react-props-movie-lab'>Props Lab</a> on Learn.co and start learning to code for free.</p>

[lists-and-keys]: https://reactjs.org/docs/lists-and-keys.html
