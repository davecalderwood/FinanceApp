import React from 'react';
import BudgetItem from './BudgetItem';

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
        <div>
            {budgetExpenseItems}
        </div>
    );
}

export default BudgetExpenseList;