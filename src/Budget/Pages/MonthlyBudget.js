import React from 'react';
import Budget from '../Components/Budget';
import MOCK_DATA from '../../MOCK_DATA.json'

const MonthlyBudget = () => {
    return (
        <>
            <Budget items={MOCK_DATA} />
        </>
    );
}

export default MonthlyBudget;