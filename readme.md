
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

Q. Lifecycle event hooks

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

## componentWillMount

? the required config is known

## shouldComponentUpdate

? Data based predicate determining if the component needs re-rendering

