import React from "react";
import Aux from '../../hoc/Auxi'
import classes from './Layout.css'
const Layout = (props) => (
    <Aux>
        <div>nav, dropdown, button</div>
        <main className={classes.Components}>
            {props.children}
        </main>
    </Aux>
);
export default Layout;