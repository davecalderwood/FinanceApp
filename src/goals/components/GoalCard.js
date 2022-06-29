import React from 'react';
import CardSmall from '../../UI/Card/CardSmall';
import Card from '../../UI/Card/Card'
import { useNavigate } from "react-router-dom";

import classes from '../styles/GoalCard.module.scss';

const GoalCard = (props) => {
    let navigate = useNavigate();

    const routeHandler = (event) => {
        console.log("Click", props);
        // event.preventDefault();
        navigate('/AddGoal', props);
    }

    return (
        <CardSmall onClick={routeHandler}>
            <p className={classes.label}>{props.label}</p>
            <span className={classes.icon}>{props.icon}</span>
        </CardSmall>
    );
}

export default GoalCard;