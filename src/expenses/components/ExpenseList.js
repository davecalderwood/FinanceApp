import React, { useState } from 'react';
import Select from 'react-select';

import classes from '../styles/ExpenseList.module.scss';
import ExpenseItem from './ExpenseItem';

// Here I want to render a list of individual expenses, the ExpenseItem will house all of the items related to the individual expense
// This component is only interested in showing the list

// output a list of expenses
const ExpenseList = (props) => {
    const [selectedOption, setSelectedOption] = useState('ALL');

    const dropdownSelectHandler = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    if (props.items.length === 0) {
        return <div className={classes.center}>
            <h2>No Expenses Found</h2>
        </div>
    }

    // Filter out Savings; Those are not important for Expenses page
    const onlyExpenses = props.items.filter(i => i.Category !== 'Savings' && i.Category !== 'Income');
    // Sort Expenses by date
    let sortedExpenses = onlyExpenses.sort((a, b) => new Date(...a.Date.split('/').reverse()) - new Date(...b.Date.split('/').reverse()));
    // parse JSON
    var data = JSON.parse(JSON.stringify(onlyExpenses));
    // Gather unique list of years from array of dates
    var options = [...new Set(data.map(item => item.Date.slice(-4)))];
    // Start with ALL as an option
    var dropdownOptions = [{ label: 'ALL', value: 'ALL' }];
    // Push each unique year onto dropdownOptions
    options.forEach(element => {
        dropdownOptions.push({ label: element, value: element });
    });

    // If All is selected it will return all of the items that are not savings
    // If not then it will get the last 4 characters from the date field (ie. the year) and find all matching items
    const shownExpenses = sortedExpenses.map(expense => {
        if (selectedOption.value === 'ALL' || selectedOption === undefined || selectedOption === null) {
            return <ExpenseItem
                key={expense.id}
                id={expense.id}
                category={expense.Category}
                date={expense.Date}
                amount={expense.Amount}
                comments={expense.Comments} />
        }
        if (expense.Date.slice(-4) === selectedOption.value) {
            return <ExpenseItem
                key={expense.id}
                id={expense.id}
                category={expense.Category}
                date={expense.Date}
                amount={expense.Amount}
                comments={expense.Comments} />
        }
        return;
    });

    return (
        <div>
            <Select
                id="categoryDropdown"
                options={dropdownOptions}
                onChange={dropdownSelectHandler}
                defaultValue={selectedOption}
                selected={selectedOption}
                isSearchable={false}
                className={classes.dropdownClass}
                placeholder="Filter by Year" />

            <ul className={classes.expenseList}>
                {shownExpenses}
            </ul>
        </div>
    );
}

export default ExpenseList;