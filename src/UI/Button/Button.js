import React from 'react';

import classes from './Button.module.scss';

const Button = (props) => {

    // Swap out styles for if it is a delete button or regular button
    const classAlt = props.type === 'delete' ? classes.deleteButton : classes.button;

    return (
        <button
            className={classAlt}
            onClick={props.onClick}
            type={props.type}
            disabled={props.disabled}>
            <span>{props.children}</span>
        </button>
    );
}

export default Button;