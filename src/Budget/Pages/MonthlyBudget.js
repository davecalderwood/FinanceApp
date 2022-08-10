import React from 'react';
import Budget from '../Components/Budget';
import MOCK_DATA from '../../MOCK_DATA.json'
import BudgetBuilder from '../Components/BudgetBuilder';

const MonthlyBudget = () => {
    return (
        <>
            <Budget items={MOCK_DATA} />

            <BudgetBuilder />
        </>
    );
}

export default MonthlyBudget;