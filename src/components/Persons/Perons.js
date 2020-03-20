import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, Snapshot) {
        console.log('[Perons.js] componentDidUpdate');
        console.log(Snapshot);
    }

    render() {
        console.log('[Persons.js] rendering');
        return this.props.person.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    change={(event) => this.props.changed(event, person.id)} />
            )
        })
    }
}

export default Persons;