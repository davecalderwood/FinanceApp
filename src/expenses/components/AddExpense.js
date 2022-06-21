import React, { useCallback, useReducer } from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Modal from '../../UI/Modal/Modal';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/Utils/validators';
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

const AddExpense = (props) => {
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

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id})
    }, []);

    return (
        <Modal onClose={props.onClose}>
            <h1>Add Expense Modal</h1>

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
                    label="Number" 
                    placeholder="Number"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    errorText="Please Enter a Valid Number" />

                <div className={classes.buttonBar}>
                    <Button type="button" onClick={props.onClose}>Close</Button>
                    <Button type="submit" disabled={!formState.isValid} onClick={props.onClose}>Submit</Button>
                </div>
            </form>

        </Modal>
    );
}
 
export default AddExpense;