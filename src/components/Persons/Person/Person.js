import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/aux';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.click}>My name is {this.props.name} and age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </Aux>
        )
    }
}

export default Person;