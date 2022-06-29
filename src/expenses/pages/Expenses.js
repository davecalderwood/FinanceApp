import React from 'react';
import ExpenseList from '../components/ExpenseList';

import MOCK_DATA from '../../MOCK_DATA.json'

// This is the Expenses page, here I want to show that react is built on components that you can put together
// Here all there is, is the List of Expenses, no logic will be here as I want to do that inside the list component

// This shows prop drilling - the data will be called items -> 
// then in the ExpenseList I can take props.items to map or filter out anything I need
// ExpenseList will map out the expenses and pass that to the ExpenseItem component

const Expenses = (props) => {

    return (
        <div>
            <ExpenseList items={MOCK_DATA} />
        </div>
    );
}

export default Expenses;