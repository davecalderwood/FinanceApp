import React, { useEffect } from 'react';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import useForm from '../../shared/Hooks/useForm'
import { db, LIST_TITLES } from '../../shared/LocalBase/localbase';
import { VALIDATOR_MIN, VALIDATOR_MINLENGTH } from '../../shared/Utils/validators';

const EditBudgetItem = (props) => {
    const [formState, inputHandler, setFormData] = useForm({
        Title: {
            value: '',
            isValid: false
        },
        Amount: {
            value: "",
            isValid: false
        },
    }, false);

    const expenseToUpdate = props;

    useEffect(() => {
        setFormData({
            Title: {
                value: expenseToUpdate.title,
                isValid: false
            },
            Amount: {
                value: expenseToUpdate.amount,
                isValid: false
            },
        }, true);
    }, [setFormData, expenseToUpdate]);

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (props.category === "budgetExpenses") {
            db.collection(LIST_TITLES.budgetExpenses).doc({ id: props.id }).set({
                id: props.id,
                Title: formState.inputs.Title,
                Amount: expenseToUpdate.amount,
                Category: "budgetExpenses",
            })
        } else if (props.category === "budgetIncome") {
            db.collection(LIST_TITLES.budgetIncome).doc({ id: props.id }).set({
                id: props.id,
                Title: formState.inputs.Title,
                Amount: expenseToUpdate.amount,
                Category: "budgetIncome",
            })
        }
    }

    return (
        <Modal onClose={props.onClose}>
            <form onSubmit={formSubmitHandler}>
                <Input
                    id="Title"
                    element="input"
                    type="text"
                    label="Title"
                    placeholder="Name of Expense"
                    validators={[VALIDATOR_MINLENGTH(0)]}
                    value={expenseToUpdate.title}
                    valid={expenseToUpdate.title.isValid}
                    onInput={inputHandler} />

                <Input
                    id="Amount"
                    element="input"
                    type="number"
                    label="Expected Amount"
                    placeholder="Expected amount for this item"
                    validators={[VALIDATOR_MIN(0)]}
                    onInput={inputHandler}
                    value={expenseToUpdate.amount}
                    valid={expenseToUpdate.amount.isValid}
                    errorText="Please Enter a Valid Number" />

                <Button type="submit">Submit</Button>
            </form>
        </Modal>
    );
}

export default EditBudgetItem;