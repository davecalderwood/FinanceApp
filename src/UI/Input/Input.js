import React from 'react';

import classes from './Input.module.scss';

const Input = (props) => {
    const element = props.element === 'input' ? 
        <input 
            id={props.id} 
            type={props.type}
            placeholder={props.placeholder} /> : 
        <textarea 
            id={props.id} 
            rows={props.rows || 3}
            type={props.type}
            placeholder={props.placeholder} />;


    return (
        <div className={classes.formControl}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    );
}
 
export default Input;