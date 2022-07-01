import React from 'react';
import ExpenseChart from '../components/ExpenseChart';
import SavingsGoal from '../components/SavingsGoal';
import SortedExpenses from '../components/SortedExpenses';

// CSS Modules let you use the same CSS class name in different files without worrying about naming clashes.
import classes from '../styles/Dashboard.module.scss';

const Dashboard = () => {

    return (
        <>
            {/* Savings Goal - Total Saved - Goal $$$ - Potential Goal End Date */}
            {/* Chart breakdown of expenses food vs online purchase vs whatever; Dropdown filter*/}
            <div className={classes.dashboard}>
                {/* <div className={classes.dashboardItem}>
                    <SavingsGoal />
                </div> */}
                <div className={classes.dashboardItem}>
                    {/* <ExpenseChart /> */}
                    <SortedExpenses />
                </div>

            </div>
        </>
    );
}

export default Dashboard;