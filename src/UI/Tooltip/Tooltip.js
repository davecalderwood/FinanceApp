import React, { useState } from 'react';
import classes from './Tooltip.module.scss'

const Tooltip = (props) => {
    let timeout; // Delay timer for how long to delay before showing
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, props.delay || 100); // set timeout on called component or default to 100ms
    };
    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    var tooltipStyle;

    if (props.direction === 'right') {
        tooltipStyle = classes.right;
    }

    return (
        // Show and hide div based on mouse enter/leave; this is vanilla js functionality and not react specific 
        <div
            className={classes.tooltipWrapper}
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {props.children}
            {active && (
                <div className={`${classes.tooltipTip} ${tooltipStyle}`}>
                    {/* Pass content from called function to display here */}
                    {props.content}
                </div>
            )}
        </div>
    );
}

export default Tooltip;