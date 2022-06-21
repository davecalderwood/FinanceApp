import React from 'react';
import ExpenseList from '../components/ExpenseList';

const Expenses = (props) => {
    const USERS = [
        {id: '1', amount: '100', category: 'Travel', date: '01/30/2022', comments: 'Comment 1'},
        {id: '2', amount: '30', category: 'Groceries', date: '02/15/2022', comments: 'Comment 2'},
        {id: '3', amount: '45', category: 'Misc', date: '02/17/2022', comments: 'Comment 3'},
        {id: '4', amount: '71', category: 'Savings', date: '02/28/2022', comments: 'Comment 4'},
        {id: '5', amount: '29', category: 'Gas', date: '03/02/2022', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    ];

    return (
        <>
            <ExpenseList items={USERS} />
        </>
    );
}
 
export default Expenses;