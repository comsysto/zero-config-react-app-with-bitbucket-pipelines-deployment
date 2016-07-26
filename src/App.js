import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import deployInfo from './deploy-info';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <hr />
          <div>branch: {deployInfo.branch}</div>
          <div>commit: {deployInfo.commit}</div>
          <div>builtTime: {deployInfo.buildTime}</div>
        </p>
      </div>
    );
  }
}

export default App;
