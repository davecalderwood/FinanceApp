import React from 'react';
import classes from './HeaderButton.module.css';

const HeaderButton = (props) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span>Add Expense</span>
        </button>
    );
}
 
export default HeaderButton;