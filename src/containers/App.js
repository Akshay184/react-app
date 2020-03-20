import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


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
      curser: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}><Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                change={(event) => this.nameChangeHandler(event, person.id)} />
              </ErrorBoundary>
            )
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.person.length < 3) {
      classes.push('red');
    }
    if (this.state.person.length < 2) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I am a react App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonHandler}>Switch Names</button>
          {persons}
        </div>
      </StyleRoot>
    );
    // above statement can also be written as below
    // return React.createElement('div', { className : 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default Radium(App);
