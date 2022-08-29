import React, { useState } from 'react';
import Select from 'react-select';
import moment from 'moment';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Modal from '../../UI/Modal/Modal';
import { VALIDATOR_MIN, VALIDATOR_REQUIRE } from '../../shared/Utils/validators';
import useForm from '../../shared/Hooks/useForm';
import { db, LIST_TITLES } from '../../shared/LocalBase/localbase';

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

    const [selectedOption, setSelectedOption] = useState(null);

    const dropdownSelectHandler = selectedOption => {
        setSelectedOption(selectedOption);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        // Use Moment.js to format the date to the format that the rest of the site expects MM/DD/YYYY
        var formattedDate = moment(formState.inputs.date.value).format("MM/DD/YYYY");
        // let db = new Localbase('db'); -> db.collection('expenses') will crete a new indexeddb db or will update the existing one
        // .add will create a new one if none match the name in the collection and will add to the exisiting if it already exists
        // Describe the data object you want to send to indexeddb

        db.collection(LIST_TITLES.expenses).add({
            id: id,
            Amount: formState.inputs.amount,
            Date: formattedDate,
            Category: selectedOption,
            Comments: formState.inputs.comments
        }).then(() => {
            props.onClose()
        });
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