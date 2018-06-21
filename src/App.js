import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Match} from 'react-router-dom';
import GamePage from './GamePage'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Game List</h1>
          </header>
          <p className="App-intro">
            <Link to="games">Game</Link>
          </p>

          <Route path="/games" component={GamePage} />
        </div>
      </Router>
    );
  }
}

export default App;
