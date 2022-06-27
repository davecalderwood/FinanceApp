import React from 'react';

import classes from './CardSmall.module.scss';

const CardSmall = (props) => {
    return (
        <div className={classes.card} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default CardSmall;