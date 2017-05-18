import React from 'react'

export class Header extends React.Component ::
  constructor (props) ::
    super(props)
  render() ::
    let sayHello = () => alert @ "Hello"
    return @ 
      <div > 
        <div className="row"> 
          <div className="four columns u-full-width">
            <code> this.init @ piledriver </code>
          </div>
          <div className="four columns u-full-width">
            <code> console.log @ "{this.props.input}" </code>
          </div>
          <div className="four columns u-full-width">
            <code> brain.map @ knowledge </code>
          </div>
        </div> 
        <div className="row"> 
          <div className="four columns u-full-width">'</div>
          <div className="center-aligned four columns u-full-width">
            <button onClick={sayHello} >click me</button>
          </div>
          <div className="four columns u-full-width">'</div>
        </div> 
      </div> 
