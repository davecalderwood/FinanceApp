import React from 'react';

const BudgetItems = (props) => {

    return (
        <li>
            <div>
                <div>
                    ${props.amount}
                </div>
                <div>
                    {props.date}
                </div>
            </div>
        </li>
    );
}

export default BudgetItems;