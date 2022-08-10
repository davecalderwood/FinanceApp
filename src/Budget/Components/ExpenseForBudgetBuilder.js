import React from 'react';
import useForm from '../../shared/Hooks/useForm';
import { VALIDATOR_MIN, VALIDATOR_MINLENGTH } from '../../shared/Utils/validators';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

const ExpenseForBudgetBuilder = (props) => {
    const [formState, inputHandler] = useForm({
        expenseName: {
            value: '',
            isValid: false
        },
        expectedExpense: {
            value: "",
            isValid: false
        },
    }, false);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formState.inputs);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <Input
                id="expenseName"
                element="input"
                type="text"
                label="Expense"
                placeholder="Name of Expense"
                validators={[VALIDATOR_MINLENGTH(0)]}
                onInput={inputHandler} />

            <Input
                id="expectedExpense"
                element="input"
                type="number"
                label="Expected Cost"
                placeholder="Expected cost for this item"
                validators={[VALIDATOR_MIN(0)]}
                onInput={inputHandler}
                errorText="Please Enter a Valid Number" />

            <Button type="submit" disabled={!formState.isValid}>Submit</Button>
        </form>
    );
}

export default ExpenseForBudgetBuilder;