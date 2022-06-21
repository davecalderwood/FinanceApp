import React from 'react';
import { NavLink } from 'react-router-dom';
import financeImage from '../../assets/finance.jpg';
import classes from './Header.module.css';
import Button from '../Button/Button'

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Expense App</h1>
                <NavLink to="/" className={classes.link}>Home</NavLink>
                <NavLink to="/expenses" className={classes.link}>Expenses</NavLink>
                <Button onClick={props.onShowModal}>Add Expense</Button>
            </header>

            <div className={classes['main-image']}>
                <img src={financeImage} alt="Finance" />
            </div>
        </>
    );
}
 
export default Header;