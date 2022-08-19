import React, { useState } from 'react';
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import classes from '../styles/ExpenseItem.module.scss';
import DeleteExpense from './DeleteExpense';
import EditExpense from './EditExpense';
import Tooltip from '../../UI/Tooltip/Tooltip';

// This is where the individual expense item will render and have all its logic on it

const ExpenseItem = (props) => {
    // use state to show each modal
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // show or hide comments and edit/delete functionality
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

    const expandIcon = showItemDetails ? <FaChevronCircleUp onClick={expandItemHandler} /> : <FaChevronCircleDown onClick={expandItemHandler} />;

    // Destructure category text to make UI look better, JSON does not have spaces
    var categoryText = props.category;
    if (categoryText === "OnlineShopping") {
        categoryText = "Online Shopping";
    } else if (categoryText === "FastFood") {
        categoryText = "Fast Food";
    }

    return (
        <div className={classes.itemPosition}>
            <Tooltip content={props.comments} direction="right">
                <li className={showItemDetails ? classes.expandedItem : classes.expenseItem}>

                    {/* everything here will just be props.whatever, this will not be specific at all, 
            just shows where each item is shown from the Expenses.js data */}

                    <div className={classes.hideDetails}>
                        <div className={classes.expenseItemAmount}>
                            ${props.amount}
                        </div>
                        <div className={classes.expenseItemCategory}>
                            {categoryText}
                        </div>
                        <div className={classes.expenseItemDate}>
                            {props.date}
                        </div>

                        {expandIcon}
                    </div>

                    {/* const [showItemDetails, setShowItemDetails] = useState(false); will show or hide the individual item specifics */}
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
                    {showDeleteModal && <DeleteExpense onClose={hideDeleteModalHanlder} {...props} />}
                </li>
            </Tooltip>
        </div>
    );
}

export default ExpenseItem;