import React from 'react';
import ExpenseList from '../components/ExpenseList';

import MOCK_DATA from '../../MOCK_DATA.json'

// import classes from '../styles/Expense.module.scss';

const Expenses = (props) => {

    return (
        <div>
            <ExpenseList items={MOCK_DATA} />
        </div>
    );
}
 
export default Expenses;