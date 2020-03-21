import React, { PureComponent } from 'react';
import Person from './Person/Person';


class Persons extends PureComponent  {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // As we are doing the check for all properties of props we 
    //     // can use PureComponents which will automatically implement it
    //     // in the background
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (
    //         nextProps.person !== this.props.person ||
    //         nextProps.clicked !== this.props.clicked ||
    //         nextProps.changed !== this.props.changed
    //     ) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, Snapshot) {
        console.log('[Perons.js] componentDidUpdate');
        console.log(Snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
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
                    change={(event) => this.props.changed(event, person.id)}
                    isAuth={this.props.isAuthenticated} />
            )
        })
    }
}

export default Persons;