import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterListContainer from './CounterListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Counter</h2>
        </div>
        <CounterListContainer />
      </div>
    );
  }
}

export default App;
