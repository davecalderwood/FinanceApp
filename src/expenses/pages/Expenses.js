import React from 'react';
import ExpenseList from '../components/ExpenseList';

import MOCK_DATA from '../../MOCK_DATA.json'

const Expenses = (props) => {

    return (
        <>
            <ExpenseList items={MOCK_DATA} />
        </>
    );
}
 
export default Expenses;