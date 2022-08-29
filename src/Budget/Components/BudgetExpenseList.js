import React, { useState } from 'react';
import BudgetItem from './BudgetItem';

import classes from '../Styles/BudgetBuilder.module.scss'

const BudgetExpenseList = (props) => {
    var totalVal = 0;
    var stringToFloat;
    const budgetExpenseItems = props.items?.map(item => {
        stringToFloat = parseFloat(item.Amount);
        totalVal += stringToFloat;

        return <BudgetItem
            key={item.id}
            id={item.id}
            title={item.Title}
            amount={item.Amount}
            category={item.Category} />
    })

    props.setTotalValueFromChild(totalVal);

    return (
        <div className={classes.budgetList}>
            {budgetExpenseItems}
        </div>
    );
}

export default BudgetExpenseList;