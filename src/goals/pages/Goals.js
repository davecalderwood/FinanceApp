import React from 'react';
import CurrentGoals from '../components/CurrentGoals';
import Goal from '../components/Goal';

import MOCK_GOALS from '../../MOCK_GOALS.json';

// In full-stack on Add Expense API call:
// Check if expense category is savings
// Check if expense date is within goal date range
// Add amount to goal total

const Goals = () => {
    return (
        <>
            {/* Goals would be a different API endpoint from add expense */}
            <CurrentGoals items={MOCK_GOALS} />
            <Goal />
            {/* Test push after branch protection */}
        </>
    );
}

export default Goals;