import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import useForm from '../../shared/Hooks/useForm'
import moment from 'moment'
import { db, LIST_TITLES } from '../../shared/LocalBase/localbase';

import { VALIDATOR_MIN, VALIDATOR_REQUIRE } from '../../shared/Utils/validators';
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

const EditExpense = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const dropdownSelectHandler = selectedOption => {

        setSelectedOption(selectedOption);
    };

    const [formState, inputHandler, setFormData] = useForm({
        amount: {
            value: '',
            isValid: false
        },
        date: {
            value: '',
            isValid: false
        },
        comments: {
            value: '',
            isValid: false
        },
    }, false);

    const expenseToUpdate = props;

    useEffect(() => {
        setFormData({
            amount: {
                value: expenseToUpdate.amount,
                isValid: false
            },
            date: {
                value: expenseToUpdate.date,
                isValid: false
            },
            comments: {
                value: expenseToUpdate.comments,
                isValid: false
            },
        }, true);
        setIsLoading(false);
    }, [setFormData, expenseToUpdate]);

    if (!expenseToUpdate) {
        return (
            <div className={classes.center}>
                <h3>Could not find Expense</h3>
            </div>
        );
    }
    const updateExpenseHandler = event => {
        event.preventDefault();
        var formattedDate = moment(formState.inputs.date).format("MM/DD/YYYY");
        // Get the id from props and pass that into the .doc({}) object
        // Describe all the fields that might need to be updated with new values
        db.collection(LIST_TITLES.expenses).doc({ id: props.id }).set({
            id: props.id,
            Amount: formState.inputs.amount,
            Date: formattedDate,
            Category: selectedOption,
            Comments: formState.inputs.comments
        }).then(() => {
            props.onClose()
        });
    }

    if (isLoading) {
        return (
            <div className={classes.center}>
                <h3>Loading...</h3>
            </div>
        );
    }

    return (
        <Modal onClose={props.onClose}>
            <h2 className={classes.title}>Edit Expense</h2>
            {/* {formState.inputs.amount.value && */}
            <form className={classes.expenseForm} onSubmit={updateExpenseHandler}>
                <Input
                    id="amount"
                    element="input"
                    type="number"
                    label="Cost"
                    placeholder="Cost USD"
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(0)]}
                    onInput={inputHandler}
                    value={formState.inputs.amount.value}
                    valid={formState.inputs.amount.isValid}
                    errorText="Please Enter a Valid Number" />

                <Input
                    id="date"
                    element="input"
                    type="date"
                    label="Date"
                    data-date-format="DD MMMM YYYY"
                    maxDate={new Date()}
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    value={moment(formState.inputs.date.value).format('yyyy-MM-DD')}
                    valid={formState.inputs.date.isValid}
                    errorText="Please Enter a Valid Date" />

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
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    value={formState.inputs.comments.value}
                    valid={formState.inputs.comments.isValid} />

                <div className={classes.buttonBar}>
                    <Button type="button" onClick={props.onClose}>Close</Button>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
            {/* } */}
        </Modal>
    );
}

export default EditExpense;