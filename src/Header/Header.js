import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import financeImage from '../assets/finance.jpg';
import classes from './Header.module.scss';
import Button from '../UI/Button/Button'
import SideDrawer from './SideDrawer';
import { AuthContext } from '../shared/Context/auth-context';
import { FaUserCircle } from "react-icons/fa";
import HoverMenuButton from './HoverMenuButton.js'

const Header = (props) => {
    // auth is now an object that will hold the isLoggedIn, login, logout
    const auth = useContext(AuthContext);
    let navigate = useNavigate();

    // the Drawer is for small screens and mobile views
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navLinks =
        <div className={classes.navLinks}>
            {auth.isLoggedIn &&
                <>
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


                    <NavLink
                        to="/Goals"
                        className={classes.link}
                        onClick={() => props.setColor("#e7ffe3")}>Goals
                    </NavLink>
                </>
            }
        </div>

    const openDrawerHandler = () => {
        setDrawerOpen(true);
    }
    const closeDrawerHandler = () => {
        setDrawerOpen(false);
    }


    return (
        <div>
            <header className={classes.header}>

                <div className={classes["main-navigation__menu-btn"]} onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </div>

                {drawerOpen && <SideDrawer onClick={closeDrawerHandler}>
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

                {/* {auth.isLoggedIn && <Button onClick={logoutHandler}><FaUserCircle /> Logout</Button>} */}

                <div className={classes.loggedInButtons}>
                    {auth.isLoggedIn && <Button onClick={props.onShowModal}>Add Expense</Button>}
                    {auth.isLoggedIn && <div className={classes.hoverMenu}>
                        <span>Profile</span>
                        <div className={classes.subMenu}>
                            <HoverMenuButton props={props} />
                        </div>
                    </div>}
                </div>
            </header>

            <div className={classes['main-image']}>
                <img src={financeImage} alt="Finance" />
            </div>
        </div>
    );
}

export default Header;