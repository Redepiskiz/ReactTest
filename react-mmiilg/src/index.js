import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import TestPuccioso from './testPuccioso.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Show from './Show.js';
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  render() {
    return (
      <div>
        <p>
          Scegli il tuo locale preferito :)
        </p>
        <TestPuccioso />
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/show/' component={Show} />
      </div>
  </Router>,
  document.getElementById('root')
);

