import React, { useEffect, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // We can sent http request from here...
    }, [props.persons]);
    // will render when props.person changes
    // for one time only pass [] it will never change

    const authContext = useContext(AuthContext);

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.personsLength < 3) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength < 2) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass}
                onClick={props.clicked}>Switch Names</button>
                <button onClick={authContext.login}>Log in</button>
        </div>
    );
}

export default React.memo(cockpit);