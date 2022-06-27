import React from 'react';
import CardSmall from '../../UI/Card/CardSmall';

import classes from '../styles/GoalCard.module.scss';

const GoalCard = (props) => {
    return (
        <CardSmall>
            <p className={classes.label}>{props.label}</p>
            <span className={classes.icon}>{props.icon}</span>
        </CardSmall>
    );
}

export default GoalCard;