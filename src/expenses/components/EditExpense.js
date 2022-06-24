import React, { useState } from 'react';
import Select from 'react-select';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

import { VALIDATOR_MIN, VALIDATOR_REQUIRE } from '../../shared/Utils/validators';
import classes from '../styles/AddExpense.module.scss';

const EXPENSES = [
    {id: '1', amount: '100', category: 'Travel', date: '01/30/2022', comments: 'Comment 1'},
    {id: '2', amount: '30', category: 'Groceries', date: '02/15/2022', comments: 'Comment 2'},
    {id: '3', amount: '45', category: 'Misc', date: '02/17/2022', comments: 'Comment 3'},
    {id: '4', amount: '71', category: 'Savings', date: '02/28/2022', comments: 'Comment 4'},
    {id: '5', amount: '29', category: 'Gas', date: '03/02/2022', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
];


const colorStyles = {
    control: styles => ({ ...styles, backgroundColor: '#f8f8f8' })
}

const options = [
    { value: 'Gas', label: 'Gas' },
    { value: 'Groceries', label: 'Groceries' },
    { value: 'Travel', label: 'Travel' },
    { value: 'Savings', label: 'Savings' },
    { value: 'Misc', label: 'Misc' }
];

const EditExpense = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);;

    const dropdownSelectHandler = selectedOption => {
        setSelectedOption(selectedOption);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
    }

    const expenseToUpdate = EXPENSES.find(i => i.id === props.id);

    if (!expenseToUpdate) {
        return (
            <div className={classes.center}>
                <h3>Could not find Expense</h3>
            </div>
        );
    }

    return (
        <Modal onClose={props.onClose}>
            <h2 className={classes.title}>Edit Expense</h2>
            <form className={classes.expenseForm} onSubmit={formSubmitHandler}>                    
                <Input 
                    id="amount"
                    element="input" 
                    type="number" 
                    label="Cost" 
                    placeholder="Cost USD"
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(0)]}
                    onInput={() => {}}
                    value={expenseToUpdate.amount}
                    errorText="Please Enter a Valid Number" />
                    
                <Input
                    id="date"
                    element="input"
                    type="date"
                    label="Date"
                    maxDate={new Date()}
                    validators={[VALIDATOR_REQUIRE()]}
                    value={expenseToUpdate.date}
                    errorText="Please enter a valid date."
                    onInput={() => {}} />

                <div className={classes.dropdown}>
                    <label><strong>Category</strong></label>
                    <Select 
                        id="categoryDropdown"
                        options={options} 
                        onChange={dropdownSelectHandler} 
                        defaultValue={selectedOption}
                        selected={selectedOption}
                        isSearchable={false}
                        className={classes.dropdownClass}
                        styles={colorStyles}
                        placeholder="Select an option" />
                </div>

                <Input 
                    id="comments"
                    element="textarea" 
                    label="Comments" 
                    placeholder="Comments"
                    rows={20}
                    value={expenseToUpdate.comments}
                    onInput={() => {}} />

                <div className={classes.buttonBar}>
                    <Button type="button" onClick={props.onClose}>Close</Button>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Modal>
    );
}
 
export default EditExpense;