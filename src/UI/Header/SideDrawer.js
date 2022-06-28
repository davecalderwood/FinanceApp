import React from 'react';
import ReactDom from 'react-dom';

import classes from './SideDrawer.module.scss';

const SideDrawer = (props) => {
    const content = 
        <aside className={classes["side-drawer"]}>
            {props.children}
        </aside>

    return ReactDom.createPortal(content, document.getElementById("drawerHook"));
}
 
export default SideDrawer;