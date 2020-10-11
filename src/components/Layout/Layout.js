import React from "react";
import Aux from '../../hoc/Auxi';
import classes from './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
const Layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className={classes.Components}>
            {props.children}
        </main>
    </Aux>
);
export default Layout;