import React from 'react';
import SmallCard from '../../UI/Card/CardSmall';

import classes from '../styles/SortedExpenses.module.scss';

const MonthlyCost = (props) => {
    return (
        <SmallCard>
            <div className={classes.data}>
                <div className={classes.label}>
                    {props.label}
                </div>
                <div className={classes.expenses}>
                    ${props.expenses}
                </div>
                <div className={classes.savings}>
                    ${props.savings}
                </div>
            </div>
        </SmallCard>
    );
}

export default MonthlyCost;