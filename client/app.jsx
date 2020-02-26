/* eslint-disable require-jsdoc */
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <h1 className="title">React, Wepack, Bulma Boilerplate</h1>
        <p className="subtitle">
          Bulma, the modern CSS framewrok based on Flexbox, see setup <a href="https://bulma.io/documentation/customize/with-webpack/">here</a>.
        </p>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="input"></input>
          </div>
        </div>

        <div className="field">
          <p className="control">
            <span className="select">
              <select>
                <option>
                  Select dropdown
                </option>
              </select>
            </span>
          </p>
        </div>

        <div className="buttons">
          <button className="button is-primary">Primary</button>
          <button className="button is-link">Link</button>
        </div>
      </div>
    );
  }
}

export default App;

