import React from 'react';
import BudgetItem from './BudgetItem';

const BudgetIncomeList = (props) => {

    const budgetIncomeItems = props.items?.map(item => {
        return <BudgetItem
            key={item.id}
            id={item.id}
            title={item.Title}
            amount={item.Amount}
            category={item.Category} />
    })

    return (
        <div>
            {budgetIncomeItems}
        </div>
    );
}

export default BudgetIncomeList;