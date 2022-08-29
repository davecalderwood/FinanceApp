import React from 'react';
import BudgetItem from './BudgetItem';

const BudgetIncomeList = (props) => {
    var totalVal = 0;
    var stringToFloat;
    const budgetIncomeItems = props.items?.map(item => {
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
        <div>
            {budgetIncomeItems}
        </div>
    );
}

export default BudgetIncomeList;