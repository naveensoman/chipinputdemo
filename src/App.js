import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChipInput from './ChipInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ChipInput />
      </div>
    );
  }
}

export default App;
