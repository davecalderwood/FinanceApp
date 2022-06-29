import React from 'react';

import classes from './Card.module.scss';

const Card = (props) => {
    return (
        <div className={classes.card} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default Card;