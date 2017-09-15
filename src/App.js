import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterListContainer from './CounterListContainer';
import CounterAppContainer from './CounterAppContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src="https://i.pinimg.com/736x/2c/c7/bd/2cc7bd2bed225a6a3b0c1fc8a7162ecd--vampire-love-my-favorite-things.jpg"
            className="App-logo"
            alt="logo"
          />
          <h2>Welcome to the Counter</h2>
        </div>
        <CounterAppContainer />
        <CounterListContainer />
      </div>
    );
  }
}

export default App;
