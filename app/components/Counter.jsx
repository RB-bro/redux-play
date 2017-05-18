import React from 'react'
import { Component } from 'react'


export class Counter extends Component ::
    constructor(props) ::
      super(props)

    render() ::
      const {value, onIncrement, onDecrement } = this.props
      return @ 
        <div> 
          <button onClick={onIncrement}>+</button> 
          {''}  {value} {''}
          <button onClick={onDecrement}>-</button> 
        </div>
