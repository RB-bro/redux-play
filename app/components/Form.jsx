import React from 'react'

export class Form extends React.Component ::
  constructor (props) ::
    super(props)
  render() ::
    return @
      <form>
        <div className="row">
          <div className="six columns">
            <label for="recipeTitle">Recipe title</label>
            <input className="u-full-width" type="title" placeholder="nutz" id="recipeTitle"/>
          </div>

          <div className="six columns">
            <label for="exampleRecipientInput">Reason for contacting</label>
            <select className="u-full-width" id="exampleRecipientInput">
              <option value="Option 1">Questions</option>
              <option value="Option 2">Admiration</option>
              <option value="Option 3">Can I get your number?</option>
            </select>
          </div>
          <label for="exampleMessage">Message</label>
          <textarea className="u-full-width" placeholder="Hi Dave …" id="exampleMessage"></textarea>
          <label className="example-send-yourself-copy">
            <input type="checkbox"/>
            <span className="label-body">Send a copy to yourself</span>
          </label>
          <input className="button-primary" type="submit" value="Submit"/>
        </div>
  
      </form>
