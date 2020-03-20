import React, { Component } from 'react';
import classes from './Person.css';
import WithClasses from '../../../hoc/WithClasses';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <WithClasses classes={classes.Person}>
                <p onClick={this.props.click}>My name is {this.props.name} and age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </WithClasses>
        )
    }
}

export default Person;