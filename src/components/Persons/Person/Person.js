import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className="Person">
                <p onClick={this.props.click}>My name is {this.props.name} and age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        )
    }
}

export default Person;