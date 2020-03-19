import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <h1>Hi, I am a react App</h1>
        <p>This is rally working!</p>
        <Person name = "Akshay" age = "19" /> 
        <Person name = "Aishwarya" age = "22" />
      </div>
    );
    // above statement can also be written as below
    // return React.createElement('div', { className : 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
