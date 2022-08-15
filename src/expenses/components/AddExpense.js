import React, { useState } from 'react';
import Select from 'react-select';
import moment from 'moment';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Modal from '../../UI/Modal/Modal';
import { VALIDATOR_MIN, VALIDATOR_REQUIRE } from '../../shared/Utils/validators';
import useForm from '../../shared/Hooks/useForm';
import Localbase from 'localbase'

import classes from '../styles/AddExpense.module.scss';

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

const AddExpense = (props) => {
    const [formState, inputHandler] = useForm({
        amount: {
            value: '',
            isValid: false
        },
        date: {
            value: "",
            isValid: false
        },
        comments: {
            value: "",
            isValid: false
        }
    }, false);

    const id = Math.random();

    let db = new Localbase('db');

    const [selectedOption, setSelectedOption] = useState(null);

    const dropdownSelectHandler = selectedOption => {
        setSelectedOption(selectedOption);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        // Use Moment.js to format the date to the format that the rest of the site expects MM/DD/YYYY
        var formattedDate = moment(formState.inputs.date).format("MM/DD/YYYY");
        db.collection('expenses').add({
            id: id,
            Amount: formState.inputs.amount,
            Date: formattedDate,
            Category: selectedOption,
            Comments: formState.inputs.comments
        })
    }

    return (
        <Modal onClose={props.onClose}>
            <h2 className={classes.title}>Add Expense</h2>

            <form className={classes.expenseForm} onSubmit={formSubmitHandler}>
                <Input
                    id="amount"
                    element="input"
                    type="number"
                    label="Cost"
                    placeholder="Cost USD"
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(0)]}
                    onInput={inputHandler}
                    errorText="Please Enter a Valid Number" />

                <Input
                    id="date"
                    element="input"
                    type="date"
                    label="Date"
                    maxDate={new Date()}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid date."
                    onInput={inputHandler} />

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
                    rows={10}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please add a comment."
                    onInput={inputHandler} />

                <div className={classes.buttonBar}>
                    <Button type="button" onClick={props.onClose}>Close</Button>
                    <Button type="submit" disabled={!formState.isValid}>Submit</Button>
                </div>
            </form>

        </Modal>
    );
}

export default AddExpense;