import React from 'react';
import BudgetBuilder from '../Components/BudgetBuilder';
import localstorage from '../../localstorage.json'

const MonthlyBudget = () => {
    localStorage.setItem('testObject', JSON.stringify(localstorage));
    var retrievedObject = JSON.parse(localStorage.getItem('testObject'));

    var test = retrievedObject.map(i => {
        return i.ItemComponent
    });

    return (
        <>
            <BudgetBuilder />
            {/* {test} */}
        </>
    );
}

export default MonthlyBudget;