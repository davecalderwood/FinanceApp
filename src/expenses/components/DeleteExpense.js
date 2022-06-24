import React from 'react';
import Modal from '../../UI/Modal/Modal';

import classes from '../styles/AddExpense.module.scss';

const DeleteExpense = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <h2 className={classes.title}>Delete Expense</h2>

        </Modal>
    );
}
 
export default DeleteExpense;