import React from 'react';
import MOCK_DATA from '../../MOCK_DATA.json';
import SmallCard from '../../UI/Card/CardSmall';

import classes from '../styles/SortedExpenses.module.scss';

const SortedExpenses = () => {
    var monthsList = [
        {label: "Janurary", value: '01', totalExpenses: 0},
        {label: "February", value: '02', totalExpenses: 0},
        {label: "March", value: '03', totalExpenses: 0},
        {label: "April", value: '04', totalExpenses: 0},
        {label: "May", value: '05', totalExpenses: 0},
        {label: "June", value: '06', totalExpenses: 0},
        {label: "July", value: '07', totalExpenses: 0},
        {label: "August", value: '08', totalExpenses: 0},
        {label: "September", value: '09', totalExpenses: 0},
        {label: "October", value: '10', totalExpenses: 0},
        {label: "November", value: '11', totalExpenses: 0},
        {label: "December", value: '12', totalExpenses: 0},
    ]
    
    const expenses = MOCK_DATA.filter(i => i.Category !== 'Savings');
    let sortedExpenses = expenses.sort((a, b) => new Date(...a.Date.split('/').reverse()) - new Date(...b.Date.split('/').reverse()));
    var data = JSON.parse(JSON.stringify(sortedExpenses));
    const dates = data.filter((d) => d.Date.slice(-4) === new Date().getFullYear().toString());

    dates.forEach(i => {
        var expense = i.Amount;
        var month = i.Date.slice(0, 2);
        monthsList.find(m => m.value === month);

        for (let j = 0; j < monthsList.length; j++) {
            if (monthsList[j].value === month) {
                monthsList[j].totalExpenses += expense;
            }
        }
    });

    for (let j = 0; j < monthsList.length; j++) {

        console.log(monthsList[j].label, monthsList[j].totalExpenses);
    }

    return (
        <>
            {monthsList.map(i => {
                return <SmallCard>
                    <div className={classes.data}>
                        {i.label}
                        {i.totalExpenses}
                    </div>
                </SmallCard>
            })}
        </>
    );
}
 
export default SortedExpenses;