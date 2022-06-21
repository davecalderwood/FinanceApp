import React from 'react';

import classes from './Button.module.scss';

const Button = (props) => {
    return (
        <button 
            className={classes.button} 
            onClick={props.onClick}
            type={props.type}
            disabled={props.disabled}>
            <span>{props.children}</span>
        </button>
    );
}
 
export default Button;