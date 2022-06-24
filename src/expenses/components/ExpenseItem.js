import React, { useState } from 'react';
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import classes from '../styles/ExpenseItem.module.scss';
import DeleteExpense from './DeleteExpense';
import EditExpense from './EditExpense';

const ExpenseItem = (props) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [showItemDetails, setShowItemDetails] = useState(false);

    const expandItemHandler = () => {
        setShowItemDetails(!showItemDetails);
    }
    
    const showEditModalHanlder = () => {
        setShowEditModal(true);
    }
    const hideEditModalHanlder = () => {
        setShowEditModal(false);
    }
    const showDeleteModalHanlder = () => {
        setShowDeleteModal(true);
    }
    const hideDeleteModalHanlder = () => {
        setShowDeleteModal(false);
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const formattedDate = props.date;

    const editHandler = () => {
        console.log("Edit");
    }
    const deleteHandler = () => {
        console.log("Delete");
    }

    const expandIcon = showItemDetails ? <FaChevronCircleUp onClick={expandItemHandler} /> : <FaChevronCircleDown onClick={expandItemHandler} />;

    return (
        <li className={showItemDetails ? classes.expandedItem : classes.expenseItem}>

            <div className={classes.hideDetails}>
                <div className={classes.expenseItemAmount}>
                    ${props.amount}
                </div>
                <div className={classes.expenseItemCategory}>
                    {props.category}
                </div>
                <div className={classes.expenseItemDate}>
                    {props.date}
                </div>

                {expandIcon}
            </div>

            {showItemDetails && 
                <div className={classes.showDetails}>
                    {props.comments}

                    <div className={classes.editDelete}>
                        <span className={classes.edit} onClick={showEditModalHanlder}>Edit</span> / 
                        <span className={classes.edit} onClick={showDeleteModalHanlder}>Delete</span>
                    </div>
                </div>
            }
            {showEditModal && <EditExpense onClose={hideEditModalHanlder} {...props} />}
            {showDeleteModal && <DeleteExpense onClose={hideDeleteModalHanlder} />}
        </li>
    );
}
 
export default ExpenseItem;