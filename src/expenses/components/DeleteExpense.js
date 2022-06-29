import React, { useState, useEffect } from 'react';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';

import classes from '../styles/AddExpense.module.scss';

const DeleteExpense = (props) => {
    const [enableButton, setEnableButton] = useState(false);

    useEffect(() => {
        setTimeout(() => setEnableButton(true), 2000);
    }, []);

    const deleteHandler = () => {
        console.log("Delete", props.amount, props.comments);
    }

    const myComponentStyle = {
        background: 'red'
    }

    return (
        <Modal onClose={props.onClose}>
            <h2 className={classes.title}>Delete Expense</h2>

            <div className={classes.deleteItem}>
                <span>${props.amount}</span>
                <span>{props.date}</span>
                <span>{props.category}</span>
                <span>{props.comments}</span>
            </div><br />

            <div className={classes.deleteExpense}>
                <span>This will delete this expense, this action can not be undone.</span><br />
                <span>Are you sure you want to delete?</span>
            </div>

            <div className={classes.buttonBar}>
                <Button type="button" onClick={props.onClose}>Close</Button>
                <Button
                    type="delete"
                    onClick={deleteHandler}
                    disabled={!enableButton}
                    style={{ background: 'red' }}
                    className={classes.deleteButton}>Delete</Button>
            </div>
        </Modal>
    );
}

export default DeleteExpense;