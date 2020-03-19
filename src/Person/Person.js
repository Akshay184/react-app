import React from 'react';

const person = ( props ) => {
    return (
        <div>
            <p>My name is {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;