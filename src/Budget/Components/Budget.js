import React from 'react';
import moment from 'moment';
import BudgetItems from './BudgetItems';

const Budget = (props) => {

    // Get current weekly data from Sunday-Saturday
    var currentDate = moment();
    var weekStart = currentDate.clone().startOf('week');
    var days = [];
    for (var i = 0; i <= 6; i++) {
        days.push(moment(weekStart).add(i, 'days').format("MM/DD/YYYY"));
    }

    const weeklyData = props.items.filter(i => days.includes(i.Date));
    var budgetData = JSON.parse(JSON.stringify(weeklyData));

    const budgetItems = budgetData.map(expense => {
        return <BudgetItems
            key={expense.id}
            id={expense.id}
            category={expense.Category}
            date={expense.Date}
            amount={expense.Amount}
            comments={expense.Comments} />
    })



    return (
        <>
            <p>Weekly Budget</p>

            {budgetItems}
        </>
    );
}

export default Budget;