import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import financeImage from '../../assets/finance.jpg';
import classes from './Header.module.scss';
import Button from '../Button/Button'
import SideDrawer from './SideDrawer';

const Header = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navLinks = 
    <div className={classes.navLinks}>
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
    </div>

    const openDrawerHandler = () => {
        setDrawerOpen(true);
    }


    return (
        <div>
            <header className={classes.header}>

                <div className={classes["main-navigation__menu-btn"]} onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </div>

                {drawerOpen && <SideDrawer>
                        <nav className={classes["main-navigation__drawer-nav"]}>
                            <div className={classes.drawerNav}>
                                {navLinks}
                            </div>
                        </nav>
                    </SideDrawer>}
                
                <div className={classes.mainNav}>
                    <h1>Expense App</h1>
                        {navLinks}
                </div>

                <Button onClick={props.onShowModal}>Add Expense</Button>
            </header>

            <div className={classes['main-image']}>
                <img src={financeImage} alt="Finance" />
            </div>
        </div>
    );
}
 
export default Header;