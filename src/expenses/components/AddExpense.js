import React from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Modal from '../../UI/Modal/Modal';
import { VALIDATOR_REQUIRE } from '../../shared/Utils/validators';
import classes from '../styles/AddExpense.module.scss';

const AddExpense = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <h1>Add Expense Modal</h1>

            <form className={classes.expenseForm}>
                <Input 
                    element="input" 
                    type="text" 
                    label="Title" 
                    placeholder="Placeholder"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please Enter a Valid Title" />
            </form>

            <Button onClick={props.onClose}>Close</Button>
        </Modal>
    );
}
 
export default AddExpense;