import React from 'react';
import Card from '../../UI/Card/Card';
import ProgressBar from "@ramonak/react-progress-bar";

import classes from '../styles/ActiveGoal.module.scss';

const ActiveGoal = (props) => {
    var completed = props.currentAmount;
    var totalGoal = props.endAmount;
    const percentComplete = Math.floor((completed / totalGoal) * 100)

    const getGreenToRed = (percentComplete) => {
        var r = percentComplete < 50 ? 255 : Math.floor(255 - (percentComplete * 2 - 100) * 255 / 100);
        var g = percentComplete > 50 ? 255 : Math.floor((percentComplete * 2) * 255 / 100);
        return 'rgb(' + r + ',' + g + ',0)';
    }

    return (
        <Card>
            <div className={classes.goal}>
                <div>{props.title}</div>

                <div className={classes.progress}>
                    <div className={classes.labels}>
                        {/* <div>${props.startingAmount}</div> */}
                        <div>{props.startDate}</div>

                    </div>

                    <div className={classes.progressBar}>
                        <ProgressBar
                            completed={percentComplete}
                            customLabel={`$${props.currentAmount}`}
                            bgColor={`${getGreenToRed(percentComplete)}`}
                            labelColor="#000000" />
                    </div>

                    <div className={classes.labels}>
                        <div>${props.endAmount}</div>
                        <div>{props.endDate}</div>

                    </div>
                </div>
            </div>
        </Card>
    );
}

export default ActiveGoal;