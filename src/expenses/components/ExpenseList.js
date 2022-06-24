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

    const onlyExpenses = props.items.filter(i => i.Category !== 'Savings');
    let sortedExpenses = onlyExpenses.sort((a, b) => new Date(...a.Date.split('/').reverse()) - new Date(...b.Date.split('/').reverse()));

    return (
        <ul className={classes.expenseList}>
            {sortedExpenses.map(expense => 
                <ExpenseItem 
                    key={expense.id}
                    id={expense.id}
                    category={expense.Category}
                    date={expense.Date}
                    amount={expense.Amount}
                    comments={expense.Comments} />
            )}
        </ul>
    );
}
 
export default ExpenseList;