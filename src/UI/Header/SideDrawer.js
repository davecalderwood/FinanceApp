import React from 'react';
import ReactDom from 'react-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import classes from './SideDrawer.module.scss';

const SideDrawer = (props) => {
    const content = 
        <aside className={classes["side-drawer"]}>
            <div onClick={props.onClick} className={classes.drawerControl}>
                <FaChevronRight />
                <FaChevronLeft style={{marginLeft: '-26px'}} />
            </div>
            {props.children}
        </aside>

    return ReactDom.createPortal(content, document.getElementById("drawerHook"));
}
 
export default SideDrawer;