import React, { useState } from 'react';
import ActiveGoal from './ActiveGoal';

const CurrentGoals = (props) => {
    const [showOldGoals, setShowOldGoals] = useState(false);

    const oldGoalToggleHandler = () => {
        setShowOldGoals(prevMode => !prevMode)
    }

    const checkIfGoalRangeIncludesToday = () => {
        var isActiveGoal = false;

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        if (today > props.goalStartDate && today < props.goalEndDate) {
            isActiveGoal = true;
        } else {
            isActiveGoal = false;
        }
        return isActiveGoal;
    }


    const goalsList = props.items.map(i => i);

    const goals = goalsList.map(goal => {
        return <ActiveGoal
            key={goal.id}
            id={goal.id}
            title={goal.title}
            startDate={goal.goalStartDate}
            endDate={goal.goalEndDate}
            startingAmount={goal.goalStartingAmount}
            currentAmount={goal.goalCurrentAmount}
            endAmount={goal.goalEndAmount} />
    });

    return (
        <>
            <h3>Current Goals</h3>
            <input
                type="checkbox"
                checked={showOldGoals}
                onChange={oldGoalToggleHandler} />

            {goals}
        </>
    );
}

export default CurrentGoals;