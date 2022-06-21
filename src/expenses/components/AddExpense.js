import React from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Modal from '../../UI/Modal/Modal';

import classes from '../styles/AddExpense.module.scss';

const AddExpense = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <h1>Add Expense Modal</h1>

            <form className={classes.expenseForm}>
                <Input element="input" type="text" label="Title" placeholder="Placeholder" />
            </form>

            <Button onClick={props.onClose}>Close</Button>
        </Modal>
    );
}
 
export default AddExpense;