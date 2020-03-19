import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    person: [
      { id: 'djfdf1', name: "Akshay", age: 19 },
      { id: 'djfdf2', name: "Aishwarya", age: 22 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log("Handler called");
  //   // Don't do this : this.state.person[0].name = "Akshay Agarwal";
  //   this.setState({
  //     person:
  //       [
  //         { name: newName, age: 20 },
  //         { name: "Aishwarya", age: 22 }
  //       ]
  //   });
  // };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((person) => {
      return person.id === id;
    })

    const person = {
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({ person: persons });
  }

  deletePersonHandler = (personIndex) => {
    const person = this.state.person;
    // const person = [...this.state.person];
    person.splice(personIndex, 1);
    this.setState({ person: person })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursoe: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.nameChangeHandler(event, person.id)} />
            )
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.person.length < 3) {
      classes.push('red');
    }
    if (this.state.person.length < 2) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Switch Names</button>
        {persons}
      </div>
    );
    // above statement can also be written as below
    // return React.createElement('div', { className : 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
