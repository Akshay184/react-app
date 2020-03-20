import React from 'react';

const withClasses = (props) => {
    return <div className={props.classes}>{props.children}</div>
}

export default withClasses;