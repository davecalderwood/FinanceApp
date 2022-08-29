import React, { useState } from 'react';
import useForm from '../../shared/Hooks/useForm';
import { VALIDATOR_MIN, VALIDATOR_MINLENGTH } from '../../shared/Utils/validators';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import { db, LIST_TITLES } from '../../shared/LocalBase/localbase';

const ExpenseForBudgetBuilder = (props) => {
    const [budgetExists, setBudgetExists] = useState(false);
    const [formState, inputHandler] = useForm({
        Title: {
            value: '',
            isValid: false
        },
        Amount: {
            value: "",
            isValid: false
        },
    }, false);

    const id = Math.random();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formState.inputs);
        // db.collection(LIST_TITLES.budgetExpenses).delete();

        db.collection(LIST_TITLES.budgetExpenses).get().then(items => {
            console.log(items);
            // Short hand for checking if item exists in localbase budgetExpenses
            // Using inputs.Title instead of id since id is currently just a random number; normally I would check by id
            const itemExists = items.some(i => i.Title.toLowerCase() === formState.inputs.Title.value.toLowerCase());
            if (itemExists) {
                setBudgetExists(true);
            } else {
                setBudgetExists(false);
                db.collection(LIST_TITLES.budgetExpenses).add({
                    id: id,
                    Title: formState.inputs.Title.value,
                    Amount: formState.inputs.Amount.value,
                    Category: "budgetExpenses",
                }).then(() => {
                    props.onClose()
                });
            }
        })
    }

    return (
        <Modal onClose={props.onClose}>
            <form onSubmit={formSubmitHandler}>
                <Input
                    id="Title"
                    element="input"
                    type="text"
                    label="Expense"
                    placeholder="Name of Expense"
                    validators={[VALIDATOR_MINLENGTH(0)]}
                    onInput={inputHandler} />

                <Input
                    id="Amount"
                    element="input"
                    type="number"
                    label="Expected Cost"
                    placeholder="Expected cost for this item"
                    validators={[VALIDATOR_MIN(0)]}
                    onInput={inputHandler}
                    errorText="Please Enter a Valid Number" />

                {budgetExists && <p>Expense item already exists. Please check spelling.</p>}

                <Button type="submit" disabled={!formState.isValid}>Submit</Button>
            </form>
        </Modal>
    );
}

export default ExpenseForBudgetBuilder;