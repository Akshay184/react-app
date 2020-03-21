import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    static contextType = AuthContext;

    componentDidMount() {
        console.log('[Person.js] componentDidMount');
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux classes={classes.Person}>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}
                <p onClick={this.props.click}>My name is {this.props.name} and age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    change: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default withClass(Person, classes.Person);