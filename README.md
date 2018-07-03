# React Props Movie Lab


## Objectives

1. Practice passing props from parent components to children
2. Practice using default props
3. Practice jumping into existing code and making the necessary changes


## Introduction

This is a barebones React application used to showcase the nine greatest movies
of all time. Your job is to update it so that it both passes props from parent
to children components correctly. In addition, you will implement default props
so that 'bad/missing data' is properly handled - preventing our user interface
from blowing up visitors computers with errors.

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

`MovieCard` components (which showcase a single movie each) receive their
individual movie information from `MovieShowcase` as four props: `title`,
`IMDBRating`, `genres`, and `posterURL`. Following, the props are passed again
to either `CardFront` or `CardBack`.

In our movie data set, we occasionally have missing data. This is where
`defaultProps` come in and really pull our buns out of the fire. We will be
handling all of our `defaultProp`'ing in `MovieCard` before they are passed down
the chain to the front and back components.


## Deliverables

###### `MovieShowcase`
1. `.map` over the imported movie data array and render `MovieCard`s for each element
2. Don't forget to pass _all 4_ props

## Resources
- [React Default Prop Values](https://reactjs.org/docs/components-and-props.html#default-prop-values)

<p class='util--hide'>View <a href='https://learn.co/lessons/react-props-movie-lab'>Props Lab</a> on Learn.co and start learning to code for free.</p>
