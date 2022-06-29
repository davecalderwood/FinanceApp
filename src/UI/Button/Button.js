import React from 'react';

import classes from './Button.module.scss';

const Button = (props) => {

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