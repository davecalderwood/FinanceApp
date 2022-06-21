import React from 'react';
import Modal from '../../UI/Modal/Modal';

const AddExpense = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <h1>Add Expense Modal</h1>
            <button onClick={props.onClose}>Close</button>
        </Modal>
    );
}
 
export default AddExpense;