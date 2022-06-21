import React, { useState } from 'react';

import classes from '../styles/ExpenseItem.module.scss';

const ExpenseItem = (props) => {
    const [showItemDetails, setShowItemDetails] = useState(false);

    const expandItemHandler = () => {
        setShowItemDetails(!showItemDetails);
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const formattedDate = props.date;

    return (
        <li className={showItemDetails ? classes.expandedItem : classes.expenseItem} onClick={expandItemHandler}>

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
            </div>

            {showItemDetails && <div className={classes.showDetails}>{props.comments}</div>}
        </li>
    );
}
 
export default ExpenseItem;