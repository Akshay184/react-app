import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Perons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    person: [
      { id: 'djfdf1', name: "Akshay", age: 19 },
      { id: 'djfdf2', name: "Aishwarya", age: 22 },
      { id: 'dfjsh', name: "Akshat", age: 22 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] component did Mount');
  }

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
    console.log('[App.js] render'); 
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            person={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />

        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.person}
          clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );
    // above statement can also be written as below
    // return React.createElement('div', { className : 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
