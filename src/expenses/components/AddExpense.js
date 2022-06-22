import React, { useCallback, useReducer, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Modal from '../../UI/Modal/Modal';
import { VALIDATOR_MIN, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/Utils/validators';

import classes from '../styles/AddExpense.module.scss';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            }
        default: 
            return state;
    }
};

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
    const [startDate, setStartDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            amount: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    });

    // const calendarIsValid = 

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id})
    }, []);

    const dropdownSelectHandler = selectedOption => {
        setSelectedOption(selectedOption);
    };

    return (
        <Modal onClose={props.onClose}>
            <h2 className={classes.title}>Add Expense</h2>

            <form className={classes.expenseForm}>
                <Input 
                    id="title"
                    element="input" 
                    type="text" 
                    label="Title" 
                    placeholder="Placeholder"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    onInput={inputHandler}
                    errorText="Please Enter a Valid Title" />
                    
                <Input 
                    id="amount"
                    element="input" 
                    type="number" 
                    label="Cost" 
                    placeholder="Cost USD"
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(0)]}
                    onInput={inputHandler}
                    errorText="Please Enter a Valid Number" />

                <label><strong>Date</strong></label>
                <DatePicker 
                    id="calendar"
                    type="picker"
                    className={classes.datePicker}
                    selected={startDate}
                    maxDate={new Date()}
                    onChange={(date) => setStartDate(date)} /><br/>

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

                <div className={classes.buttonBar}>
                    <Button type="button" onClick={props.onClose}>Close</Button>
                    <Button type="submit" disabled={!formState.isValid} onClick={props.onClose}>Submit</Button>
                </div>
            </form>

        </Modal>
    );
}
 
export default AddExpense;