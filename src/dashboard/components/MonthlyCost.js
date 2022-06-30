import React from 'react';
import SmallCard from '../../UI/Card/CardSmall';

import classes from '../styles/SortedExpenses.module.scss';

const MontlyCost = (props) => {
    return (
        <SmallCard>
        <div className={classes.data}>
            <div className={classes.label}>
                {props.label}
            </div>
            <div className={classes.total}>
                ${props.total}
            </div>
        </div>
    </SmallCard>
    );
}
 
export default MontlyCost;