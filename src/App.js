import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      { name: "Akshay", age: 19 },
      { name: "Aishwarya", age: 22 }
    ],
    otherState : 'Some other value'
  }

  switchnameHandler = () => {
    // console.log("Handler called");
    // Don't do this : this.state.person[0].name = "Akshay Agarwal";
    this.setState({
      person:
        [
          { name: "Akshayyyy", age: 20 },
          { name: "Aish", age: 22 }
        ]
    }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>This is rally working!</p>
        <button onClick={this.switchnameHandler}>Switch Names</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} >Hobbies : Corona</Person>
      </div>
    );
    // above statement can also be written as below
    // return React.createElement('div', { className : 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
