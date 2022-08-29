import React, { useState, useEffect } from 'react';
import ExpenseList from '../components/ExpenseList';
import Localbase from 'localbase'

import MOCK_DATA from '../../MOCK_DATA.json'

// This is the Expenses page, here I want to show that react is built on components that you can put together
// Here all there is, is the List of Expenses, no logic will be here as I want to do that inside the list component

// This shows prop drilling - the data will be called items -> 
// then in the ExpenseList I can take props.items to map or filter out anything I need
// ExpenseList will map out the expenses and pass that to the ExpenseItem component

const Expenses = (props) => {
    const [expenseData, setExpenseData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    let db = new Localbase('db');

    useEffect(() => {
        db.collection('expenses').get().then(expenses => {
            setExpenseData(expenses);
            setIsLoading(false);
        });
    }, []);

    var expensesData;
    if (isLoading) {
        expensesData = <p>Loading...</p>
    }
    else if (!isLoading) {
        expensesData = <ExpenseList items={expenseData} />
    }




    return (
        <div>
            {expensesData}
            {/* <ExpenseList items={expenseData} /> */}
        </div>
    );
}

export default Expenses;