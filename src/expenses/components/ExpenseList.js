import React from 'react';

import classes from '../styles/ExpenseList.module.css';
import ExpenseItem from './ExpenseItem';

// output a list of expenses
const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <div className={classes.center}>
            <h2>No Expenses Found</h2>
        </div>
    }

    return (
        <ul className={classes.expenseList}>
            {props.items.map(expense => 
                <ExpenseItem 
                    key={expense.id}
                    id={expense.id}
                    category={expense.category}
                    date={expense.date}
                    amount={expense.amount}
                    comments={expense.comments} />
            )}
        </ul>
    );
}
 
export default ExpenseList;