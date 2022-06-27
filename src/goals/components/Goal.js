import React from 'react';
import GoalCard from './GoalCard';

import {
    FaCar,
    FaHome,
    FaUmbrella,
    FaPlane,
    FaGraduationCap,
    FaSistrix,
    FaMoneyCheck
} from "react-icons/fa";

import classes from '../styles/Goal.module.scss';
// Add an unlimited number of goals, there will be default goal categories, but also a "something else" category
const listOfGoals = [
    { label: 'Car', value: 'buyCar', icon: <FaCar />, id: 0 },
    { label: 'House', value: 'buyHouse', icon: <FaHome />, id: 1 },
    { label: 'Rainy Day', value: 'rainyDayFund', icon: <FaUmbrella />, id: 2 },
    { label: 'Wedding', value: 'weddingFund', icon: <FaMoneyCheck />, id: 3 },
    { label: 'College', value: 'collegeFund', icon: <FaGraduationCap />, id: 4 },
    { label: 'Trip', value: 'vacationFund', icon: <FaPlane />, id: 5 },
    { label: 'Something Else', value: 'otherFund', icon: <FaSistrix />, id: 6 },
]

const Goal = (props) => {
    return (
        <>
            <div className={classes.pageTitle}>SAVE FOR A: </div>

            <ul className={classes.goals}>
                {listOfGoals.map((goal) =>
                    <GoalCard
                        key={goal.id}
                        id={goal.id}
                        label={goal.label}
                        icon={goal.icon}
                        category={goal.value} />
                )}
            </ul>
        </>
    );
}

export default Goal;