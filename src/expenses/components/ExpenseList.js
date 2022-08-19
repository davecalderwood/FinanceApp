import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import classes from '../styles/ExpenseList.module.scss';
import ExpenseItem from './ExpenseItem';

import { FaInfoCircle } from "react-icons/fa";
import Tooltip from '../../UI/Tooltip/Tooltip';

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
    // eslint-disable-next-line array-callback-return
    const shownExpenses = sortedExpenses.map(expense => {
        if (expense.Category !== null) {
            if (selectedOption.value === 'ALL' || selectedOption === undefined || selectedOption === null) {
                return <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    category={expense.Category.value}
                    date={expense.Date}
                    amount={expense.Amount.value}
                    comments={expense.Comments.value} />
            }
            if (expense.Date.slice(-4) === selectedOption.value) {
                return <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    category={expense.Category.value}
                    date={expense.Date}
                    amount={expense.Amount.value}
                    comments={expense.Comments.value} />
            }
        }
    });

    const tooltipText = <div>
        <p>The expense page is currently using indexeddb, please add an expense and refresh the page. </p>
        <p>Right now the other pages (Home & Savings) are still using the mock data to show how it works with lots of data.</p>
        <p>Please refer to the Expense.js, ExpenseList.js, and AddExpense.js to see how the indexeddb is set up.</p>
    </div>

    return (
        <div>
            <div className={classes.selectAndTooltip}>
                <Select
                    id="categoryDropdown"
                    options={dropdownOptions}
                    onChange={dropdownSelectHandler}
                    defaultValue={selectedOption}
                    selected={selectedOption}
                    isSearchable={false}
                    className={classes.dropdownClass}
                    placeholder="Filter by Year" />

                <div className={classes.centerText}>
                    <Tooltip content={tooltipText} direction="right">
                        <FaInfoCircle fontSize={30} />
                    </Tooltip>
                </div>
            </div>


            <ul className={classes.expenseList}>
                {shownExpenses}
            </ul>
        </div>
    );
}

export default ExpenseList;