import React from 'react';
import { NavLink } from 'react-router-dom';
import financeImage from '../../assets/finance.jpg';
import classes from './Header.module.css';
import Button from '../Button/Button'

const Header = (props) => {
    return (
        <div>
            <header className={classes.header}>
                <h1>Expense App</h1>
                <NavLink 
                    to="/" 
                    className={classes.link}
                    onClick={() => props.setColor("#ebe3ff")}>Home
                </NavLink>

                <NavLink 
                    to="/expenses" 
                    className={classes.link}
                    onClick={() => props.setColor("#ffe0e0")}>Expenses
                </NavLink>

                <NavLink 
                    to="/Savings" 
                    className={classes.link} 
                    onClick={() => props.setColor("#e7ffe3")}>Savings
                </NavLink>

                <Button onClick={props.onShowModal}>Add Expense</Button>
            </header>

            <div className={classes['main-image']}>
                <img src={financeImage} alt="Finance" />
            </div>
        </div>
    );
}
 
export default Header;