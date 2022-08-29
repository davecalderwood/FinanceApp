import React, { useState, useEffect } from 'react';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import { db, LIST_TITLES } from '../../shared/LocalBase/localbase';

import classes from '../../expenses/styles/AddExpense.module.scss';

const DeleteBudgetItem = (props) => {
    const [enableButton, setEnableButton] = useState(false);

    useEffect(() => {
        setTimeout(() => setEnableButton(true), 2000);
    }, []);

    const deleteHandler = () => {
        if (props.category === "budgetExpenses") {
            db.collection(LIST_TITLES.budgetExpenses).doc({ id: props.id }).delete().then(() => {
                props.onClose()
            });;
        } else if (props.category === "budgetIncome") {
            db.collection(LIST_TITLES.budgetIncome).doc({ id: props.id }).delete().then(() => {
                props.onClose()
            });;
        }
    }

    return (
        <Modal onClose={props.onClose}>
            <h2 className={classes.title}>Delete Budget Item</h2>

            <div className={classes.deleteItem}>
                <span>{props.title}</span>
                <span>${props.amount}</span>
            </div><br />

            <div className={classes.deleteExpense}>
                <span>This will delete this budget expense, this action can not be undone.</span><br />
                <span>Are you sure you want to delete?</span>
            </div>

            <div className={classes.buttonBar}>
                <Button type="button" onClick={props.onClose}>Close</Button>
                <Button
                    type="delete"
                    onClick={deleteHandler}
                    disabled={!enableButton}
                    className={classes.deleteButton}>Delete</Button>
            </div>
        </Modal>
    );
}

export default DeleteBudgetItem;