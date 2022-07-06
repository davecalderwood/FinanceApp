import React from 'react';
import ActiveGoal from './ActiveGoal';

const CurrentGoals = (props) => {
    console.log(props);

    const goalsList = props.items.map(i => i);
    var data = JSON.parse(JSON.stringify(goalsList));

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
            {goals}
        </>
    );
}

export default CurrentGoals;