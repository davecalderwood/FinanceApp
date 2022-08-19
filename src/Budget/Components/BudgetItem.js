import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import classes from '../Styles/BudgetExpenseItem.module.scss';
import DeleteBudgetItem from './DeleteBudgetItem';
import EditBudgetItem from './EditBudgetItem';

import { db, LIST_TITLES } from '../../shared/LocalBase/localbase';

const BudgetItem = (props) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

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

    return (
        <li className={classes.list}>
            <div className={classes.lineItem}>
                {props.title}
                <div className={classes.edit} onClick={showEditModalHanlder}>
                    <FaEdit />
                </div>
            </div>
            <div className={classes.lineItem}>
                {props.amount}
                <div className={classes.delete} onClick={showDeleteModalHanlder}>
                    <FaTrashAlt />
                </div>
            </div>

            {showEditModal && <EditBudgetItem onClose={hideEditModalHanlder} {...props} />}
            {showDeleteModal && <DeleteBudgetItem onClose={hideDeleteModalHanlder} {...props} />}
        </li>
    );
}

export default BudgetItem;