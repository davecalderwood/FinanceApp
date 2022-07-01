import React, { useState } from 'react';
import MOCK_DATA from '../../MOCK_DATA.json';
import MonthlyCost from './MonthlyCost';
import Select from 'react-select';

import classes from '../styles/SortedExpenses.module.scss';

const SortedExpenses = () => {
    const [selectedOption, setSelectedOption] = useState('2022');

    const dropdownSelectHandler = (selectedOption) => {
        setSelectedOption(selectedOption);
    };
    var monthsList = [
        { label: "Janurary", value: '01', totalExpenses: 0 },
        { label: "February", value: '02', totalExpenses: 0 },
        { label: "March", value: '03', totalExpenses: 0 },
        { label: "April", value: '04', totalExpenses: 0 },
        { label: "May", value: '05', totalExpenses: 0 },
        { label: "June", value: '06', totalExpenses: 0 },
        { label: "July", value: '07', totalExpenses: 0 },
        { label: "August", value: '08', totalExpenses: 0 },
        { label: "September", value: '09', totalExpenses: 0 },
        { label: "October", value: '10', totalExpenses: 0 },
        { label: "November", value: '11', totalExpenses: 0 },
        { label: "December", value: '12', totalExpenses: 0 },
    ]

    // Filter out expenses
    const expenses = MOCK_DATA.filter(i => i.Category !== 'Savings');
    // Parse data
    var data = JSON.parse(JSON.stringify(expenses));
    // Slice and compare year
    const dates = data.filter((d) => d.Date.slice(-4) === selectedOption.value);

    dates.forEach(i => {
        var expense = i.Amount;
        // From Date slice to get month
        var month = i.Date.slice(0, 2);
        // Find the month value that equals the sliced out month
        monthsList.find(m => m.value === month);

        for (let j = 0; j < monthsList.length; j++) {
            if (monthsList[j].value === month) {
                // If month value === current month in array then add expense to monthly total
                monthsList[j].totalExpenses += expense;
            }
        }
    });

    // pass props to MonthlyCost function
    const monthlyCost = monthsList.map(item => {
        return <MonthlyCost
            key={item.id}
            id={item.id}
            total={item.totalExpenses}
            label={item.label} />
    })

    var options = [...new Set(data.map(item => item.Date.slice(-4)))];
    var dropdownOptions = [];
    options.forEach(element => {
        dropdownOptions.push({ label: element, value: element });
    });
    dropdownOptions.sort((a, b) => a.value > b.value ? 1 : -1);

    return (
        <div className={classes.dropdownAndCards}>
            <div className={classes.dropdown}>
                <Select
                    id="categoryDropdown"
                    options={dropdownOptions}
                    onChange={dropdownSelectHandler}
                    defaultValue={selectedOption}
                    selected={selectedOption}
                    isSearchable={false}
                    placeholder="Filter by Year" />
            </div>

            <div className={classes.cards}>{monthlyCost}</div>
        </div>
    );
}

export default SortedExpenses;