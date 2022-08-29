import React from 'react';
import BudgetItem from './BudgetItem';

import classes from '../Styles/BudgetBuilder.module.scss'

const BudgetExpenseList = (props) => {

    const budgetExpenseItems = props.items?.map(item => {
        return <BudgetItem
            key={item.id}
            id={item.id}
            title={item.Title}
            amount={item.Amount}
            category={item.Category} />

    })

    return (
        <div className={classes.budgetList}>
            {budgetExpenseItems}
        </div>
    );
}

export default BudgetExpenseList;