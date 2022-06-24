import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

import classes from '../styles/SavingsGoal.module.scss';

const SavingsGoal = () => {
    var totalGoal = 1000;
    var completed = 950;
    const percentComplete = Math.floor((completed / totalGoal) * 100)

    const getGreenToRed = (percentComplete) => {
        var r = percentComplete<50 ? 255 : Math.floor(255-(percentComplete*2-100)*255/100);
        var g = percentComplete>50 ? 255 : Math.floor((percentComplete*2)*255/100);
        return 'rgb('+r+','+g+',0)';
    }

    return (
        <>
            <div className="card">
                <h4 className="cardTitle">Savings Goal</h4>
                <hr />
                
                <div className={classes.progressBar}>
                    <ProgressBar completed={percentComplete} bgColor={`${getGreenToRed(percentComplete)}`} />
                </div>

                <div className={classes.savingsGoal}>
                    <div className={classes.goalItem}>Current</div>
                    <div className={classes.goalItem}>End Goal</div>
                    <div className={classes.goalItem}>End Date</div>
                </div>
            </div>
        </>
    );
}
 
export default SavingsGoal;