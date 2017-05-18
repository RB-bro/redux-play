import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
// CSS IMPORTS

import styles from './styles/main.styl'
import skeleton from './styles/skeleton.css'
import normalize from './styles/normalize.css'

// IMPORTS
//
import {Header, Form, Counter} from './components'
import {counter} from './reducers'

const store = createStore(counter)
let root = document.getElementById @ "app"

const render = () =>
  ReactDOM.render @
    <Counter 
      value={store.getState()}
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />
    , root

render()
store.subscribe(render)

/*

class Application extends React.Component ::
  constructor (props) ::
    super(props)
  render() ::
    let sayHello = () => alert @ "Hello"
    return ( 
        <div className="container">
           <div className="row">
            <Header input="New app!"/>
          </div>
          <div className="row">
            <Form />
          </div>
          <Counter/>
          //{/* Use this syntax for comments (you'll need to add an asterisk) /}
          //{/* In JSX!!!!                   (you'll need to add an asterisk) /}

        </div>)


//ReactDOM.render @ <Application />, 
//
*/
