import React from 'react';

import classes from '../Styles/BudgetExpenseItem.module.scss';

const BudgetItem = (props) => {
    return (
        <li className={classes.list}>
            <p>{props.title}</p>
            <p>{props.amount}</p>
        </li>
    );
}

export default BudgetItem;