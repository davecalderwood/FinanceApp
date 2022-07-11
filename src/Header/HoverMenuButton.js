import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../shared/Context/auth-context';

import classes from './HoverMenuButton.module.scss';

const HoverMenuButton = (props) => {
    const auth = useContext(AuthContext);
    let navigate = useNavigate();
    const logoutHandler = () => {
        auth.logout();
        navigate('/Auth', { replace: true });
        // props.setColor("#ffffff")
    }

    const goToProfileHandler = () => {
        navigate('/Profile', { replace: true });
    }

    return (
        <>
            <ul className={classes.subMenu}>
                <li className={classes.subMenuItem}>
                    <p onClick={goToProfileHandler}>Profile</p>
                </li>
                <li onClick={logoutHandler} className={classes.subMenuItem}>
                    <p>Logout</p>
                </li>
            </ul>
        </>
    );
}

export default HoverMenuButton;