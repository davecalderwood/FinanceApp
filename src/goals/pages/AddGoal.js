import React from 'react';
import { useLocation } from 'react-router-dom';

// import classes from '../styles/AddGoal.module.scss';

// When a goal area is selected, it will route to the /Goals/AddGoals route where a form can be filled out
// Form should have: End date, Goal Amount, Category (pre-filled in?), Starting Amount
const AddGoal = (props) => {
    const location = useLocation();
    console.log("LOC", location)

    return (
        <>
            <span>{location.id}</span>
            <span>{location.label}</span>
            <span>{location.category}</span>
        </>
    );
}

export default AddGoal;