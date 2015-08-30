
Use iojs:

```
nvm use iojs
```

Get webpack to watch:

```
webpack --watch
```

Run webpack server:

```
webpack-dev-server1
```

A React component is View + View logic. HTML + javascript. Atomise often.

> Components = State Machines

? Wire the component to a state. React updates DOM efficiently

tip: Don't fuck with component nodes 

# Events

* Synthetic events: write inline, delegated top w/single listener
* Autobinding
    - initially instance created: `React.createClass`
    - Keep it so when using partials: `handler.bind(null, 'arg');`
    - Note partials change arguments:
        - before: `function (event) {`
        - bound 1: `function (argument1, event) {`
        - bound 2: `function (argument1, argument2, event) {`
    - Interesting, re-bound due to re-render? **NOPE `setState()` = rerender!**
        `{this.giveFuck.bind(null, !this.state.fuckGiven)}`

# React props

## Intro

* Immutable config from parent
* Set via attributes

## Proptypes

* A typed interface (in the C++ sense)
* Allows for documentation / dev time validation
* Only dev mode

## `ref`

* Allows you to tag anything in `render()`, and then easily refer to it in configObj
* Alt to mess of classes etc for mapping
* Component dom directory

## `key`

* Unique identifier for components returned from `map` to help diffing
* * see: http://facebook.github.io/react/docs/reconciliation.html#keys


# Nesting

Yay

# Mix-ins

Yuck

>There is no standard and universal way to define mixins in JavaScript. In fact, several features to support mixins were dropped from ES6 today. There are a lot of libraries with different semantics. We think that there should be one way of defining mixins that you can use for any JavaScript class. React just making another doesn’t help that effort.

Wow. Cool. React is so ballsy with its idiomatic-javascript-or-the-highway attitude.

I'm not sure I hate DSLs as much as some of these guys but, in this post-ES5 age it is exciting.

I probably think DSL's are great, but should never be over-invested in. You should have it lite enough, that you can just drop it and go back to idiomatic once its done. _Perhaps_ a good DSL rule of thumb is: Specific problem domains yes, frameworks no.

# Higher order components

https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775

Seems nice, with a teeny bit of convention you can "compose" in a pseudo-inheritance kind of way.

https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750

https://github.com/acdlite/flummox/blob/v3.5.1/docs/docs/guides/why-flux-component-is-better-than-flux-mixin.md

## JSX XML

* `className` not `class`
* `checked` not `checked="true"`  (`this.checked == true`)


## React State

* only components can mutate their state
* Mutation = re-render
* State = internal decisions only = not should/need published
* *Never directly edit this.state use `setState()`*
* *Antipattern (source of truth)* initial state from props, better to "compute on the fly":

```
  getInitialState: function() {
    // naming it initialX clearly indicates that the only purpose
    // of the passed down prop is to initialize something internally
    return {count: this.props.initialCount};
  },
```

# React Lifecycle events hooks

https://facebook.github.io/react/docs/component-specs.html

## Updating

### componentDidMount

As soon as initial render:

* Children `componentDidMount first`
* **Async ops here**

### componentWillReceiveProps

When component receives new props:

* not initial render
* react w/`setState()` to property change pre-render

### shouldComponentUpdate


# Essential methods

## render

? what to show

## getInitialState

? Get data for first render

## getDefaultProps

? When default config

Props before overwritten by parent


## propTypes

? How you can configure

## mixins

? component parts

## componentDidMount

* As soon as initial render
* Children `componentDidMount first`
* **Async ops here**

## shouldComponentUpdate

? Data based predicate determining if the component needs re-rendering

# Next steps

http://facebook.github.io/react/docs/thinking-in-react.html
https://github.com/kriasoft/react-decorators